
import React from 'react';
import { useAuth } from '@/backend/auth/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export const StudentWelcomeCard = () => {
  const { profile } = useAuth();

  const getCurrentGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              {getCurrentGreeting()}, {profile?.fname}!
            </h2>
            <p className="text-blue-100 mb-4">
              Welcome back to your learning dashboard. Ready to achieve your goals today?
            </p>
            <div className="flex items-center text-sm text-blue-100">
              <GraduationCap className="h-4 w-4 mr-2" />
              <span>Student ID: {profile?.unique_id}</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 p-4 rounded-full">
              <GraduationCap className="h-12 w-12" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
