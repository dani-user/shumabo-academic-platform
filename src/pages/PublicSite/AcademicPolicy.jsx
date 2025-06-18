
import React from 'react';
import Header from '@/components/PublicSite/Header';
import Footer from '@/components/PublicSite/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Users, Calendar, Award } from 'lucide-react';

const AcademicPolicy = () => {
  const gradingScale = [
    { grade: 'A', range: '90-100', gpa: '4.0', description: 'Excellent' },
    { grade: 'B', range: '80-89', gpa: '3.0', description: 'Good' },
    { grade: 'C', range: '70-79', gpa: '2.0', description: 'Satisfactory' },
    { grade: 'D', range: '50-69', gpa: '1.0', description: 'Pass' },
    { grade: 'F', range: '<50', gpa: '0.0', description: 'Fail' }
  ];

  const promotionCriteria = [
    'Minimum year average of 50% across all subjects',
    'Attendance rate of at least 75% for the academic year',
    'Passing grades in all core subjects',
    'Satisfactory conduct and discipline record',
    'Completion of all required coursework and assessments'
  ];

  const attendancePolicy = [
    'Students must maintain at least 75% attendance to be eligible for promotion',
    'Three consecutive unexcused absences will trigger automatic family notification',
    'Medical absences require proper documentation from healthcare providers',
    'Extended absences must be pre-approved by the registrar\'s office',
    'Chronic absenteeism may result in academic probation or suspension'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0056b3] to-[#004494] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <GraduationCap className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Policy</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive guidelines and standards that govern academic excellence at ShumAbo Secondary School
            </p>
          </div>
        </div>
      </section>

      {/* Academic Standards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Standards</h2>
            <p className="text-xl text-gray-600">Our commitment to educational excellence through clear, fair policies</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Grading System */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-[#0056b3]" />
                  Grading System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600 mb-4">
                    Our grading system provides clear standards for academic achievement:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-[#0056b3] text-white">
                          <th className="border border-gray-300 px-4 py-2">Grade</th>
                          <th className="border border-gray-300 px-4 py-2">Range (%)</th>
                          <th className="border border-gray-300 px-4 py-2">GPA</th>
                          <th className="border border-gray-300 px-4 py-2">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {gradingScale.map((item, index) => (
                          <tr key={index} className="even:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold text-center">{item.grade}</td>
                            <td className="border border-gray-300 px-4 py-2 text-center">{item.range}</td>
                            <td className="border border-gray-300 px-4 py-2 text-center">{item.gpa}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Assessment Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-[#0056b3]" />
                  Assessment Methods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600 mb-4">
                    Student performance is evaluated through multiple assessment methods:
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Quizzes & Tests</span>
                      <span className="text-[#0056b3] font-semibold">25%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Midterm Examination</span>
                      <span className="text-[#0056b3] font-semibold">25%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Assignments & Projects</span>
                      <span className="text-[#0056b3] font-semibold">20%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Final Examination</span>
                      <span className="text-[#0056b3] font-semibold">30%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Promotion & Attendance */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Promotion Criteria */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#0056b3]" />
                  Promotion Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Students must meet the following requirements for grade promotion:
                </p>
                <ul className="space-y-3">
                  {promotionCriteria.map((criterion, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#0056b3] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Attendance Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#0056b3]" />
                  Attendance Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Regular attendance is crucial for academic success. Our policy includes:
                </p>
                <ul className="space-y-3">
                  {attendancePolicy.map((policy, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#0056b3] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{policy}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Calendar</h2>
            <p className="text-xl text-gray-600">Important dates and deadlines for the academic year</p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">First Semester</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Registration Period</span>
                      <span className="font-medium">Sept 1-14</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Classes Begin</span>
                      <span className="font-medium">Sept 15</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Midterm Exams</span>
                      <span className="font-medium">Nov 15-22</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Final Exams</span>
                      <span className="font-medium">Jan 20-30</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">Second Semester</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Registration Period</span>
                      <span className="font-medium">Feb 1-7</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Classes Begin</span>
                      <span className="font-medium">Feb 8</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Midterm Exams</span>
                      <span className="font-medium">Apr 15-22</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Final Exams</span>
                      <span className="font-medium">June 20-30</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AcademicPolicy;
