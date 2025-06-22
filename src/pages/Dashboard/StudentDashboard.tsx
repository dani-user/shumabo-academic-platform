import React from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Calendar, Bell, FileText, User } from 'lucide-react';

const StudentDashboard = () => {
  const mockData = {
    student: {
      name: 'John Doe',
      id: 'LSSS1701000',
      grade: 11,
      section: 'A',
      stream: 'Natural'
    },
    gpa: {
      semester: 3.75,
      cumulative: 3.68
    },
    announcements: [
      { id: 1, title: 'Midterm Exams Schedule', date: '2025-01-15' },
      { id: 2, title: 'Science Fair Registration', date: '2025-01-10' }
    ]
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-[#0056b3] to-[#004494] text-white p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-2">Welcome back, {mockData.student.name}!</h1>
          <p className="text-blue-100">Grade {mockData.student.grade}{mockData.student.section} - {mockData.student.stream} Stream</p>
          <p className="text-blue-100">Student ID: {mockData.student.id}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Semester GPA</CardTitle>
              <GraduationCap className="h-4 w-4 text-[#0056b3]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#0056b3]">{mockData.gpa.semester}</div>
              <p className="text-xs text-gray-600">Current semester performance</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cumulative GPA</CardTitle>
              <BookOpen className="h-4 w-4 text-[#0056b3]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#0056b3]">{mockData.gpa.cumulative}</div>
              <p className="text-xs text-gray-600">Overall academic performance</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance</CardTitle>
              <Calendar className="h-4 w-4 text-[#0056b3]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">95%</div>
              <p className="text-xs text-gray-600">This semester</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button className="h-20 flex flex-col items-center justify-center bg-[#0056b3] hover:bg-[#004494]">
            <FileText className="h-6 w-6 mb-2" />
            <span>View Grades</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center bg-[#0056b3] hover:bg-[#004494]">
            <Calendar className="h-6 w-6 mb-2" />
            <span>Timetable</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center bg-[#0056b3] hover:bg-[#004494]">
            <Bell className="h-6 w-6 mb-2" />
            <span>Announcements</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center bg-[#0056b3] hover:bg-[#004494]">
            <User className="h-6 w-6 mb-2" />
            <span>Profile</span>
          </Button>
        </div>

        {/* Recent Announcements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-[#0056b3]" />
              Recent Announcements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockData.announcements.map((announcement) => (
                <div key={announcement.id} className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{announcement.title}</h4>
                    <p className="text-sm text-gray-600">{announcement.date}</p>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
