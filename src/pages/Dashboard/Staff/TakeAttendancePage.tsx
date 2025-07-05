
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, CheckCircle, XCircle, Clock, Users } from 'lucide-react';

const TakeAttendancePage = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [attendance, setAttendance] = useState({});

  const classes = ['Grade 9A', 'Grade 9B', 'Grade 10A', 'Grade 10B', 'Grade 11A', 'Grade 11B'];

  const mockStudents = [
    { id: 1, name: 'John Doe', studentId: 'LSSS1701001', photo: '/placeholder.svg' },
    { id: 2, name: 'Jane Smith', studentId: 'LSSS1701002', photo: '/placeholder.svg' },
    { id: 3, name: 'Mike Johnson', studentId: 'LSSS1701003', photo: '/placeholder.svg' },
    { id: 4, name: 'Sarah Wilson', studentId: 'LSSS1701004', photo: '/placeholder.svg' },
    { id: 5, name: 'Tom Brown', studentId: 'LSSS1701005', photo: '/placeholder.svg' },
    { id: 6, name: 'Lisa Davis', studentId: 'LSSS1701006', photo: '/placeholder.svg' },
  ];

  const handleAttendanceChange = (studentId, status) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: status
    }));
  };

  const getAttendanceStats = () => {
    const total = mockStudents.length;
    const present = Object.values(attendance).filter(status => status === 'present').length;
    const absent = Object.values(attendance).filter(status => status === 'absent').length;
    const late = Object.values(attendance).filter(status => status === 'late').length;
    const unmarked = total - present - absent - late;

    return { total, present, absent, late, unmarked };
  };

  const stats = getAttendanceStats();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Take Attendance</h1>
          <p className="text-gray-600">Record student attendance for classes</p>
        </div>
        <div className="flex items-center space-x-2">
          <Users className="h-6 w-6 text-blue-600" />
          <Badge variant="secondary">Teacher Portal</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Attendance Setup</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Select Class</label>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose class" />
                </SelectTrigger>
                <SelectContent>
                  {classes.map(cls => (
                    <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Attendance Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Present</span>
                </span>
                <Badge variant="outline">{stats.present}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center space-x-2">
                  <XCircle className="h-4 w-4 text-red-500" />
                  <span>Absent</span>
                </span>
                <Badge variant="outline">{stats.absent}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-yellow-500" />
                  <span>Late</span>
                </span>
                <Badge variant="outline">{stats.late}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Unmarked</span>
                <Badge variant="secondary">{stats.unmarked}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => {
                const newAttendance = {};
                mockStudents.forEach(student => {
                  newAttendance[student.id] = 'present';
                });
                setAttendance(newAttendance);
              }}
            >
              Mark All Present
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setAttendance({})}
            >
              Clear All
            </Button>
          </CardContent>
        </Card>
      </div>

      {selectedClass && (
        <Card>
          <CardHeader>
            <CardTitle>Student Attendance - {selectedClass}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockStudents.map(student => (
                <div key={student.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{student.name}</div>
                      <div className="text-sm text-gray-500">{student.studentId}</div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant={attendance[student.id] === 'present' ? 'default' : 'outline'}
                      className={`flex-1 ${attendance[student.id] === 'present' ? 'bg-green-500 hover:bg-green-600' : ''}`}
                      onClick={() => handleAttendanceChange(student.id, 'present')}
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Present
                    </Button>
                    <Button
                      size="sm"
                      variant={attendance[student.id] === 'absent' ? 'default' : 'outline'}
                      className={`flex-1 ${attendance[student.id] === 'absent' ? 'bg-red-500 hover:bg-red-600' : ''}`}
                      onClick={() => handleAttendanceChange(student.id, 'absent')}
                    >
                      <XCircle className="h-4 w-4 mr-1" />
                      Absent
                    </Button>
                    <Button
                      size="sm"
                      variant={attendance[student.id] === 'late' ? 'default' : 'outline'}
                      className={`flex-1 ${attendance[student.id] === 'late' ? 'bg-yellow-500 hover:bg-yellow-600' : ''}`}
                      onClick={() => handleAttendanceChange(student.id, 'late')}
                    >
                      <Clock className="h-4 w-4 mr-1" />
                      Late
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-end mt-6">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Save Attendance
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TakeAttendancePage;
