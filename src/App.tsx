
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Auth/Login";
import NotFound from "./pages/NotFound";

// Dashboard pages
import StudentDashboard from "./pages/Dashboard/StudentDashboard";
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
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/academic-policy" element={<AcademicPolicy />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/family" element={<FamilyDashboard />} />
          <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
          <Route path="/dashboard/registrar" element={<RegistrarDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/director" element={<DirectorDashboard />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
