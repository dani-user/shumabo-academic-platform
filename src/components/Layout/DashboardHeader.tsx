
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';

const DashboardHeader = () => {
  const { profile, signOut } = useAuth();

  const handleLogout = async () => {
    console.log('Logout button clicked');
    try {
      await signOut();
    } catch (error) {
      console.error('Error during logout:', error);
      // Fallback: force redirect even if signOut fails
      window.location.href = '/login';
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome, {profile?.fname} {profile?.lname}
          </h1>
          <p className="text-sm text-gray-600 capitalize">
            {profile?.role} Dashboard
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <User className="h-4 w-4" />
            <span>{profile?.email}</span>
          </div>
          <Button onClick={handleLogout} variant="outline" size="sm">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
