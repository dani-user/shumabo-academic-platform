
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

// Staff Dashboard pages
import TeacherDashboard from '@/pages/Dashboard/TeacherDashboard';
import RegistrarDashboard from '@/pages/Dashboard/RegistrarDashboard';
import AdminDashboard from '@/pages/Dashboard/AdminDashboard';
import DirectorDashboard from '@/pages/Dashboard/DirectorDashboard';

// Staff feature pages
import StaffGradesPage from '@/pages/Dashboard/Staff/StaffGradesPage';
import StaffTimetablePage from '@/pages/Dashboard/Staff/StaffTimetablePage';
import StaffAnnouncementsPage from '@/pages/Dashboard/Staff/StaffAnnouncementsPage';
import StaffAttendancePage from '@/pages/Dashboard/Staff/StaffAttendancePage';
import StaffProfilePage from '@/pages/Dashboard/Staff/StaffProfilePage';

const StaffSiteApp = () => {
  const { profile } = useAuth();

  // Get the default dashboard path based on role
  const getDefaultDashboard = () => {
    switch (profile?.role) {
      case 'teacher': return '/staff-site/teacher';
      case 'registrar': return '/staff-site/registrar';
      case 'admin': return '/staff-site/admin';
      case 'director': return '/staff-site/director';
      default: return '/staff-site/teacher';
    }
  };

  return (
    <Routes>
      {/* Default redirect to role-specific dashboard */}
      <Route path="/" element={<Navigate to={getDefaultDashboard()} replace />} />
      
      {/* Role-specific dashboards */}
      <Route path="/teacher" element={<TeacherDashboard />} />
      <Route path="/registrar" element={<RegistrarDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/director" element={<DirectorDashboard />} />

      {/* Shared staff feature pages */}
      <Route path="/grades" element={<StaffGradesPage />} />
      <Route path="/timetable" element={<StaffTimetablePage />} />
      <Route path="/announcements" element={<StaffAnnouncementsPage />} />
      <Route path="/attendance" element={<StaffAttendancePage />} />
      <Route path="/profile" element={<StaffProfilePage />} />
      
      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to={getDefaultDashboard()} replace />} />
    </Routes>
  );
};

export default StaffSiteApp;
