
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '@/backend/auth/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  UserCheck, 
  Bell, 
  User,
  LogOut,
  GraduationCap
} from 'lucide-react';

interface StudentSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const StudentSidebar = ({ isOpen, onClose }: StudentSidebarProps) => {
  const { profile, signOut } = useAuth();

  const navigationItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/public-site/student' },
    { icon: BookOpen, label: 'My Grades', path: '/public-site/student/grades' },
    { icon: Calendar, label: 'Timetable', path: '/public-site/student/timetable' },
    { icon: UserCheck, label: 'Attendance', path: '/public-site/student/attendance' },
    { icon: Bell, label: 'Announcements', path: '/public-site/student/announcements' },
    { icon: User, label: 'Profile', path: '/public-site/student/profile' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center px-6 py-4 border-b border-gray-200">
            <div className="bg-blue-900 p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="ml-3">
              <h1 className="text-lg font-bold text-blue-900">Student Portal</h1>
              <p className="text-xs text-gray-500">Learning Management</p>
            </div>
          </div>

          {/* User Info */}
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full">
                <span className="text-blue-900 font-semibold">
                  {profile?.fname?.[0]}{profile?.lname?.[0]}
                </span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {profile?.fname} {profile?.lname}
                </p>
                <p className="text-xs text-gray-500">{profile?.unique_id}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-900'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`
                }
                onClick={onClose}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Sign Out */}
          <div className="px-4 py-4 border-t border-gray-200">
            <Button
              variant="ghost"
              onClick={signOut}
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentSidebar;
