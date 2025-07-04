
import React from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Clock, Calendar, Users, Plus } from 'lucide-react';

const StaffTimetablePage = () => {
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
    Monday: ['Grade 9A - Math', 'Grade 10B - Physics', 'Grade 11A - Chemistry', 'Free Period', 'Grade 12A - Math', 'Grade 9B - Math', 'Office Hours'],
    Tuesday: ['Grade 10A - Math', 'Grade 9A - Physics', 'Grade 11B - Math', 'Grade 12B - Chemistry', 'Free Period', 'Grade 10B - Math', 'Faculty Meeting'],
    Wednesday: ['Grade 11A - Math', 'Grade 12A - Physics', 'Grade 9B - Chemistry', 'Grade 10A - Math', 'Office Hours', 'Grade 11B - Physics', 'Free Period'],
    Thursday: ['Grade 12B - Math', 'Grade 11A - Physics', 'Grade 10B - Chemistry', 'Grade 9A - Math', 'Free Period', 'Grade 12A - Physics', 'Department Meeting'],
    Friday: ['Grade 9A - Math', 'Grade 10A - Physics', 'Grade 11A - Math', 'Grade 12A - Chemistry', 'Office Hours', 'Free Period', 'Planning']
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const isTeacher = profile?.role === 'teacher';

  return (
    <DashboardLayout title="Teaching Schedule">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Teaching Schedule</h1>
            <p className="text-gray-600">
              {isTeacher ? 'Your weekly teaching schedule' : 'Staff teaching schedules'}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-gray-600">Week View</span>
            </div>
            {profile?.role === 'admin' && (
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Create Schedule
              </Button>
            )}
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
                <h3 className="font-semibold text-green-900">Grade 10A - Mathematics</h3>
                <p className="text-green-700">Room 201 - 28 Students</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-green-900">9:00 - 9:50</p>
                <p className="text-sm text-green-700">20 minutes remaining</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Teaching Schedule</CardTitle>
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
                          <div className={`p-2 rounded text-sm ${
                            mockTimetable[day as keyof typeof mockTimetable][timeIndex].includes('Free') ||
                            mockTimetable[day as keyof typeof mockTimetable][timeIndex].includes('Office') ||
                            mockTimetable[day as keyof typeof mockTimetable][timeIndex].includes('Meeting') ||
                            mockTimetable[day as keyof typeof mockTimetable][timeIndex].includes('Planning')
                              ? 'bg-gray-100 text-gray-700'
                              : 'bg-blue-50 text-blue-900'
                          }`}>
                            <div className="font-medium">
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

        {/* Teaching Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">28</div>
                <p className="text-sm text-gray-600">Classes per week</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">6</div>
                <p className="text-sm text-gray-600">Different grades</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">180</div>
                <p className="text-sm text-gray-600">Total students</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">8</div>
                <p className="text-sm text-gray-600">Office hours</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StaffTimetablePage;
