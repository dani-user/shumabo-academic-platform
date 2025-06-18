
import React from 'react';
import Header from '@/components/PublicSite/Header';
import Footer from '@/components/PublicSite/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement contact form submission
    console.log('Contact form submitted');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'ShumAbo Secondary School',
        'Kebele 02, Woreda 05',
        'Addis Ababa, Ethiopia'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Main Office: +251-11-123-4567',
        'Registrar: +251-11-123-4568',
        'Director: +251-11-123-4569'
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'info@shumabo.edu.et',
        'registrar@shumabo.edu.et',
        'director@shumabo.edu.et'
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 8:00 AM - 5:00 PM',
        'Saturday: 8:00 AM - 12:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  const departments = [
    {
      name: 'Admissions Office',
      contact: 'admissions@shumabo.edu.et',
      phone: '+251-11-123-4570',
      description: 'Student registration, enrollment, and academic records'
    },
    {
      name: 'Academic Affairs',
      contact: 'academics@shumabo.edu.et',
      phone: '+251-11-123-4571',
      description: 'Curriculum, grading, and academic policies'
    },
    {
      name: 'Student Services',
      contact: 'students@shumabo.edu.et',
      phone: '+251-11-123-4572',
      description: 'Student support, counseling, and extracurricular activities'
    },
    {
      name: 'Finance Office',
      contact: 'finance@shumabo.edu.et',
      phone: '+251-11-123-4573',
      description: 'Fee payment, financial aid, and billing inquiries'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0056b3] to-[#004494] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Mail className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with ShumAbo Secondary School. We're here to help students, families, and the community.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach us for your convenience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="bg-[#0056b3] rounded-lg p-3 w-fit mx-auto mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-[#0056b3]" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" required className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" required className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" required className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      required 
                      className="mt-1"
                      placeholder="Please describe your inquiry or how we can help you..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#0056b3] hover:bg-[#004494] text-white"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#0056b3]" />
                  Find Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Interactive map will be displayed here</p>
                    <p className="text-sm text-gray-400">Showing ShumAbo Secondary School location</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#0056b3] mt-0.5" />
                    <div>
                      <p className="font-medium">ShumAbo Secondary School</p>
                      <p className="text-gray-600">Kebele 02, Woreda 05, Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600">
                      <strong>Directions:</strong> Located in the heart of Addis Ababa, easily accessible by public transportation. 
                      The school is situated near major landmarks and is well-connected to the city center.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Department Contacts</h2>
            <p className="text-xl text-gray-600">Reach out to specific departments for targeted assistance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-[#0056b3]">{dept.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-[#0056b3]" />
                      <a href={`mailto:${dept.contact}`} className="text-[#0056b3] hover:underline">
                        {dept.contact}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-[#0056b3]" />
                      <a href={`tel:${dept.phone}`} className="text-[#0056b3] hover:underline">
                        {dept.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
