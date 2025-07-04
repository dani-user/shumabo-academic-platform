
import React from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Clock, Calendar } from 'lucide-react';

const TimetablePage = () => {
  const { profile } = useAuth();

  const timeSlots = [
    '8:00 - 8:50',
    '9:00 - 9:50', 
    '10:00 - 10:50',
    '11:00 - 11:50',
    '1:00 - 1:50',
    '2:00 - 2:50',
    '3:00 - 3:50'
  ];

  const mockTimetable = {
    Monday: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History', 'PE'],
    Tuesday: ['Physics', 'Mathematics', 'Biology', 'Chemistry', 'Geography', 'English', 'Art'],
    Wednesday: ['Chemistry', 'Biology', 'Mathematics', 'Physics', 'History', 'Geography', 'Music'],
    Thursday: ['Biology', 'Chemistry', 'Physics', 'Mathematics', 'English', 'PE', 'Study'],
    Friday: ['English', 'History', 'Geography', 'Art', 'Mathematics', 'Physics', 'Assembly']
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <DashboardLayout title="Timetable">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Class Timetable</h1>
            <p className="text-gray-600">Your weekly schedule</p>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            <span className="text-sm text-gray-600">Week View</span>
          </div>
        </div>

        {/* Current Class Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-green-600" />
              Current Class
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-green-900">Mathematics</h3>
                <p className="text-green-700">Room 201 - Mr. Johnson</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-green-900">9:00 - 9:50</p>
                <p className="text-sm text-green-700">20 minutes remaining</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timetable Grid */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[800px]">
                <thead>
                  <tr>
                    <th className="border p-3 bg-gray-50 font-medium text-left w-32">Time</th>
                    {days.map(day => (
                      <th key={day} className="border p-3 bg-gray-50 font-medium text-center">
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {timeSlots.map((time, timeIndex) => (
                    <tr key={timeIndex}>
                      <td className="border p-3 bg-gray-50 font-medium text-sm">
                        {time}
                      </td>
                      {days.map(day => (
                        <td key={day} className="border p-3 text-center">
                          <div className="bg-blue-50 p-2 rounded text-sm">
                            <div className="font-medium text-blue-900">
                              {mockTimetable[day as keyof typeof mockTimetable][timeIndex]}
                            </div>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">35</div>
                <p className="text-sm text-gray-600">Classes per week</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">7</div>
                <p className="text-sm text-gray-600">Different subjects</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">6</div>
                <p className="text-sm text-gray-600">Teachers</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TimetablePage;
