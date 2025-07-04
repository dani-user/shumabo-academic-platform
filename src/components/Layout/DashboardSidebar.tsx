
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Calendar, 
  ClipboardList, 
  Settings, 
  LogOut,
  GraduationCap,
  FileText,
  BarChart3,
  UserCheck,
  Bell,
  CreditCard
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const DashboardSidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { profile, signOut } = useAuth();

  const getNavigationItems = () => {
    const baseItems = [
      { 
        icon: LayoutDashboard, 
        label: 'Dashboard', 
        path: getBaseDashboardPath()
      }
    ];

    switch (profile?.role) {
      case 'student':
        return [
          ...baseItems,
          { icon: BookOpen, label: 'My Grades', path: '/grades' },
          { icon: Calendar, label: 'Timetable', path: '/timetable' },
          { icon: UserCheck, label: 'Attendance', path: '/attendance' },
          { icon: Bell, label: 'Announcements', path: '/announcements' },
          { icon: CreditCard, label: 'Profile', path: '/profile' },
        ];
      case 'family':
        return [
          ...baseItems,
          { icon: Users, label: 'My Children', path: '/children' },
          { icon: BookOpen, label: 'Grades', path: '/grades' },
          { icon: UserCheck, label: 'Attendance', path: '/attendance' },
          { icon: Bell, label: 'Announcements', path: '/announcements' },
          { icon: CreditCard, label: 'Profile', path: '/profile' },
        ];
      case 'teacher':
        return [
          ...baseItems,
          { icon: Users, label: 'My Classes', path: '/staff/classes' },
          { icon: BookOpen, label: 'Grade Management', path: '/staff/grades' },
          { icon: Calendar, label: 'Timetable', path: '/staff/timetable' },
          { icon: UserCheck, label: 'Attendance', path: '/staff/attendance' },
          { icon: ClipboardList, label: 'Assessments', path: '/staff/assessments' },
          { icon: Bell, label: 'Announcements', path: '/staff/announcements' },
          { icon: CreditCard, label: 'Profile', path: '/staff/profile' },
        ];
      case 'registrar':
        return [
          ...baseItems,
          { icon: Users, label: 'Student Management', path: '/staff/students' },
          { icon: ClipboardList, label: 'Registrations', path: '/staff/registrations' },
          { icon: BookOpen, label: 'Grade Approval', path: '/staff/grades' },
          { icon: UserCheck, label: 'Attendance', path: '/staff/attendance' },
          { icon: Bell, label: 'Announcements', path: '/staff/announcements' },
          { icon: BarChart3, label: 'Reports', path: '/staff/reports' },
          { icon: CreditCard, label: 'Profile', path: '/staff/profile' },
        ];
      case 'admin':
        return [
          ...baseItems,
          { icon: Users, label: 'User Management', path: '/staff/users' },
          { icon: GraduationCap, label: 'Academic Calendar', path: '/staff/calendar' },
          { icon: BookOpen, label: 'Course Management', path: '/staff/courses' },
          { icon: ClipboardList, label: 'Assignments', path: '/staff/assignments' },
          { icon: BarChart3, label: 'Reports', path: '/staff/reports' },
          { icon: Bell, label: 'Announcements', path: '/staff/announcements' },
          { icon: Settings, label: 'Settings', path: '/staff/settings' },
          { icon: CreditCard, label: 'Profile', path: '/staff/profile' },
        ];
      case 'director':
        return [
          ...baseItems,
          { icon: BarChart3, label: 'Analytics', path: '/staff/analytics' },
          { icon: Users, label: 'Staff Overview', path: '/staff/staff' },
          { icon: GraduationCap, label: 'Academic Performance', path: '/staff/performance' },
          { icon: FileText, label: 'Reports', path: '/staff/reports' },
          { icon: Bell, label: 'Announcements', path: '/staff/announcements' },
          { icon: Settings, label: 'System Settings', path: '/staff/settings' },
          { icon: CreditCard, label: 'Profile', path: '/staff/profile' },
        ];
      default:
        return baseItems;
    }
  };

  const getBaseDashboardPath = () => {
    switch (profile?.role) {
      case 'student': return '/portal/student';
      case 'family': return '/portal/family';
      case 'teacher': return '/staff/teacher';
      case 'registrar': return '/staff/registrar';
      case 'admin': return '/staff/admin';
      case 'director': return '/staff/director';
      default: return '/';
    }
  };

  const navigationItems = getNavigationItems();

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
              <h1 className="text-lg font-bold text-blue-900">
                {['student', 'family'].includes(profile?.role || '') ? 'Student Portal' : 'Staff Portal'}
              </h1>
              <p className="text-xs text-gray-500 capitalize">{profile?.role}</p>
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

export default DashboardSidebar;
