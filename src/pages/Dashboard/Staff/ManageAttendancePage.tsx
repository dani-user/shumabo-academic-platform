
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Users, Search, Download, Filter, TrendingUp, AlertTriangle } from 'lucide-react';

const ManageAttendancePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const grades = ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];
  const sections = ['A', 'B', 'C', 'D'];

  const mockAttendanceData = [
    {
      id: 1,
      studentName: 'John Doe',
      studentId: 'LSSS1701001',
      grade: 'Grade 9',
      section: 'A',
      status: 'present',
      timeIn: '08:00',
      recordedBy: 'Ms. Smith',
      date: '2024-01-15'
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      studentId: 'LSSS1701002',
      grade: 'Grade 9',
      section: 'A',
      status: 'absent',
      timeIn: null,
      recordedBy: 'Ms. Smith',
      date: '2024-01-15'
    },
    {
      id: 3,
      studentName: 'Mike Johnson',
      studentId: 'LSSS1701003',
      grade: 'Grade 10',
      section: 'B',
      status: 'late',
      timeIn: '08:30',
      recordedBy: 'Mr. Brown',
      date: '2024-01-15'
    },
    {
      id: 4,
      studentName: 'Sarah Wilson',
      studentId: 'LSSS1701004',
      grade: 'Grade 11',
      section: 'A',
      status: 'present',
      timeIn: '07:55',
      recordedBy: 'Ms. Davis',
      date: '2024-01-15'
    }
  ];

  const filteredData = mockAttendanceData.filter(record => {
    const matchesSearch = record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = !selectedGrade || record.grade === selectedGrade;
    const matchesSection = !selectedSection || record.section === selectedSection;
    
    return matchesSearch && matchesGrade && matchesSection;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'present': return 'bg-green-100 text-green-800';
      case 'absent': return 'bg-red-100 text-red-800';
      case 'late': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAttendanceStats = () => {
    const total = filteredData.length;
    const present = filteredData.filter(r => r.status === 'present').length;
    const absent = filteredData.filter(r => r.status === 'absent').length;
    const late = filteredData.filter(r => r.status === 'late').length;
    const attendanceRate = total > 0 ? ((present + late) / total * 100).toFixed(1) : 0;
    
    return { total, present, absent, late, attendanceRate };
  };

  const stats = getAttendanceStats();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manage Attendance</h1>
          <p className="text-gray-600">View and manage student attendance records</p>
        </div>
        <div className="flex items-center space-x-2">
          <Users className="h-6 w-6 text-blue-600" />
          <Badge variant="secondary">Registrar Portal</Badge>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
              <div className="text-sm text-gray-500">Total Records</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{stats.present}</div>
              <div className="text-sm text-gray-500">Present</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{stats.absent}</div>
              <div className="text-sm text-gray-500">Absent</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{stats.late}</div>
              <div className="text-sm text-gray-500">Late</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.attendanceRate}%</div>
              <div className="text-sm text-gray-500">Attendance Rate</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>Filters & Search</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label className="text-sm font-medium">Date</label>
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Grade</label>
              <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                <SelectTrigger>
                  <SelectValue placeholder="All Grades" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Grades</SelectItem>
                  {grades.map(grade => (
                    <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Section</label>
              <Select value={selectedSection} onValueChange={setSelectedSection}>
                <SelectTrigger>
                  <SelectValue placeholder="All Sections" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Sections</SelectItem>
                  {sections.map(section => (
                    <SelectItem key={section} value={section}>Section {section}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search student..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex items-end space-x-2">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Attendance Records */}
      <Card>
        <CardHeader>
          <CardTitle>Attendance Records ({filteredData.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Student</th>
                  <th className="text-center p-3">Grade</th>
                  <th className="text-center p-3">Section</th>
                  <th className="text-center p-3">Status</th>
                  <th className="text-center p-3">Time In</th>
                  <th className="text-center p-3">Recorded By</th>
                  <th className="text-center p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map(record => (
                  <tr key={record.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <div>
                        <div className="font-medium">{record.studentName}</div>
                        <div className="text-sm text-gray-500">{record.studentId}</div>
                      </div>
                    </td>
                    <td className="p-3 text-center">{record.grade}</td>
                    <td className="p-3 text-center">{record.section}</td>
                    <td className="p-3 text-center">
                      <Badge className={getStatusColor(record.status)}>
                        {record.status}
                      </Badge>
                    </td>
                    <td className="p-3 text-center">
                      {record.timeIn || '-'}
                    </td>
                    <td className="p-3 text-center text-sm text-gray-600">
                      {record.recordedBy}
                    </td>
                    <td className="p-3 text-center">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredData.length === 0 && (
            <div className="text-center py-8">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No attendance records found for the selected criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Attendance Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            <span>Attendance Alerts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
              <div>
                <div className="font-medium text-red-800">High Absenteeism Alert</div>
                <div className="text-sm text-red-600">5 students have been absent for 3+ consecutive days</div>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div>
                <div className="font-medium text-yellow-800">Late Arrival Pattern</div>
                <div className="text-sm text-yellow-600">Grade 10-B has 15% late arrival rate this week</div>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div>
                <div className="font-medium text-blue-800">Attendance Improvement</div>
                <div className="text-sm text-blue-600">Grade 9-A attendance improved by 12% this month</div>
              </div>
              <Button variant="outline" size="sm">
                View Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageAttendancePage;
