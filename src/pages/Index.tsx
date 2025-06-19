
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Calendar, 
  Award,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Index = () => {
  const { user, profile } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="bg-blue-900 p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div className="ml-3">
                <h1 className="text-2xl font-bold text-blue-900">
                  School Management System
                </h1>
                <p className="text-gray-600">Excellence in Education</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {user && profile ? (
                <Link
                  to={`/dashboard/${profile.role}`}
                  className="inline-flex items-center"
                >
                  <Button>
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Empowering Education Through Technology
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our comprehensive school management system streamlines academic operations, 
            enhances communication, and provides valuable insights for students, teachers, 
            and administrators.
          </p>
          
          {!user && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" className="text-lg px-8 py-3">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Learn More
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive School Management
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage a modern educational institution efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Student Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive student records, enrollment tracking, and academic progress monitoring.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Grade Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Efficient grading system with real-time updates and comprehensive reporting.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Attendance Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Automated attendance management with detailed analytics and reporting.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Performance Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Data-driven insights to improve educational outcomes and institutional efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* User Roles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Designed for Every User
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Role-based access ensures everyone gets the tools they need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                role: 'Students',
                description: 'Access grades, attendance, assignments, and school announcements',
                features: ['View Grades & GPA', 'Check Attendance', 'Assignment Tracking', 'School Calendar']
              },
              {
                role: 'Teachers',
                description: 'Manage classes, grade assignments, and track student progress',
                features: ['Grade Management', 'Attendance Recording', 'Lesson Planning', 'Student Analytics']
              },
              {
                role: 'Administrators',
                description: 'Oversee school operations and manage institutional data',
                features: ['User Management', 'System Configuration', 'Reporting', 'Academic Calendar']
              },
              {
                role: 'Families',
                description: 'Stay connected with your child\'s educational journey',
                features: ['Child\'s Progress', 'Attendance Reports', 'Communication', 'School Updates']
              },
              {
                role: 'Registrars',
                description: 'Handle student registrations and academic records',
                features: ['Student Registration', 'Grade Approval', 'Record Management', 'Reports']
              },
              {
                role: 'Directors',
                description: 'Strategic oversight and institutional leadership',
                features: ['Analytics Dashboard', 'Performance Metrics', 'Strategic Planning', 'Oversight']
              }
            ].map((userType, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">{userType.role}</CardTitle>
                  <p className="text-gray-600">{userType.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {userType.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 mr-3" />
                <h4 className="text-xl font-bold">School Management System</h4>
              </div>
              <p className="text-blue-100 mb-4">
                Empowering educational institutions with comprehensive management solutions.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-blue-100">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/news" className="hover:text-white">News</Link></li>
                <li><Link to="/academic-policy" className="hover:text-white">Academic Policy</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-blue-100">
                <li><Link to="/login" className="hover:text-white">Login</Link></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Technical Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-100">
            <p>&copy; 2024 School Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
