
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
  class: {
    course: {
      course_name: string;
      course_code: string;
    };
    teacher: {
      profile: {
        full_name: string;
      };
    };
  };
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
      const { data: studentData } = await supabase
        .from('students')
        .select('grade, section')
        .eq('profile_id', user.id)
        .single();

      if (studentData) {
        const { data, error } = await supabase
          .from('timetable')
          .select(`
            *,
            classes:class_id (
              grade,
              section,
              courses:course_id (
                course_name,
                course_code
              ),
              teachers:teacher_id (
                profiles:profile_id (
                  full_name
                )
              )
            )
          `)
          .eq('classes.grade', studentData.grade)
          .eq('classes.section', studentData.section)
          .order('day_of_week')
          .order('start_time');

        if (error) throw error;
        setTimetable(data || []);
      }
    } catch (error) {
      console.error('Error fetching timetable:', error);
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
                              {entry.class?.course?.course_name}
                            </h4>
                            <span className="text-sm text-gray-600">
                              {entry.class?.course?.course_code}
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
                            Teacher: {entry.class?.teacher?.profile?.full_name}
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
