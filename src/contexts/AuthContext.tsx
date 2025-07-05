
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

interface Profile {
  id: string;
  unique_id: string;
  fname: string;
  mname?: string;
  lname: string;
  email: string;
  phone?: string;
  role: 'student' | 'family' | 'teacher' | 'registrar' | 'admin' | 'director';
  gender?: string;
  disabled: boolean;
}

interface AuthContextType {
  user: Profile | null;
  session: any;
  profile: Profile | null;
  loading: boolean;
  signIn: (uniqueId: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string, userData: any) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Profile | null>(null);
  const [session, setSession] = useState<any>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Check for existing session in localStorage
    const savedUser = localStorage.getItem('school_user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        setProfile(userData);
        setSession({ user: userData });
      } catch (error) {
        localStorage.removeItem('school_user');
      }
    }
    setLoading(false);
  }, []);

  const signIn = async (uniqueId: string, password: string) => {
    try {
      console.log('Attempting login with unique ID:', uniqueId);
      
      const { data, error } = await supabase.rpc('authenticate_user', {
        user_unique_id: uniqueId,
        user_password: password
      });

      console.log('Authentication response:', { data, error });

      if (error) {
        console.error('Authentication error:', error);
        toast({
          title: "Login Failed",
          description: error.message || "Invalid credentials",
          variant: "destructive",
        });
        return { error };
      }

      if (!data || data.length === 0) {
        const errorMsg = "Invalid unique ID or password";
        toast({
          title: "Login Failed",
          description: errorMsg,
          variant: "destructive",
        });
        return { error: { message: errorMsg } };
      }

      const userData = data[0];
      console.log('User data:', userData);
      
      // Cast the role to the correct type
      const profileData: Profile = {
        ...userData,
        role: userData.role as 'student' | 'family' | 'teacher' | 'registrar' | 'admin' | 'director'
      };
      
      setUser(profileData);
      setProfile(profileData);
      setSession({ user: profileData });
      
      // Save to localStorage for persistence
      localStorage.setItem('school_user', JSON.stringify(profileData));
      
      toast({
        title: "Login Successful",
        description: `Welcome back, ${userData.fname}!`,
      });
      
      return { error: null };
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Login Failed",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
      return { error };
    }
  };

  const signUp = async (email: string, password: string, userData: any) => {
    try {
      // Generate unique ID based on role
      const rolePrefix = userData.role === 'student' ? 'LSSS' : 
                        userData.role === 'family' ? 'LSSF' : 
                        userData.role === 'teacher' ? 'LSST' : 
                        userData.role === 'admin' ? 'LSSA' : 'LSSG';
      
      const timestamp = Date.now().toString().slice(-7);
      const uniqueId = `${rolePrefix}${timestamp}`;

      const { error } = await supabase
        .from('users')
        .insert({
          id: crypto.randomUUID(), // Generate UUID for id field
          unique_id: uniqueId,
          fname: userData.fname,
          mname: userData.mname,
          lname: userData.lname,
          email: email,
          phone: userData.phone,
          role: userData.role,
          gender: userData.gender,
          password: password, // This will be hashed by a database trigger
          disabled: false
        });

      if (error) {
        toast({
          title: "Sign Up Failed",
          description: error.message,
          variant: "destructive",
        });
        return { error };
      }

      toast({
        title: "Account Created!",
        description: `Your unique ID is: ${uniqueId}. Please use this to login.`,
      });

      return { error: null };
    } catch (error) {
      console.error('Sign up error:', error);
      return { error };
    }
  };

  const signOut = async () => {
    try {
      console.log('Starting logout process...');
      
      // Clear all state immediately
      setUser(null);
      setProfile(null);
      setSession(null);
      
      // Clear localStorage
      localStorage.removeItem('school_user');
      
      console.log('State cleared, showing success message...');
      
      // Show success message
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });

      console.log('Redirecting to login page...');
      
      // Use setTimeout to ensure state updates are processed before redirect
      setTimeout(() => {
        window.location.href = '/login';
      }, 100);
      
    } catch (error) {
      console.error('Logout error:', error);
      // Even if there's an error, clear the state and redirect
      setUser(null);
      setProfile(null);
      setSession(null);
      localStorage.removeItem('school_user');
      
      toast({
        title: "Logged Out",
        description: "You have been logged out.",
        variant: "default",
      });
      
      setTimeout(() => {
        window.location.href = '/login';
      }, 100);
    }
  };

  const value = {
    user,
    session,
    profile,
    loading,
    signIn,
    signUp,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
