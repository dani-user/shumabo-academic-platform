
import React from 'react';
import Header from '@/components/PublicSite/Header';
import Footer from '@/components/PublicSite/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Academic Year 2024/2025 Registration Now Open",
      excerpt: "Registration for the new academic year is now open for both new and returning students. Apply early to secure your spot.",
      date: "2024-08-15",
      author: "Registrar Office",
      category: "Registration"
    },
    {
      id: 2,
      title: "Grade 12 Students Achieve 98% Pass Rate",
      excerpt: "Our Grade 12 students have achieved an outstanding 98% pass rate in the national examinations, exceeding the national average.",
      date: "2024-07-20",
      author: "Academic Office",
      category: "Achievement"
    },
    {
      id: 3,
      title: "New Science Laboratory Officially Opened",
      excerpt: "State-of-the-art science laboratory facility opened to enhance practical learning experience for Natural Science stream students.",
      date: "2024-06-10",
      author: "Director's Office",
      category: "Facilities"
    },
    {
      id: 4,
      title: "Inter-School Mathematics Competition Winners",
      excerpt: "ShumAbo students won first place in the regional mathematics competition, demonstrating academic excellence.",
      date: "2024-05-25",
      author: "Mathematics Department",
      category: "Achievement"
    },
    {
      id: 5,
      title: "Parent-Teacher Conference Scheduled",
      excerpt: "Join us for the quarterly parent-teacher conference to discuss student progress and academic development.",
      date: "2024-05-15",
      author: "Academic Office",
      category: "Event"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0056b3] to-[#004494] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Events</h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Stay updated with the latest news, announcements, and events at ShumAbo Secondary School.
              </p>
            </div>
          </div>
        </section>

        {/* News Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main News */}
              <div className="lg:col-span-2">
                <div className="space-y-8">
                  {newsItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden border">
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="bg-[#0056b3] text-white px-3 py-1 rounded-full text-sm font-medium">
                            {item.category}
                          </span>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(item.date)}
                          </div>
                          <div className="flex items-center text-gray-500 text-sm">
                            <User className="h-4 w-4 mr-1" />
                            {item.author}
                          </div>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-[#0056b3] cursor-pointer">
                          {item.title}
                        </h2>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {item.excerpt}
                        </p>
                        
                        <Button variant="outline" className="border-[#0056b3] text-[#0056b3] hover:bg-[#0056b3] hover:text-white">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Quick Links */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <a href="/academic-policy" className="block text-[#0056b3] hover:underline">
                      Academic Policy
                    </a>
                    <a href="/login" className="block text-[#0056b3] hover:underline">
                      Student Portal
                    </a>
                    <a href="/contact" className="block text-[#0056b3] hover:underline">
                      Contact Office
                    </a>
                  </div>
                </div>

                {/* Important Dates */}
                <div className="bg-white rounded-lg shadow-lg p-6 border">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Important Dates</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#0056b3] pl-4">
                      <p className="font-semibold text-gray-900">Registration Deadline</p>
                      <p className="text-sm text-gray-600">September 14, 2024</p>
                    </div>
                    <div className="border-l-4 border-[#0056b3] pl-4">
                      <p className="font-semibold text-gray-900">First Semester Exams</p>
                      <p className="text-sm text-gray-600">January 15-25, 2025</p>
                    </div>
                    <div className="border-l-4 border-[#0056b3] pl-4">
                      <p className="font-semibold text-gray-900">Parent Conference</p>
                      <p className="text-sm text-gray-600">March 10, 2025</p>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-[#0056b3] text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Need Information?</h3>
                  <p className="mb-4">
                    Contact our office for more information about admissions, academics, or school events.
                  </p>
                  <Button className="bg-white text-[#0056b3] hover:bg-blue-50 w-full">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default News;
