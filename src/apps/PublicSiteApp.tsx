
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from '@/components/ProtectedRoute';

// Public Site Components (existing)
import Index from "@/pages/Index";
import About from "@/pages/PublicSite/About";
import News from "@/pages/PublicSite/News";
import AcademicPolicy from "@/pages/PublicSite/AcademicPolicy";
import Contact from "@/pages/PublicSite/Contact";

// Student & Family Dashboard pages
import UpdatedStudentDashboard from "@/pages/Dashboard/UpdatedStudentDashboard";
import FamilyDashboard from "@/pages/Dashboard/FamilyDashboard";

// Shared dashboard feature pages for students/families
import GradesPage from "@/pages/Dashboard/Student/GradesPage";
import TimetablePage from "@/pages/Dashboard/Student/TimetablePage";
import AnnouncementsPage from "@/pages/Dashboard/Student/AnnouncementsPage";
import AttendancePage from "@/pages/Dashboard/Student/AttendancePage";
import ProfilePage from "@/pages/Dashboard/Student/ProfilePage";

const PublicSiteApp = () => {
  return (
    <Routes>
      {/* Public Site Routes */}
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/academic-policy" element={<AcademicPolicy />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* Student Portal Routes */}
      <Route 
        path="/student" 
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <UpdatedStudentDashboard />
          </ProtectedRoute>
        } 
      />
      
      {/* Family Portal Routes */}
      <Route 
        path="/family" 
        element={
          <ProtectedRoute allowedRoles={['family']}>
            <FamilyDashboard />
          </ProtectedRoute>
        } 
      />

      {/* Shared Student/Family Feature Routes */}
      <Route 
        path="/grades" 
        element={
          <ProtectedRoute allowedRoles={['student', 'family']}>
            <GradesPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/timetable" 
        element={
          <ProtectedRoute allowedRoles={['student', 'family']}>
            <TimetablePage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/announcements" 
        element={
          <ProtectedRoute allowedRoles={['student', 'family']}>
            <AnnouncementsPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/attendance" 
        element={
          <ProtectedRoute allowedRoles={['student', 'family']}>
            <AttendancePage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/profile" 
        element={
          <ProtectedRoute allowedRoles={['student', 'family']}>
            <ProfilePage />
          </ProtectedRoute>
        } 
      />
      
      {/* Default redirect to home */}
      <Route path="*" element={<Navigate to="/public-site" replace />} />
    </Routes>
  );
};

export default PublicSiteApp;
