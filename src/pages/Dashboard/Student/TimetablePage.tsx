
import React from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';

const TimetablePage = () => {
  const mockTimetable = [
    { time: '8:00 - 8:45', monday: 'Mathematics', tuesday: 'Physics', wednesday: 'Chemistry', thursday: 'Biology', friday: 'English' },
    { time: '8:45 - 9:30', monday: 'Physics', tuesday: 'Mathematics', wednesday: 'English', thursday: 'Chemistry', friday: 'Biology' },
    { time: '9:30 - 10:15', monday: 'Chemistry', tuesday: 'English', wednesday: 'Mathematics', thursday: 'Physics', friday: 'History' },
    { time: '10:15 - 10:30', monday: 'Break', tuesday: 'Break', wednesday: 'Break', thursday: 'Break', friday: 'Break' },
    { time: '10:30 - 11:15', monday: 'Biology', tuesday: 'History', wednesday: 'Physics', thursday: 'Mathematics', friday: 'Chemistry' },
    { time: '11:15 - 12:00', monday: 'English', tuesday: 'Biology', wednesday: 'History', thursday: 'English', friday: 'Mathematics' },
    { time: '12:00 - 1:00', monday: 'Lunch', tuesday: 'Lunch', wednesday: 'Lunch', thursday: 'Lunch', friday: 'Lunch' },
    { time: '1:00 - 1:45', monday: 'History', tuesday: 'Chemistry', wednesday: 'Biology', thursday: 'History', friday: 'Physics' },
  ];

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <DashboardLayout title="Timetable">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Class Timetable</h1>
            <p className="text-gray-600">Your weekly class schedule</p>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            <span className="text-sm text-gray-600">Current Week</span>
          </div>
        </div>

        {/* Current Day Highlight */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              Today's Classes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-4">
              <div className="text-lg font-medium text-blue-600">Monday</div>
              <div className="text-sm text-gray-600">5 classes scheduled</div>
            </div>
          </CardContent>
        </Card>

        {/* Timetable */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Time</th>
                    {dayNames.map((day) => (
                      <th key={day} className="text-center p-3 font-medium">{day}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {mockTimetable.map((slot, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-600">{slot.time}</td>
                      {days.map((day) => (
                        <td key={day} className="p-3 text-center">
                          <span className={`px-2 py-1 rounded text-sm ${
                            slot[day as keyof typeof slot] === 'Break' ? 'bg-yellow-100 text-yellow-800' :
                            slot[day as keyof typeof slot] === 'Lunch' ? 'bg-orange-100 text-orange-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {slot[day as keyof typeof slot]}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default TimetablePage;
