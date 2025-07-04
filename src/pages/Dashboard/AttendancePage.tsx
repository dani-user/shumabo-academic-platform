
import React from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Calendar, CheckCircle, XCircle, Clock, TrendingUp } from 'lucide-react';

const AttendancePage = () => {
  const { profile } = useAuth();

  const mockAttendance = [
    { date: '2025-01-15', status: 'present', subjects: 7 },
    { date: '2025-01-14', status: 'present', subjects: 7 },
    { date: '2025-01-13', status: 'absent', subjects: 0, reason: 'Sick' },
    { date: '2025-01-12', status: 'present', subjects: 6 },
    { date: '2025-01-11', status: 'late', subjects: 7, lateMinutes: 15 },
    { date: '2025-01-10', status: 'present', subjects: 7 },
    { date: '2025-01-09', status: 'present', subjects: 7 },
  ];

  const attendanceStats = {
    totalDays: 120,
    presentDays: 115,
    absentDays: 3,
    lateDays: 2,
    attendanceRate: 95.8
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'absent':
        return <XCircle className="h-5 w-5 text-red-600" />;
      case 'late':
        return <Clock className="h-5 w-5 text-yellow-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present':
        return 'bg-green-50 text-green-800 border-green-200';
      case 'absent':
        return 'bg-red-50 text-red-800 border-red-200';
      case 'late':
        return 'bg-yellow-50 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-50 text-gray-800 border-gray-200';
    }
  };

  return (
    <DashboardLayout title="Attendance">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Attendance Record</h1>
            <p className="text-gray-600">Track your daily attendance and performance</p>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            <span className="text-sm text-gray-600">Current Semester</span>
          </div>
        </div>

        {/* Attendance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {attendanceStats.attendanceRate}%
              </div>
              <p className="text-xs text-gray-600">Excellent attendance</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Present Days</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {attendanceStats.presentDays}
              </div>
              <p className="text-xs text-gray-600">Out of {attendanceStats.totalDays} days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Absent Days</CardTitle>
              <XCircle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {attendanceStats.absentDays}
              </div>
              <p className="text-xs text-gray-600">Approved absences</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Late Days</CardTitle>
              <Clock className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">
                {attendanceStats.lateDays}
              </div>
              <p className="text-xs text-gray-600">Tardy arrivals</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Attendance */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockAttendance.map((record, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(record.status)}
                    <div>
                      <div className="font-medium">{record.date}</div>
                      <div className="text-sm text-gray-600">
                        {record.status === 'present' && `${record.subjects} classes attended`}
                        {record.status === 'absent' && `Absent - ${record.reason || 'No reason provided'}`}
                        {record.status === 'late' && `Late by ${record.lateMinutes} minutes`}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(record.status)}`}>
                      {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 text-center">
              {/* Days of week header */}
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="p-2 text-sm font-medium text-gray-600">
                  {day}
                </div>
              ))}
              
              {/* Calendar days with attendance status */}
              {Array.from({ length: 31 }, (_, i) => {
                const day = i + 1;
                const isPresent = Math.random() > 0.1; // Mock data
                const isAbsent = Math.random() > 0.95;
                
                return (
                  <div
                    key={day}
                    className={`p-2 text-sm rounded ${
                      isAbsent ? 'bg-red-100 text-red-800' :
                      isPresent ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AttendancePage;
