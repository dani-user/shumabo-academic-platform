
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

import Index from "./pages/Index";
import Auth from "./pages/Auth/Auth";
import NotFound from "./pages/NotFound";
import Unauthorized from "./pages/Unauthorized";

// Dashboard pages
import UpdatedStudentDashboard from "./pages/Dashboard/UpdatedStudentDashboard";
import FamilyDashboard from "./pages/Dashboard/FamilyDashboard";
import TeacherDashboard from "./pages/Dashboard/TeacherDashboard";
import RegistrarDashboard from "./pages/Dashboard/RegistrarDashboard";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import DirectorDashboard from "./pages/Dashboard/DirectorDashboard";

// Public site pages
import About from "./pages/PublicSite/About";
import News from "./pages/PublicSite/News";
import AcademicPolicy from "./pages/PublicSite/AcademicPolicy";
import Contact from "./pages/PublicSite/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/academic-policy" element={<AcademicPolicy />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Auth Routes */}
            <Route path="/login" element={<Auth />} />
            <Route path="/auth" element={<Navigate to="/login" replace />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            
            {/* Protected Dashboard Routes */}
            <Route 
              path="/dashboard/student" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <UpdatedStudentDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard/family" 
              element={
                <ProtectedRoute allowedRoles={['family']}>
                  <FamilyDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard/teacher" 
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <TeacherDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard/registrar" 
              element={
                <ProtectedRoute allowedRoles={['registrar']}>
                  <RegistrarDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard/admin" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard/director" 
              element={
                <ProtectedRoute allowedRoles={['director']}>
                  <DirectorDashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
