
import React from 'react';
import { useAuth } from '@/backend/auth/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export const AdminWelcomeCard = () => {
  const { profile } = useAuth();

  const getCurrentGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <Card className="bg-gradient-to-r from-red-600 to-pink-600 text-white">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              {getCurrentGreeting()}, {profile?.fname}!
            </h2>
            <p className="text-red-100 mb-4">
              Manage the school system, oversee operations, and ensure everything runs smoothly.
            </p>
            <div className="flex items-center text-sm text-red-100">
              <Shield className="h-4 w-4 mr-2" />
              <span>Admin ID: {profile?.unique_id}</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 p-4 rounded-full">
              <Shield className="h-12 w-12" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
