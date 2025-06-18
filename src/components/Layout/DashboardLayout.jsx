
import React, { useState } from 'react';
import Navigation from './Navigation';
import { cn } from '@/lib/utils';

const DashboardLayout = ({ children, userRole = 'student' }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        userRole={userRole} 
        isOpen={isNavOpen} 
        setIsOpen={setIsNavOpen} 
      />
      
      <main className={cn(
        "transition-all duration-300",
        "md:ml-64 p-6"
      )}>
        <div className="pt-16 md:pt-0">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
