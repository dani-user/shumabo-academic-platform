
import React from 'react';
import DashboardLayout from './components/AdminDashboardLayout';
import { AdminWelcomeCard } from './components/AdminWelcomeCard';
import { AdminStatsCard } from './components/AdminStatsCard';
import { AdminRecentActivity } from './components/AdminRecentActivity';
import { AdminSystemOverview } from './components/AdminSystemOverview';

const AdminDashboard = () => {
  return (
    <DashboardLayout title="Admin Dashboard">
      <div className="space-y-6">
        <AdminWelcomeCard />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AdminStatsCard 
            title="Total Users" 
            value="1,247" 
            icon="👥" 
            color="blue" 
          />
          <AdminStatsCard 
            title="Active Students" 
            value="856" 
            icon="🎓" 
            color="green" 
          />
          <AdminStatsCard 
            title="Staff Members" 
            value="73" 
            icon="👨‍🏫" 
            color="orange" 
          />
          <AdminStatsCard 
            title="Pending Approvals" 
            value="12" 
            icon="⏳" 
            color="red" 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AdminRecentActivity />
          <AdminSystemOverview />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
