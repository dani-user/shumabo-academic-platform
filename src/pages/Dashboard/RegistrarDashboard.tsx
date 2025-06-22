import React from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserPlus, Users, Calendar, CreditCard, FileText, IdCard } from 'lucide-react';

const RegistrarDashboard = () => {
  const mockData = {
    registrar: {
      name: 'Maria Rodriguez',
      id: 'LSSR1701000'
    },
    stats: {
      totalStudents: 1247,
      pendingRegistrations: 15,
      todayAttendance: 94.2,
      pendingFees: 23
    },
    recentActivities: [
      { id: 1, activity: 'Registered new student: John Smith', time: '2 hours ago' },
      { id: 2, activity: 'Printed ID card for Jane Doe', time: '4 hours ago' },
      { id: 3, activity: 'Updated attendance for Grade 11A', time: '1 day ago' }
    ]
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-[#0056b3] to-[#004494] text-white p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-2">Welcome, {mockData.registrar.name}</h1>
          <p className="text-blue-100">Registrar Portal - Manage student registrations and records</p>
          <p className="text-blue-100">Registrar ID: {mockData.registrar.id}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-[#0056b3]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#0056b3]">{mockData.stats.totalStudents}</div>
              <p className="text-xs text-gray-600">Enrolled students</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Registrations</CardTitle>
              <UserPlus className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-500">{mockData.stats.pendingRegistrations}</div>
              <p className="text-xs text-gray-600">Awaiting processing</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Attendance</CardTitle>
              <Calendar className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">{mockData.stats.todayAttendance}%</div>
              <p className="text-xs text-gray-600">Overall attendance</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Fees</CardTitle>
              <CreditCard className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-500">{mockData.stats.pendingFees}</div>
              <p className="text-xs text-gray-600">Students with dues</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button className="h-20 flex flex-col items-center justify-center bg-[#0056b3] hover:bg-[#004494]">
            <UserPlus className="h-6 w-6 mb-2" />
            <span>Register Student</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center bg-[#0056b3] hover:bg-[#004494]">
            <IdCard className="h-6 w-6 mb-2" />
            <span>Print ID Cards</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center bg-[#0056b3] hover:bg-[#004494]">
            <Calendar className="h-6 w-6 mb-2" />
            <span>Manage Attendance</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center bg-[#0056b3] hover:bg-[#004494]">
            <CreditCard className="h-6 w-6 mb-2" />
            <span>Fee Collection</span>
          </Button>
        </div>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#0056b3]" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockData.recentActivities.map((activity) => (
                <div key={activity.id} className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{activity.activity}</p>
                    <p className="text-sm text-gray-600">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default RegistrarDashboard;
