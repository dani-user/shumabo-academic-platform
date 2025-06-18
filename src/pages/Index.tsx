
import React from 'react';
import Header from '@/components/PublicSite/Header';
import Footer from '@/components/PublicSite/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, BookOpen, Award, Calendar, Bell } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Users,
      title: 'Student Management',
      description: 'Complete student registration, grading, and attendance tracking system'
    },
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'Comprehensive curriculum management and grade tracking for grades 9-12'
    },
    {
      icon: Award,
      title: 'Performance Analytics',
      description: 'Detailed reports and analytics for student performance monitoring'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Automated timetable generation and academic calendar management'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0056b3] to-[#004494] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome to
                <span className="block text-blue-200">ShumAbo Secondary School</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Excellence in Education - Nurturing the next generation of leaders in Ethiopia with quality education and comprehensive academic management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                  <Button className="bg-white text-[#0056b3] hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                    Access Portal
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#0056b3] px-8 py-3 text-lg font-semibold">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md">
                <div className="flex items-center justify-center mb-6">
                  <GraduationCap className="h-20 w-20 text-blue-200" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Academic Portal</h3>
                <p className="text-blue-100 text-center mb-6">
                  Access your grades, timetable, announcements, and more through our comprehensive academic management system.
                </p>
                <Link to="/login" className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    Login to Portal
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Academic Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated platform serves students, families, teachers, and administrators with powerful tools for academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-[#0056b3] rounded-lg p-3 w-fit mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0056b3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-200">Active Students</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Qualified Teachers</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-blue-200">Grade Levels</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the ShumAbo community and experience excellence in education with our comprehensive academic management platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button className="bg-[#0056b3] hover:bg-[#004494] text-white px-8 py-3 text-lg font-semibold">
                Access Your Portal
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-[#0056b3] text-[#0056b3] hover:bg-[#0056b3] hover:text-white px-8 py-3 text-lg font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
