
import React, { useState } from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, User, Download, Bell } from 'lucide-react';

const TimetablePage = () => {
  const [selectedWeek, setSelectedWeek] = useState('current');

  const mockTimetable = [
    { 
      time: '8:00 - 8:45', 
      monday: { subject: 'Mathematics', teacher: 'Mr. Johnson', room: 'Room 201' },
      tuesday: { subject: 'Physics', teacher: 'Ms. Davis', room: 'Lab 2' },
      wednesday: { subject: 'Chemistry', teacher: 'Dr. Smith', room: 'Lab 1' },
      thursday: { subject: 'Biology', teacher: 'Mrs. Wilson', room: 'Room 105' },
      friday: { subject: 'English', teacher: 'Mr. Brown', room: 'Room 301' }
    },
    { 
      time: '8:45 - 9:30', 
      monday: { subject: 'Physics', teacher: 'Ms. Davis', room: 'Lab 2' },
      tuesday: { subject: 'Mathematics', teacher: 'Mr. Johnson', room: 'Room 201' },
      wednesday: { subject: 'English', teacher: 'Mr. Brown', room: 'Room 301' },
      thursday: { subject: 'Chemistry', teacher: 'Dr. Smith', room: 'Lab 1' },
      friday: { subject: 'Biology', teacher: 'Mrs. Wilson', room: 'Room 105' }
    },
    { 
      time: '9:30 - 10:15', 
      monday: { subject: 'Chemistry', teacher: 'Dr. Smith', room: 'Lab 1' },
      tuesday: { subject: 'English', teacher: 'Mr. Brown', room: 'Room 301' },
      wednesday: { subject: 'Mathematics', teacher: 'Mr. Johnson', room: 'Room 201' },
      thursday: { subject: 'Physics', teacher: 'Ms. Davis', room: 'Lab 2' },
      friday: { subject: 'History', teacher: 'Ms. Taylor', room: 'Room 202' }
    },
    { 
      time: '10:15 - 10:30', 
      monday: { subject: 'Break', teacher: '', room: '' },
      tuesday: { subject: 'Break', teacher: '', room: '' },
      wednesday: { subject: 'Break', teacher: '', room: '' },
      thursday: { subject: 'Break', teacher: '', room: '' },
      friday: { subject: 'Break', teacher: '', room: '' }
    },
    { 
      time: '10:30 - 11:15', 
      monday: { subject: 'Biology', teacher: 'Mrs. Wilson', room: 'Room 105' },
      tuesday: { subject: 'History', teacher: 'Ms. Taylor', room: 'Room 202' },
      wednesday: { subject: 'Physics', teacher: 'Ms. Davis', room: 'Lab 2' },
      thursday: { subject: 'Mathematics', teacher: 'Mr. Johnson', room: 'Room 201' },
      friday: { subject: 'Chemistry', teacher: 'Dr. Smith', room: 'Lab 1' }
    },
    { 
      time: '11:15 - 12:00', 
      monday: { subject: 'English', teacher: 'Mr. Brown', room: 'Room 301' },
      tuesday: { subject: 'Biology', teacher: 'Mrs. Wilson', room: 'Room 105' },
      wednesday: { subject: 'History', teacher: 'Ms. Taylor', room: 'Room 202' },
      thursday: { subject: 'English', teacher: 'Mr. Brown', room: 'Room 301' },
      friday: { subject: 'Mathematics', teacher: 'Mr. Johnson', room: 'Room 201' }
    },
    { 
      time: '12:00 - 1:00', 
      monday: { subject: 'Lunch Break', teacher: '', room: 'Cafeteria' },
      tuesday: { subject: 'Lunch Break', teacher: '', room: 'Cafeteria' },
      wednesday: { subject: 'Lunch Break', teacher: '', room: 'Cafeteria' },
      thursday: { subject: 'Lunch Break', teacher: '', room: 'Cafeteria' },
      friday: { subject: 'Lunch Break', teacher: '', room: 'Cafeteria' }
    },
    { 
      time: '1:00 - 1:45', 
      monday: { subject: 'History', teacher: 'Ms. Taylor', room: 'Room 202' },
      tuesday: { subject: 'Chemistry', teacher: 'Dr. Smith', room: 'Lab 1' },
      wednesday: { subject: 'Biology', teacher: 'Mrs. Wilson', room: 'Room 105' },
      thursday: { subject: 'History', teacher: 'Ms. Taylor', room: 'Room 202' },
      friday: { subject: 'Physics', teacher: 'Ms. Davis', room: 'Lab 2' }
    }
  ];

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const currentDay = new Date().getDay();
  const todayIndex = currentDay === 0 ? -1 : currentDay - 1; // Convert Sunday=0 to -1, Monday=1 to 0, etc.

  const handleDownloadTimetable = () => {
    alert('Timetable download started...');
  };

  const handleSetReminder = (subject: string, time: string, day: string) => {
    alert(`Reminder set for ${subject} on ${day} at ${time}`);
  };

  const getTodayClasses = () => {
    if (todayIndex < 0 || todayIndex >= days.length) return [];
    const today = days[todayIndex];
    return mockTimetable.filter(slot => {
      const dayData = slot[today as keyof typeof slot] as any;
      return dayData && dayData.subject && dayData.subject !== 'Break' && dayData.subject !== 'Lunch Break';
    }).map(slot => ({
      time: slot.time,
      ...slot[today as keyof typeof slot] as any
    }));
  };

  const todayClasses = getTodayClasses();

  return (
    <DashboardLayout title="My Timetable">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Class Timetable</h1>
            <p className="text-gray-600">Your weekly class schedule and upcoming classes</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={handleDownloadTimetable}>
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Calendar className="h-4 w-4 mr-2" />
              Current Week
            </Button>
          </div>
        </div>

        {/* Today's Classes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              Today's Classes - {dayNames[todayIndex] || 'Weekend'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {todayClasses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {todayClasses.map((classItem, index) => (
                  <div key={index} className="p-4 border rounded-lg bg-blue-50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-blue-900">{classItem.subject}</h4>
                      <span className="text-sm font-medium text-blue-600">{classItem.time}</span>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3" />
                        <span>{classItem.teacher}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3" />
                        <span>{classItem.room}</span>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-2 w-full"
                      onClick={() => handleSetReminder(classItem.subject, classItem.time, dayNames[todayIndex] || 'Today')}
                    >
                      <Bell className="h-3 w-3 mr-1" />
                      Set Reminder
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No classes scheduled for today</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Weekly Timetable */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium w-24">Time</th>
                    {dayNames.map((day, index) => (
                      <th key={day} className={`text-center p-3 font-medium ${
                        index === todayIndex ? 'bg-blue-50 text-blue-900' : ''
                      }`}>
                        {day}
                        {index === todayIndex && (
                          <span className="block text-xs text-blue-600 font-normal">Today</span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {mockTimetable.map((slot, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-600 text-sm">{slot.time}</td>
                      {days.map((day, dayIndex) => {
                        const classData = slot[day as keyof typeof slot] as any;
                        const isToday = dayIndex === todayIndex;
                        
                        return (
                          <td key={day} className={`p-2 text-center ${isToday ? 'bg-blue-50' : ''}`}>
                            <div className={`p-2 rounded text-sm ${
                              classData.subject === 'Break' ? 'bg-yellow-100 text-yellow-800' :
                              classData.subject === 'Lunch Break' ? 'bg-orange-100 text-orange-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              <div className="font-medium">{classData.subject}</div>
                              {classData.teacher && (
                                <div className="text-xs opacity-75">{classData.teacher}</div>
                              )}
                              {classData.room && (
                                <div className="text-xs opacity-75">{classData.room}</div>
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">35</div>
              <p className="text-sm text-gray-600">Classes per week</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">7</div>
              <p className="text-sm text-gray-600">Subjects</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">5</div>
              <p className="text-sm text-gray-600">Teachers</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">8:00</div>
              <p className="text-sm text-gray-600">School starts</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TimetablePage;
