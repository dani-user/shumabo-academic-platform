
import React from 'react';
import Header from '@/components/PublicSite/Header';
import Footer from '@/components/PublicSite/Footer';
import { GraduationCap, Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0056b3] to-[#004494] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About ShumAbo Secondary School</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Committed to excellence in education and nurturing the next generation of leaders in Ethiopia.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-blue-50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-[#0056b3] mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-700 text-lg">
                  To provide quality education that empowers students with knowledge, skills, and values 
                  necessary for academic excellence and responsible citizenship in the global community.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-[#0056b3] mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-700 text-lg">
                  To be a leading educational institution that produces well-rounded, competent, and 
                  ethical individuals who contribute positively to society and nation-building.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-12 w-12 text-[#0056b3] mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Excellence in Education</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  ShumAbo Secondary School has been a cornerstone of educational excellence in Bahir Dar, 
                  Ethiopia. We serve students in grades 9-12, offering both Natural and Social Science streams 
                  to prepare students for higher education and future careers.
                </p>
                <p className="text-gray-700">
                  Our comprehensive academic management platform ensures seamless communication between 
                  students, families, teachers, and administrators, creating a collaborative learning environment 
                  that supports every student's success.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">School Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-[#0056b3] mr-3" />
                    <span className="text-gray-700">Over 1000 active students</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-[#0056b3] mr-3" />
                    <span className="text-gray-700">50+ qualified teachers</span>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 text-[#0056b3] mr-3" />
                    <span className="text-gray-700">Grades 9-12 education</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-[#0056b3] mr-3" />
                    <span className="text-gray-700">95% graduation success rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These values guide everything we do and shape the character of our students.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#0056b3] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for the highest standards in academic achievement and personal development.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#0056b3] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600">
                  We foster a supportive community where everyone feels valued and included.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#0056b3] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We uphold the highest ethical standards in all our interactions and decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
