
import React, { useState } from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, CheckCircle, XCircle, Clock, TrendingUp, Download, Filter } from 'lucide-react';

const AttendancePage = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const mockAttendance = [
    { date: '2025-01-15', status: 'present', subjects: 7, lateMinutes: 0 },
    { date: '2025-01-14', status: 'present', subjects: 7, lateMinutes: 0 },
    { date: '2025-01-13', status: 'absent', subjects: 0, reason: 'Sick Leave', lateMinutes: 0 },
    { date: '2025-01-12', status: 'present', subjects: 6, lateMinutes: 0 },
    { date: '2025-01-11', status: 'late', subjects: 7, lateMinutes: 15 },
    { date: '2025-01-10', status: 'present', subjects: 7, lateMinutes: 0 },
    { date: '2025-01-09', status: 'present', subjects: 7, lateMinutes: 0 },
    { date: '2025-01-08', status: 'present', subjects: 7, lateMinutes: 0 },
    { date: '2025-01-07', status: 'late', subjects: 7, lateMinutes: 10 },
    { date: '2025-01-06', status: 'present', subjects: 6, lateMinutes: 0 },
  ];

  const subjectAttendance = [
    { subject: 'Mathematics', present: 18, absent: 2, late: 1, total: 21, percentage: 85.7 },
    { subject: 'Physics', present: 19, absent: 1, late: 1, total: 21, percentage: 90.5 },
    { subject: 'Chemistry', present: 20, absent: 1, late: 0, total: 21, percentage: 95.2 },
    { subject: 'Biology', present: 17, absent: 3, late: 1, total: 21, percentage: 81.0 },
    { subject: 'English', present: 19, absent: 1, late: 1, total: 21, percentage: 90.5 },
    { subject: 'History', present: 18, absent: 2, late: 1, total: 21, percentage: 85.7 },
  ];

  const attendanceStats = {
    totalDays: 120,
    presentDays: 115,
    absentDays: 3,
    lateDays: 2,
    attendanceRate: 95.8,
    monthlyRate: 92.3,
    weeklyRate: 100
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

  const handleDownloadReport = () => {
    alert('Attendance report download started...');
  };

  const handleRequestLeave = () => {
    alert('Leave request form opened...');
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <DashboardLayout title="My Attendance">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Attendance Record</h1>
            <p className="text-gray-600">Track your daily attendance and performance</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={handleRequestLeave}>
              Request Leave
            </Button>
            <Button onClick={handleDownloadReport} className="bg-blue-600 hover:bg-blue-700">
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
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
              <p className="text-xs text-gray-600">Overall this year</p>
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
              <p className="text-xs text-gray-600">Excused absences</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Late Arrivals</CardTitle>
              <Clock className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">
                {attendanceStats.lateDays}
              </div>
              <p className="text-xs text-gray-600">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              className="px-3 py-2 border rounded-md text-sm"
            >
              {months.map((month, index) => (
                <option key={index} value={index}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
            className="px-3 py-2 border rounded-md text-sm"
          >
            <option value={2025}>2025</option>
            <option value={2024}>2024</option>
          </select>
        </div>

        {/* Recent Attendance */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Attendance Record</CardTitle>
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
                        {record.status === 'late' && `Late by ${record.lateMinutes} minutes - ${record.subjects} classes`}
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

        {/* Subject-wise Attendance */}
        <Card>
          <CardHeader>
            <CardTitle>Subject-wise Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Subject</th>
                    <th className="text-center p-3 font-medium">Present</th>
                    <th className="text-center p-3 font-medium">Absent</th>
                    <th className="text-center p-3 font-medium">Late</th>
                    <th className="text-center p-3 font-medium">Total</th>
                    <th className="text-center p-3 font-medium">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {subjectAttendance.map((subject, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{subject.subject}</td>
                      <td className="p-3 text-center text-green-600">{subject.present}</td>
                      <td className="p-3 text-center text-red-600">{subject.absent}</td>
                      <td className="p-3 text-center text-yellow-600">{subject.late}</td>
                      <td className="p-3 text-center">{subject.total}</td>
                      <td className="p-3 text-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          subject.percentage >= 90 ? 'bg-green-100 text-green-800' :
                          subject.percentage >= 80 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {subject.percentage}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Calendar Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Overview - {months[selectedMonth]} {selectedYear}</CardTitle>
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
                // Mock attendance status for calendar
                const randomStatus = Math.random();
                const isPresent = randomStatus > 0.1;
                const isAbsent = randomStatus <= 0.05;
                const isLate = randomStatus > 0.05 && randomStatus <= 0.1;
                
                return (
                  <div
                    key={day}
                    className={`p-2 text-sm rounded border cursor-pointer hover:shadow-sm ${
                      isAbsent ? 'bg-red-100 text-red-800 border-red-200' :
                      isLate ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                      isPresent ? 'bg-green-100 text-green-800 border-green-200' :
                      'bg-gray-50 text-gray-600 border-gray-200'
                    }`}
                    title={
                      isAbsent ? 'Absent' :
                      isLate ? 'Late' :
                      isPresent ? 'Present' : 'No data'
                    }
                  >
                    {day}
                  </div>
                );
              })}
            </div>
            
            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-100 border border-green-200 rounded"></div>
                <span>Present</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-100 border border-yellow-200 rounded"></div>
                <span>Late</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-100 border border-red-200 rounded"></div>
                <span>Absent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-50 border border-gray-200 rounded"></div>
                <span>Weekend/Holiday</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AttendancePage;
