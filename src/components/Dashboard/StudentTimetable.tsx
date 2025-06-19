
import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MapPin } from 'lucide-react';

interface TimetableEntry {
  id: string;
  day_of_week: number;
  start_time: string;
  end_time: string;
  room: string;
  course_name: string;
  course_code: string;
  teacher_name: string;
}

const StudentTimetable = () => {
  const [timetable, setTimetable] = useState<TimetableEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  useEffect(() => {
    fetchTimetable();
  }, [user]);

  const fetchTimetable = async () => {
    if (!user) return;

    try {
      // Since timetable table might not exist in current schema, we'll use mock data
      console.log('Fetching timetable data...');
      
      // Set mock timetable data for development
      setTimetable([
        {
          id: '1',
          day_of_week: 1, // Monday
          start_time: '08:00',
          end_time: '09:30',
          room: 'Room 101',
          course_name: 'Mathematics',
          course_code: 'MATH101',
          teacher_name: 'Mr. Johnson'
        },
        {
          id: '2',
          day_of_week: 1, // Monday
          start_time: '10:00',
          end_time: '11:30',
          room: 'Room 203',
          course_name: 'English Literature',
          course_code: 'ENG101',
          teacher_name: 'Ms. Smith'
        },
        {
          id: '3',
          day_of_week: 2, // Tuesday
          start_time: '08:00',
          end_time: '09:30',
          room: 'Lab 1',
          course_name: 'General Science',
          course_code: 'SCI101',
          teacher_name: 'Dr. Brown'
        },
        {
          id: '4',
          day_of_week: 2, // Tuesday
          start_time: '10:00',
          end_time: '11:30',
          room: 'Room 105',
          course_name: 'History',
          course_code: 'HIST101',
          teacher_name: 'Mrs. Davis'
        },
        {
          id: '5',
          day_of_week: 3, // Wednesday
          start_time: '08:00',
          end_time: '09:30',
          room: 'Room 101',
          course_name: 'Mathematics',
          course_code: 'MATH101',
          teacher_name: 'Mr. Johnson'
        },
        {
          id: '6',
          day_of_week: 4, // Thursday
          start_time: '08:00',
          end_time: '09:30',
          room: 'Art Room',
          course_name: 'Art & Design',
          course_code: 'ART101',
          teacher_name: 'Ms. Wilson'
        },
        {
          id: '7',
          day_of_week: 5, // Friday
          start_time: '08:00',
          end_time: '09:30',
          room: 'Gym',
          course_name: 'Physical Education',
          course_code: 'PE101',
          teacher_name: 'Coach Miller'
        }
      ]);
    } catch (error) {
      console.error('Error fetching timetable:', error);
      setTimetable([]);
    } finally {
      setLoading(false);
    }
  };

  const groupedTimetable = timetable.reduce((acc, entry) => {
    const day = daysOfWeek[entry.day_of_week - 1];
    if (!acc[day]) acc[day] = [];
    acc[day].push(entry);
    return acc;
  }, {} as Record<string, TimetableEntry[]>);

  if (loading) {
    return <div className="animate-pulse">Loading timetable...</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Weekly Timetable</CardTitle>
        </CardHeader>
        <CardContent>
          {Object.keys(groupedTimetable).length === 0 ? (
            <p className="text-gray-500 text-center py-8">No timetable available yet.</p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {daysOfWeek.map((day) => (
                <div key={day} className="space-y-3">
                  <h3 className="font-semibold text-lg text-gray-900">{day}</h3>
                  {groupedTimetable[day] ? (
                    <div className="space-y-2">
                      {groupedTimetable[day].map((entry) => (
                        <div key={entry.id} className="p-3 border rounded-lg bg-gray-50">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">
                              {entry.course_name}
                            </h4>
                            <span className="text-sm text-gray-600">
                              {entry.course_code}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {entry.start_time} - {entry.end_time}
                            </div>
                            {entry.room && (
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {entry.room}
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            Teacher: {entry.teacher_name}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400 text-sm">No classes scheduled</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentTimetable;
