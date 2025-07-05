
import React from 'react';
import DashboardLayout from './components/StudentDashboardLayout';
import { StudentWelcomeCard } from './components/StudentWelcomeCard';
import { StudentStatsCard } from './components/StudentStatsCard';
import { StudentAnnouncementsList } from './components/StudentAnnouncementsList';
import { StudentRecentGrades } from './components/StudentRecentGrades';
import { StudentUpcomingEvents } from './components/StudentUpcomingEvents';

const StudentDashboard = () => {
  return (
    <DashboardLayout title="Student Dashboard">
      <div className="space-y-6">
        <StudentWelcomeCard />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StudentStatsCard 
            title="Current GPA" 
            value="3.85" 
            icon="📊" 
            color="blue" 
          />
          <StudentStatsCard 
            title="Attendance" 
            value="96%" 
            icon="✅" 
            color="green" 
          />
          <StudentStatsCard 
            title="Assignments Due" 
            value="3" 
            icon="📝" 
            color="orange" 
          />
          <StudentStatsCard 
            title="Courses" 
            value="8" 
            icon="📚" 
            color="purple" 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <StudentRecentGrades />
          <StudentUpcomingEvents />
        </div>

        <StudentAnnouncementsList />
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
