
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
  CreditCard,
  UserPlus,
  IdCard,
  CheckCircle,
  TrendingUp,
  Award
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
          { icon: BookOpen, label: 'My Grades', path: '/public-site/grades' },
          { icon: Calendar, label: 'Timetable', path: '/public-site/timetable' },
          { icon: UserCheck, label: 'Attendance', path: '/public-site/attendance' },
          { icon: Bell, label: 'Announcements', path: '/public-site/announcements' },
          { icon: CreditCard, label: 'Profile', path: '/public-site/profile' },
        ];
      case 'family':
        return [
          ...baseItems,
          { icon: Users, label: 'My Children', path: '/public-site/children' },
          { icon: BookOpen, label: 'Grades', path: '/public-site/grades' },
          { icon: UserCheck, label: 'Attendance', path: '/public-site/attendance' },
          { icon: Bell, label: 'Announcements', path: '/public-site/announcements' },
          { icon: CreditCard, label: 'Profile', path: '/public-site/profile' },
        ];
      case 'teacher':
        return [
          ...baseItems,
          { icon: Users, label: 'My Classes', path: '/staff-site/classes' },
          { icon: BookOpen, label: 'Add Grades', path: '/staff-site/add-grades' },
          { icon: UserCheck, label: 'Take Attendance', path: '/staff-site/take-attendance' },
          { icon: ClipboardList, label: 'Lesson Plans', path: '/staff-site/lesson-plans' },
          { icon: Users, label: 'View Students', path: '/staff-site/view-students' },
          { icon: Bell, label: 'Announcements', path: '/staff-site/announcements' },
          { icon: CreditCard, label: 'Profile', path: '/staff-site/profile' },
        ];
      case 'registrar':
        return [
          ...baseItems,
          { icon: UserPlus, label: 'Register Student', path: '/staff-site/register-student' },
          { icon: IdCard, label: 'Print ID Cards', path: '/staff-site/print-id-cards' },
          { icon: UserCheck, label: 'Manage Attendance', path: '/staff-site/manage-attendance' },
          { icon: CreditCard, label: 'Fee Collection', path: '/staff-site/fee-collection' },
          { icon: Bell, label: 'Announcements', path: '/staff-site/announcements' },
          { icon: FileText, label: 'Reports', path: '/staff-site/reports' },
          { icon: Settings, label: 'Profile', path: '/staff-site/profile' },
        ];
      case 'admin':
        return [
          ...baseItems,
          { icon: CheckCircle, label: 'Approve Registrations', path: '/staff-site/approve-registrations' },
          { icon: Users, label: 'Manage Users', path: '/staff-site/manage-users' },
          { icon: BookOpen, label: 'Course Management', path: '/staff-site/course-management' },
          { icon: BarChart3, label: 'Generate Reports', path: '/staff-site/generate-reports' },
          { icon: Bell, label: 'Announcements', path: '/staff-site/announcements' },
          { icon: Settings, label: 'Settings', path: '/staff-site/settings' },
          { icon: CreditCard, label: 'Profile', path: '/staff-site/profile' },
        ];
      case 'director':
        return [
          ...baseItems,
          { icon: FileText, label: 'View Reports', path: '/staff-site/view-reports' },
          { icon: TrendingUp, label: 'Performance Analytics', path: '/staff-site/performance-analytics' },
          { icon: Calendar, label: 'Strategic Planning', path: '/staff-site/strategic-planning' },
          { icon: Users, label: 'Faculty Management', path: '/staff-site/faculty-management' },
          { icon: Bell, label: 'Announcements', path: '/staff-site/announcements' },
          { icon: Settings, label: 'System Settings', path: '/staff-site/settings' },
          { icon: CreditCard, label: 'Profile', path: '/staff-site/profile' },
        ];
      default:
        return baseItems;
    }
  };

  const getBaseDashboardPath = () => {
    switch (profile?.role) {
      case 'student': return '/public-site/student';
      case 'family': return '/public-site/family';
      case 'teacher': return '/staff-site/teacher';
      case 'registrar': return '/staff-site/registrar';
      case 'admin': return '/staff-site/admin';
      case 'director': return '/staff-site/director';
      default: return '/public-site';
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
