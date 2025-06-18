
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  User, 
  GraduationCap, 
  FileText, 
  Calendar, 
  Bell,
  LogOut,
  Menu,
  X
} from 'lucide-react';

const Navigation = ({ userRole, isOpen, setIsOpen }) => {
  const location = useLocation();

  const getNavigationItems = () => {
    const baseItems = [
      { path: '/dashboard', label: 'Dashboard', icon: Home },
    ];

    switch (userRole) {
      case 'student':
        return [
          ...baseItems,
          { path: '/grades', label: 'Grades', icon: FileText },
          { path: '/timetable', label: 'Timetable', icon: Calendar },
          { path: '/announcements', label: 'Announcements', icon: Bell },
          { path: '/profile', label: 'Profile', icon: User },
        ];
      case 'teacher':
        return [
          ...baseItems,
          { path: '/my-classes', label: 'My Classes', icon: GraduationCap },
          { path: '/grade-entry', label: 'Grade Entry', icon: FileText },
          { path: '/announcements', label: 'Announcements', icon: Bell },
        ];
      case 'admin':
        return [
          ...baseItems,
          { path: '/registrations', label: 'Registrations', icon: User },
          { path: '/courses', label: 'Courses', icon: GraduationCap },
          { path: '/reports', label: 'Reports', icon: FileText },
          { path: '/announcements', label: 'Announcements', icon: Bell },
        ];
      default:
        return baseItems;
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#0056b3] text-white rounded-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation sidebar */}
      <nav className={cn(
        "fixed left-0 top-0 h-full w-64 bg-[#0056b3] text-white transform transition-transform duration-300 z-40",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <GraduationCap className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold">ShumAbo</h1>
              <p className="text-sm text-blue-200">Secondary School</p>
            </div>
          </div>

          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                      isActive
                        ? "bg-white text-[#0056b3]"
                        : "text-blue-100 hover:bg-blue-700"
                    )}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="absolute bottom-6 left-6 right-6">
            <button className="flex items-center space-x-3 px-4 py-3 text-blue-100 hover:bg-blue-700 rounded-lg transition-colors w-full">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
