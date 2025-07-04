
import React from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { BookOpen, Calendar, UserCheck, Bell, TrendingUp, Award, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const UpdatedStudentDashboard = () => {
  const { profile } = useAuth();

  const upcomingClasses = [
    { subject: 'Mathematics', time: '9:00 AM', room: 'Room 201', teacher: 'Mr. Johnson' },
    { subject: 'Physics', time: '10:00 AM', room: 'Room 105', teacher: 'Ms. Davis' },
    { subject: 'Chemistry', time: '11:00 AM', room: 'Lab 1', teacher: 'Dr. Smith' },
  ];

  const recentGrades = [
    { subject: 'Mathematics', grade: 'A-', date: '2025-01-10' },
    { subject: 'Physics', grade: 'B+', date: '2025-01-08' },
    { subject: 'Chemistry', grade: 'A', date: '2025-01-05' },
  ];

  const announcements = [
    { title: 'Midterm Exam Schedule', date: '2025-01-15', priority: 'high' },
    { title: 'Science Fair Registration', date: '2025-01-10', priority: 'medium' },
    { title: 'Library Extended Hours', date: '2025-01-05', priority: 'low' },
  ];

  return (
    <DashboardLayout title="Student Dashboard">
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">
            Welcome back, {profile?.fname}!
          </h1>
          <p className="text-blue-100">
            Ready to continue your learning journey? Here's what's happening today.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current GPA</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">3.65</div>
              <p className="text-xs text-gray-600">This semester</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance</CardTitle>
              <UserCheck className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">94%</div>
              <p className="text-xs text-gray-600">This month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Subjects</CardTitle>
              <BookOpen className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">7</div>
              <p className="text-xs text-gray-600">Active courses</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Assignments</CardTitle>
              <Award className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">3</div>
              <p className="text-xs text-gray-600">Due this week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Schedule */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  Today's Schedule
                </CardTitle>
                <Link to="/timetable">
                  <Button variant="outline" size="sm">View Full</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingClasses.map((class_, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{class_.subject}</h4>
                      <p className="text-sm text-gray-600">{class_.teacher} • {class_.room}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-blue-600">{class_.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Grades */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  Recent Grades
                </CardTitle>
                <Link to="/grades">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentGrades.map((grade, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{grade.subject}</h4>
                      <p className="text-sm text-gray-600">{grade.date}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                        grade.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                        grade.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {grade.grade}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Announcements */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-purple-600" />
                Recent Announcements
              </CardTitle>
              <Link to="/announcements">
                <Button variant="outline" size="sm">View All</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {announcements.map((announcement, index) => (
                <div key={index} className="flex items-center justify-between p-3 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{announcement.title}</h4>
                    <p className="text-sm text-gray-600">{announcement.date}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    announcement.priority === 'high' ? 'bg-red-100 text-red-800' :
                    announcement.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {announcement.priority.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Link to="/grades" className="block">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-medium text-gray-900">View Grades</h3>
                <p className="text-sm text-gray-600 mt-1">Check your academic performance</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/timetable" className="block">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-medium text-gray-900">Class Schedule</h3>
                <p className="text-sm text-gray-600 mt-1">View your weekly timetable</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/attendance" className="block">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <UserCheck className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-medium text-gray-900">Attendance</h3>
                <p className="text-sm text-gray-600 mt-1">Track your attendance record</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/profile" className="block">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-medium text-gray-900">Profile</h3>
                <p className="text-sm text-gray-600 mt-1">Manage your information</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UpdatedStudentDashboard;
