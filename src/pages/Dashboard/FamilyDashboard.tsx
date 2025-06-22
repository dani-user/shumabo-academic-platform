import React from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, GraduationCap, Calendar, Bell, AlertTriangle } from 'lucide-react';

const FamilyDashboard = () => {
  const mockData = {
    family: {
      name: 'Jane Doe',
      id: 'LSSF1701000'
    },
    student: {
      name: 'John Doe',
      id: 'LSSS1701000',
      grade: 11,
      section: 'A',
      gpa: 3.75,
      attendance: 95
    },
    alerts: [
      { id: 1, type: 'warning', message: 'Midterm exam results available', date: '2025-01-15' }
    ]
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-[#0056b3] to-[#004494] text-white p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-2">Welcome, {mockData.family.name}</h1>
          <p className="text-blue-100">Family Portal - Monitor your child's academic progress</p>
          <p className="text-blue-100">Family ID: {mockData.family.id}</p>
        </div>

        {/* Student Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#0056b3]" />
              Student Overview - {mockData.student.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-[#0056b3]">{mockData.student.grade}{mockData.student.section}</div>
                <p className="text-sm text-gray-600">Grade & Section</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-[#0056b3]">{mockData.student.gpa}</div>
                <p className="text-sm text-gray-600">Current GPA</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-green-600">{mockData.student.attendance}%</div>
                <p className="text-sm text-gray-600">Attendance</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-blue-600">Good</div>
                <p className="text-sm text-gray-600">Standing</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button className="h-20 flex flex-col items-center justify-center bg-[#0056b3] hover:bg-[#004494]">
            <GraduationCap className="h-6 w-6 mb-2" />
            <span>View Grades</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center bg-[#0056b3] hover:bg-[#004494]">
            <Calendar className="h-6 w-6 mb-2" />
            <span>Attendance</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center bg-[#0056b3] hover:bg-[#004494]">
            <Bell className="h-6 w-6 mb-2" />
            <span>Announcements</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center bg-[#0056b3] hover:bg-[#004494]">
            <Users className="h-6 w-6 mb-2" />
            <span>Contact Teachers</span>
          </Button>
        </div>

        {/* Alerts & Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              Alerts & Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockData.alerts.map((alert) => (
                <div key={alert.id} className="flex items-center gap-3 p-3 border rounded-lg border-orange-200 bg-orange-50">
                  <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium">{alert.message}</p>
                    <p className="text-sm text-gray-600">{alert.date}</p>
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

export default FamilyDashboard;
