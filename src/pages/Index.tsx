
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/PublicSite/Header";
import Footer from "@/components/PublicSite/Footer";
import { GraduationCap, Users, BookOpen, Award, ArrowRight, Building, UserCog } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
            Welcome to Lovable Senior Secondary School
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Excellence in <span className="text-blue-600">Education</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Empowering students to achieve their highest potential through quality education, 
            innovative teaching methods, and comprehensive support systems.
          </p>
          
          {/* Portal Access Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-900">Public Site</CardTitle>
                <CardDescription className="text-gray-600">
                  Student & Family Portal - Access grades, attendance, and school information
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Badge variant="outline">Students</Badge>
                  <Badge variant="outline">Families</Badge>
                  <Badge variant="outline">Public Info</Badge>
                </div>
                <Link to="/public-site">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Access Public Site
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-green-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCog className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-900">Staff Site</CardTitle>
                <CardDescription className="text-gray-600">
                  Staff Portal - Administrative tools and management systems
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Badge variant="outline">Teachers</Badge>
                  <Badge variant="outline">Admin</Badge>
                  <Badge variant="outline">Registrar</Badge>
                  <Badge variant="outline">Director</Badge>
                </div>
                <Link to="/staff-site">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Access Staff Site
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose LSSS?</h2>
          <p className="text-xl text-gray-600">
            Comprehensive education platform with modern tools and dedicated support
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Quality Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Experienced faculty delivering comprehensive curriculum with modern teaching methodologies
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Digital Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Modern digital platform for seamless learning, grade tracking, and communication
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Proven track record of academic excellence and student success in higher education
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Access</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/public-site/about">
              <Button variant="outline" className="hover:bg-blue-50">About Us</Button>
            </Link>
            <Link to="/public-site/academic-policy">
              <Button variant="outline" className="hover:bg-blue-50">Academic Policy</Button>
            </Link>
            <Link to="/public-site/news">
              <Button variant="outline" className="hover:bg-blue-50">News & Events</Button>
            </Link>
            <Link to="/public-site/contact">
              <Button variant="outline" className="hover:bg-blue-50">Contact Us</Button>
            </Link>
            <Link to="/login">
              <Button className="bg-blue-600 hover:bg-blue-700">Login</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
