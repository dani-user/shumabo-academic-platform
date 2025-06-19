
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Users, BookOpen, Calendar, Bell, Award } from 'lucide-react';

const Index = () => {
  const { user, profile } = useAuth();

  const getDashboardPath = () => {
    if (!profile) return '/login';
    return `/dashboard/${profile.role}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ShumAbo Secondary School</h1>
                <p className="text-sm text-gray-600">Excellence in Education</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    Welcome, {profile?.full_name}
                  </span>
                  <Button asChild>
                    <Link to={getDashboardPath()}>Go to Dashboard</Link>
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button variant="outline" asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/login">Sign Up</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to ShumAbo
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your comprehensive school management system for students, families, teachers, and administrators.
            Stay connected, track progress, and achieve excellence together.
          </p>
          
          {!user && (
            <div className="flex justify-center space-x-4">
              <Button size="lg" asChild>
                <Link to="/login">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything You Need
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Grade Management</CardTitle>
                <CardDescription>
                  Track academic progress with comprehensive grade tracking and reporting
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Timetable & Scheduling</CardTitle>
                <CardDescription>
                  Stay organized with class schedules, exam dates, and important events
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Bell className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Announcements</CardTitle>
                <CardDescription>
                  Receive important updates and notifications from school administration
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Family Portal</CardTitle>
                <CardDescription>
                  Parents can monitor their children's progress and stay involved
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Attendance Tracking</CardTitle>
                <CardDescription>
                  Monitor attendance records and maintain accurate student data
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>Academic Reports</CardTitle>
                <CardDescription>
                  Generate comprehensive reports for academic performance analysis
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Quick Links
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Button variant="outline" size="lg" asChild className="h-16">
              <Link to="/about" className="flex flex-col">
                <span className="font-semibold">About Us</span>
                <span className="text-sm text-gray-600">Learn about our school</span>
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild className="h-16">
              <Link to="/news" className="flex flex-col">
                <span className="font-semibold">News & Events</span>
                <span className="text-sm text-gray-600">Latest updates</span>
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild className="h-16">
              <Link to="/academic-policy" className="flex flex-col">
                <span className="font-semibold">Academic Policy</span>
                <span className="text-sm text-gray-600">Rules & regulations</span>
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild className="h-16">
              <Link to="/contact" className="flex flex-col">
                <span className="font-semibold">Contact Us</span>
                <span className="text-sm text-gray-600">Get in touch</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <GraduationCap className="h-8 w-8" />
            <div className="text-center">
              <h4 className="text-xl font-bold">ShumAbo Secondary School</h4>
              <p className="text-gray-400">Excellence in Education</p>
            </div>
          </div>
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 ShumAbo Secondary School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
