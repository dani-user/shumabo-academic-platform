
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

// Public Site Components
import Index from "./pages/Index";
import About from "./pages/PublicSite/About";
import News from "./pages/PublicSite/News";
import AcademicPolicy from "./pages/PublicSite/AcademicPolicy";
import Contact from "./pages/PublicSite/Contact";

// Auth Components
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

// Shared dashboard feature pages
import GradesPage from "./pages/Dashboard/GradesPage";
import TimetablePage from "./pages/Dashboard/TimetablePage";
import AnnouncementsPage from "./pages/Dashboard/AnnouncementsPage";
import AttendancePage from "./pages/Dashboard/AttendancePage";
import ProfilePage from "./pages/Dashboard/ProfilePage";

// Staff Portal Layout
import StaffPortalLayout from "./components/Layout/StaffPortalLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Site Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/academic-policy" element={<AcademicPolicy />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Auth Routes */}
            <Route path="/login" element={<Auth />} />
            <Route path="/auth" element={<Navigate to="/login" replace />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            
            {/* Staff Portal Routes */}
            <Route path="/staff/*" element={
              <ProtectedRoute allowedRoles={['teacher', 'registrar', 'admin', 'director']}>
                <StaffPortalLayout />
              </ProtectedRoute>
            } />
            
            {/* Student & Family Portal Routes */}
            <Route 
              path="/portal/student" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <UpdatedStudentDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/portal/family" 
              element={
                <ProtectedRoute allowedRoles={['family']}>
                  <FamilyDashboard />
                </ProtectedRoute>
              } 
            />

            {/* Legacy Dashboard Routes (for backward compatibility) */}
            <Route 
              path="/dashboard/student" 
              element={<Navigate to="/portal/student" replace />}
            />
            <Route 
              path="/dashboard/family" 
              element={<Navigate to="/portal/family" replace />}
            />
            <Route 
              path="/dashboard/teacher" 
              element={<Navigate to="/staff/teacher" replace />}
            />
            <Route 
              path="/dashboard/registrar" 
              element={<Navigate to="/staff/registrar" replace />}
            />
            <Route 
              path="/dashboard/admin" 
              element={<Navigate to="/staff/admin" replace />}
            />
            <Route 
              path="/dashboard/director" 
              element={<Navigate to="/staff/director" replace />}
            />

            {/* Shared Dashboard Feature Routes for Student/Family */}
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
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
