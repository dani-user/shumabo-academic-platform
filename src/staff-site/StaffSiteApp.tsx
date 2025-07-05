
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/backend/auth/AuthContext';

// Staff Dashboard pages
import AdminDashboard from './admin/AdminDashboard';
import TeacherDashboard from './teacher/TeacherDashboard';
import DirectorDashboard from './director/DirectorDashboard';
import RegistrarDashboard from './registrar/RegistrarDashboard';

// Feature pages (shared across roles)
import ApproveRegistrationsPage from '@/pages/Dashboard/Staff/ApproveRegistrationsPage';
import ManageUsersPage from '@/pages/Dashboard/Staff/ManageUsersPage';
import CourseManagementPage from '@/pages/Dashboard/Staff/CourseManagementPage';
import GenerateReportsPage from '@/pages/Dashboard/Staff/GenerateReportsPage';

// Teacher pages  
import AddGradesPage from '@/pages/Dashboard/Staff/AddGradesPage';
import TakeAttendancePage from '@/pages/Dashboard/Staff/TakeAttendancePage';
import LessonPlansPage from '@/pages/Dashboard/Staff/LessonPlansPage';
import ViewStudentsPage from '@/pages/Dashboard/Staff/ViewStudentsPage';

// Registrar pages
import RegisterStudentPage from '@/pages/Dashboard/Staff/RegisterStudentPage';
import PrintIdCardsPage from '@/pages/Dashboard/Staff/PrintIdCardsPage';
import ManageAttendancePage from '@/pages/Dashboard/Staff/ManageAttendancePage';
import FeeCollectionPage from '@/pages/Dashboard/Staff/FeeCollectionPage';

// Director pages
import ViewReportsPage from '@/pages/Dashboard/Staff/ViewReportsPage';
import PerformanceAnalyticsPage from '@/pages/Dashboard/Staff/PerformanceAnalyticsPage';
import StrategicPlanningPage from '@/pages/Dashboard/Staff/StrategicPlanningPage';
import FacultyManagementPage from '@/pages/Dashboard/Staff/FacultyManagementPage';

// Shared staff feature pages
import StaffAnnouncementsPage from '@/pages/Dashboard/Staff/StaffAnnouncementsPage';
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
      default: return '/staff-site/admin';
    }
  };

  return (
    <Routes>
      {/* Default redirect to role-specific dashboard */}
      <Route path="/" element={<Navigate to={getDefaultDashboard()} replace />} />
      
      {/* Role-specific dashboards */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/teacher" element={<TeacherDashboard />} />
      <Route path="/director" element={<DirectorDashboard />} />
      <Route path="/registrar" element={<RegistrarDashboard />} />

      {/* Admin specific pages */}
      <Route path="/approve-registrations" element={<ApproveRegistrationsPage />} />
      <Route path="/manage-users" element={<ManageUsersPage />} />
      <Route path="/course-management" element={<CourseManagementPage />} />
      <Route path="/generate-reports" element={<GenerateReportsPage />} />

      {/* Teacher specific pages */}
      <Route path="/add-grades" element={<AddGradesPage />} />
      <Route path="/take-attendance" element={<TakeAttendancePage />} />
      <Route path="/lesson-plans" element={<LessonPlansPage />} />
      <Route path="/view-students" element={<ViewStudentsPage />} />

      {/* Registrar specific pages */}
      <Route path="/register-student" element={<RegisterStudentPage />} />
      <Route path="/print-id-cards" element={<PrintIdCardsPage />} />
      <Route path="/manage-attendance" element={<ManageAttendancePage />} />
      <Route path="/fee-collection" element={<FeeCollectionPage />} />

      {/* Director specific pages */}
      <Route path="/view-reports" element={<ViewReportsPage />} />
      <Route path="/performance-analytics" element={<PerformanceAnalyticsPage />} />
      <Route path="/strategic-planning" element={<StrategicPlanningPage />} />
      <Route path="/faculty-management" element={<FacultyManagementPage />} />

      {/* Shared staff feature pages */}
      <Route path="/announcements" element={<StaffAnnouncementsPage />} />
      <Route path="/profile" element={<StaffProfilePage />} />
      
      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to={getDefaultDashboard()} replace />} />
    </Routes>
  );
};

export default StaffSiteApp;
