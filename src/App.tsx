
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/backend/auth/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

// Public Site App
import PublicSiteApp from "./public-site/PublicSiteApp";

// Staff Site App
import StaffSiteApp from "./staff-site/StaffSiteApp";

// Auth and Error pages
import Auth from "./pages/Auth/Auth";
import NotFound from "./pages/NotFound";
import Unauthorized from "./pages/Unauthorized";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Redirect root to public site */}
            <Route path="/" element={<Navigate to="/public-site" replace />} />
            
            {/* Public Site Routes (includes public pages + student/family portals) */}
            <Route path="/public-site/*" element={<PublicSiteApp />} />
            
            {/* Staff Site Routes (admin, teacher, director, registrar) */}
            <Route path="/staff-site/*" element={
              <ProtectedRoute allowedRoles={['teacher', 'registrar', 'admin', 'director']}>
                <StaffSiteApp />
              </ProtectedRoute>
            } />
            
            {/* Auth Routes */}
            <Route path="/login" element={<Auth />} />
            <Route path="/auth" element={<Navigate to="/login" replace />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
