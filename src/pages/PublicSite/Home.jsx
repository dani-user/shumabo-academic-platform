
import React from 'react';
import Header from '@/components/PublicSite/Header';
import Footer from '@/components/PublicSite/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen,
  ArrowRight,
  Star,
  TrendingUp
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Quality Education',
      description: 'Comprehensive academic programs designed to prepare students for higher education and future careers.'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Dedicated and experienced teachers committed to student success and academic excellence.'
    },
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Proven track record of outstanding academic performance and university admissions.'
    },
    {
      icon: BookOpen,
      title: 'Modern Curriculum',
      description: 'Updated curriculum aligned with national standards and international best practices.'
    }
  ];

  const stats = [
    { number: '1200+', label: 'Students' },
    { number: '85+', label: 'Teachers' },
    { number: '95%', label: 'University Admission Rate' },
    { number: '15+', label: 'Years of Excellence' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0056b3] to-[#004494] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Excellence in
                <span className="block text-yellow-300">Education</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Empowering students to achieve their full potential through quality education, 
                innovative teaching methods, and comprehensive support systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-[#0056b3] font-semibold px-8 py-3 text-lg">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#0056b3] px-8 py-3 text-lg">
                  Student Portal
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <div className="text-center">
                  <GraduationCap className="h-24 w-24 mx-auto mb-6 text-yellow-300" />
                  <h3 className="text-2xl font-semibold mb-4">Join Our Community</h3>
                  <p className="text-blue-100">
                    Become part of our academic family and unlock your potential
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-auto">
            <path d="M0 120L50 105C100 90 200 60 300 45C400 30 500 30 600 35C700 40 800 50 900 55C1000 60 1100 60 1150 60L1200 60V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#0056b3] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ShumAbo?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive educational experience that prepares students 
              for success in higher education and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-[#0056b3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <Button variant="outline" className="border-[#0056b3] text-[#0056b3] hover:bg-[#0056b3] hover:text-white">
              View All News
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'New Academic Year Registration Opens',
                date: 'September 1, 2024',
                excerpt: 'Registration for the 2024/2025 academic year is now open for all grades...'
              },
              {
                title: 'Excellence Awards Ceremony',
                date: 'August 25, 2024',
                excerpt: 'Celebrating our top-performing students and dedicated teachers...'
              },
              {
                title: 'Science Laboratory Modernization',
                date: 'August 20, 2024',
                excerpt: 'Our science facilities have been upgraded with modern equipment...'
              }
            ].map((news, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-sm text-[#0056b3] font-medium mb-2">
                    {news.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center text-[#0056b3] hover:text-[#004494]">
                    <span className="font-medium">Read More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0056b3] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our School Community?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Take the first step towards academic excellence and personal growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-[#0056b3] font-semibold px-8 py-3 text-lg">
              Apply Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#0056b3] px-8 py-3 text-lg">
              Schedule Visit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
