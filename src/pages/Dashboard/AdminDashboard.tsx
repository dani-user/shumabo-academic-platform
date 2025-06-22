
import React from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Users, BookOpen, CheckCircle, AlertCircle, BarChart3 } from 'lucide-react';

const AdminDashboard = () => {
  const mockData = {
    admin: {
      name: 'Michael Johnson',
      id: 'LSSA1701000'
    },
    stats: {
      totalStudents: 1247,
      totalTeachers: 52,
      pendingApprovals: 8,
      systemAlerts: 3
    },
    pendingApprovals: [
      { id: 1, type: 'Student Registration', name: 'Alice Brown', submitted: '2025-01-15' },
      { id: 2, type: 'Grade Entry', teacher: 'Dr. Smith', course: 'Mathematics 11A', submitted: '2025-01-14' }
    ],
    systemAlerts: [
      { id: 1, type: 'warning', message: 'Low attendance in Grade 10B', priority: 'Medium' },
      { id: 2, type: 'info', message: 'Academic calendar update needed', priority: 'Low' }
    ]
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-[#0056b3] to-[#004494] text-white p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-2">Welcome, {mockData.admin.name}</h1>
          <p className="text-blue-100">Admin Portal - System administration and oversight</p>
          <p className="text-blue-100">Admin ID: {mockData.admin.id}</p>
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
              <p className="text-xs text-gray-600">Active enrollments</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Teachers</CardTitle>
              <BookOpen className="h-4 w-4 text-[#0056b3]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#0056b3]">{mockData.stats.totalTeachers}</div>
              <p className="text-xs text-gray-600">Active faculty</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
              <CheckCircle className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-500">{mockData.stats.pendingApprovals}</div>
              <p className="text-xs text-gray-600">Need review</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Alerts</CardTitle>
              <AlertCircle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-500">{mockData.stats.systemAlerts}</div>
              <p className="text-xs text-gray-600">Require attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button className="h-20 flex flex-col items-center justify-center bg-[#0056b3] hover:bg-[#004494]">
            <CheckCircle className="h-6 w-6 mb-2" />
            <span>Approve Registrations</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center bg-[#0056b3] hover:bg-[#004494]">
            <Users className="h-6 w-6 mb-2" />
            <span>Manage Users</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center bg-[#0056b3] hover:bg-[#004494]">
            <BookOpen className="h-6 w-6 mb-2" />
            <span>Course Management</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center bg-[#0056b3] hover:bg-[#004494]">
            <BarChart3 className="h-6 w-6 mb-2" />
            <span>Generate Reports</span>
          </Button>
        </div>

        {/* Pending Approvals */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-orange-500" />
              Pending Approvals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockData.pendingApprovals.map((approval) => (
                <div key={approval.id} className="flex justify-between items-center p-4 border rounded-lg border-orange-200 bg-orange-50">
                  <div>
                    <h4 className="font-medium">{approval.type}</h4>
                    <p className="text-sm text-gray-600">
                      {approval.name || `${approval.teacher} - ${approval.course}`}
                    </p>
                    <p className="text-xs text-gray-500">Submitted: {approval.submitted}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-green-600 border-green-600">Approve</Button>
                    <Button variant="outline" size="sm" className="text-red-600 border-red-600">Reject</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              System Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockData.systemAlerts.map((alert) => (
                <div key={alert.id} className="flex justify-between items-center p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <AlertCircle className={`h-5 w-5 ${alert.type === 'warning' ? 'text-orange-500' : 'text-blue-500'}`} />
                    <div>
                      <p className="font-medium">{alert.message}</p>
                      <p className="text-sm text-gray-600">Priority: {alert.priority}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Review</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
