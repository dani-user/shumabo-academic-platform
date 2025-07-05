
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
import StudentDashboard from "./student/StudentDashboard";
import FamilyDashboard from "./family/FamilyDashboard";

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
            <StudentDashboard />
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

      {/* Shared Student Feature Routes */}
      <Route 
        path="/student/grades" 
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <GradesPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/student/timetable" 
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <TimetablePage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/student/announcements" 
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <AnnouncementsPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/student/attendance" 
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <AttendancePage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/student/profile" 
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <ProfilePage />
          </ProtectedRoute>
        } 
      />

      {/* Shared Family Feature Routes */}
      <Route 
        path="/family/children" 
        element={
          <ProtectedRoute allowedRoles={['family']}>
            <div>Children Management Page</div>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/family/grades" 
        element={
          <ProtectedRoute allowedRoles={['family']}>
            <GradesPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/family/attendance" 
        element={
          <ProtectedRoute allowedRoles={['family']}>
            <AttendancePage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/family/announcements" 
        element={
          <ProtectedRoute allowedRoles={['family']}>
            <AnnouncementsPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/family/profile" 
        element={
          <ProtectedRoute allowedRoles={['family']}>
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
