
import React from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { UserCheck, Calendar, Users, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const StaffAttendancePage = () => {
  const { profile } = useAuth();

  const mockAttendanceData = [
    { id: 1, name: 'John Doe', studentId: 'LSSS001', grade: '10A', status: 'Present', time: '8:15 AM' },
    { id: 2, name: 'Jane Smith', studentId: 'LSSS002', grade: '10A', status: 'Present', time: '8:12 AM' },
    { id: 3, name: 'Mike Johnson', studentId: 'LSSS003', grade: '10A', status: 'Absent', time: '-' },
    { id: 4, name: 'Sarah Wilson', studentId: 'LSSS004', grade: '10A', status: 'Late', time: '8:25 AM' },
    { id: 5, name: 'David Brown', studentId: 'LSSS005', grade: '10A', status: 'Present', time: '8:10 AM' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Present': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Absent': return <XCircle className="h-4 w-4 text-red-600" />;
      case 'Late': return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Present': return 'bg-green-100 text-green-800';
      case 'Absent': return 'bg-red-100 text-red-800';
      case 'Late': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const presentCount = mockAttendanceData.filter(s => s.status === 'Present').length;
  const absentCount = mockAttendanceData.filter(s => s.status === 'Absent').length;
  const lateCount = mockAttendanceData.filter(s => s.status === 'Late').length;

  return (
    <DashboardLayout title="Attendance Management">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Attendance Management</h1>
            <p className="text-gray-600">Track and manage student attendance</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-gray-600">Today - January 15, 2025</span>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Mark Attendance
            </Button>
          </div>
        </div>

        {/* Attendance Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{mockAttendanceData.length}</div>
              <p className="text-xs text-gray-600">Grade 10A</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Present</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{presentCount}</div>
              <p className="text-xs text-gray-600">{((presentCount / mockAttendanceData.length) * 100).toFixed(0)}% attendance</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Absent</CardTitle>
              <XCircle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{absentCount}</div>
              <p className="text-xs text-gray-600">Missing today</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Late</CardTitle>
              <AlertCircle className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{lateCount}</div>
              <p className="text-xs text-gray-600">Arrived late</p>
            </CardContent>
          </Card>
        </div>

        {/* Attendance List */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Today's Attendance - Grade 10A</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Export Report</Button>
                <Button variant="outline" size="sm">View History</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Student Name</th>
                    <th className="text-left p-3 font-medium">Student ID</th>
                    <th className="text-left p-3 font-medium">Grade</th>
                    <th className="text-center p-3 font-medium">Status</th>
                    <th className="text-center p-3 font-medium">Check-in Time</th>
                    <th className="text-center p-3 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockAttendanceData.map((student) => (
                    <tr key={student.id} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{student.name}</td>
                      <td className="p-3 text-gray-600">{student.studentId}</td>
                      <td className="p-3 text-gray-600">{student.grade}</td>
                      <td className="p-3 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getStatusIcon(student.status)}
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}>
                            {student.status}
                          </span>
                        </div>
                      </td>
                      <td className="p-3 text-center text-gray-600">{student.time}</td>
                      <td className="p-3 text-center">
                        <Button variant="outline" size="sm">
                          Update
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <UserCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Bulk Mark Present</h3>
              <p className="text-sm text-gray-600">Mark all students as present</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Weekly Report</h3>
              <p className="text-sm text-gray-600">Generate weekly attendance report</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <AlertCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Alert Parents</h3>
              <p className="text-sm text-gray-600">Send absence notifications</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StaffAttendancePage;
