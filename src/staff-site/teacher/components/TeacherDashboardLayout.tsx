
import React, { useState } from 'react';
import { useAuth } from '@/backend/auth/AuthContext';
import TeacherSidebar from './TeacherSidebar';
import { Button } from '@/components/ui/button';
import { Menu, Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface TeacherDashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const TeacherDashboardLayout = ({ children, title }: TeacherDashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { profile } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <TeacherSidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden"
                >
                  <Menu className="h-6 w-6" />
                </Button>
                <h1 className="ml-4 lg:ml-0 text-xl font-semibold text-gray-900">
                  {title || 'Teacher Dashboard'}
                </h1>
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    3
                  </Badge>
                </Button>
                
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      {profile?.fname} {profile?.lname}
                    </p>
                    <p className="text-xs text-gray-500 capitalize">
                      {profile?.role}
                    </p>
                  </div>
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-900 font-semibold text-sm">
                      {profile?.fname?.[0]}{profile?.lname?.[0]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboardLayout;
