
import React from 'react';
import DashboardLayout from './components/FamilyDashboardLayout';
import { FamilyWelcomeCard } from './components/FamilyWelcomeCard';
import { FamilyStatsCard } from './components/FamilyStatsCard';
import { FamilyChildrenList } from './components/FamilyChildrenList';
import { FamilyAnnouncementsList } from './components/FamilyAnnouncementsList';

const FamilyDashboard = () => {
  return (
    <DashboardLayout title="Family Dashboard">
      <div className="space-y-6">
        <FamilyWelcomeCard />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FamilyStatsCard 
            title="Total Children" 
            value="2" 
            icon="👨‍👩‍👧‍👦" 
            color="blue" 
          />
          <FamilyStatsCard 
            title="Average GPA" 
            value="3.72" 
            icon="📊" 
            color="green" 
          />
          <FamilyStatsCard 
            title="Attendance Rate" 
            value="94%" 
            icon="✅" 
            color="orange" 
          />
          <FamilyStatsCard 
            title="Upcoming Events" 
            value="5" 
            icon="📅" 
            color="purple" 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FamilyChildrenList />
          <FamilyAnnouncementsList />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FamilyDashboard;
