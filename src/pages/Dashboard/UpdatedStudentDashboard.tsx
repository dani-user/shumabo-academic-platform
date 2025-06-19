
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import WelcomeCard from '@/components/Dashboard/WelcomeCard';
import StatsCard from '@/components/Dashboard/StatsCard';
import AnnouncementsList from '@/components/Dashboard/AnnouncementsList';
import { supabase } from '@/integrations/supabase/client';
import { BookOpen, Calendar, UserCheck, Award, Clock, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UpdatedStudentDashboard = () => {
  const { profile } = useAuth();
  const [studentData, setStudentData] = useState<any>(null);
  const [grades, setGrades] = useState<any[]>([]);
  const [attendance, setAttendance] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudentData();
  }, [profile]);

  const fetchStudentData = async () => {
    if (!profile) return;

    try {
      // Fetch student record
      const { data: student } = await supabase
        .from('students')
        .select('*')
        .eq('user_id', profile.id)
        .single();

      setStudentData(student);

      // Fetch recent grades
      if (student) {
        const { data: gradesData } = await supabase
          .from('grades')
          .select(`
            *,
            courses (course_name, course_code)
          `)
          .eq('student_id', student.id)
          .order('created_at', { ascending: false })
          .limit(5);

        setGrades(gradesData || []);

        // Fetch recent attendance
        const { data: attendanceData } = await supabase
          .from('attendance')
          .select('*')
          .eq('student_id', student.id)
          .order('date', { ascending: false })
          .limit(10);

        setAttendance(attendanceData || []);
      }
    } catch (error) {
      console.error('Error fetching student data:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateGPA = () => {
    if (grades.length === 0) return '0.00';
    
    const totalPoints = grades.reduce((sum, grade) => {
      const points = grade.letter_grade === 'A' ? 4 : 
                   grade.letter_grade === 'B' ? 3 :
                   grade.letter_grade === 'C' ? 2 :
                   grade.letter_grade === 'D' ? 1 : 0;
      return sum + points;
    }, 0);
    
    return (totalPoints / grades.length).toFixed(2);
  };

  const calculateAttendanceRate = () => {
    if (attendance.length === 0) return '0%';
    
    const presentDays = attendance.filter(record => record.status === 'present').length;
    return `${Math.round((presentDays / attendance.length) * 100)}%`;
  };

  const getUpcomingAssignments = () => {
    // Mock data for upcoming assignments
    return [
      { id: 1, title: 'Math Assignment 3', course: 'Mathematics', dueDate: '2024-12-25', priority: 'high' },
      { id: 2, title: 'English Essay', course: 'English', dueDate: '2024-12-27', priority: 'medium' },
      { id: 3, title: 'Physics Lab Report', course: 'Physics', dueDate: '2024-12-30', priority: 'low' },
    ];
  };

  if (loading) {
    return (
      <DashboardLayout title="Student Dashboard">
        <div className="animate-pulse space-y-4">
          <div className="h-32 bg-gray-200 rounded-lg"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Student Dashboard">
      <div className="space-y-6">
        <WelcomeCard />

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Current GPA"
            value={calculateGPA()}
            description="Semester average"
            icon={Award}
            color="green"
            trend={{ value: 5.2, isPositive: true }}
          />
          <StatsCard
            title="Attendance Rate"
            value={calculateAttendanceRate()}
            description="This semester"
            icon={UserCheck}
            color="blue"
            trend={{ value: 2.1, isPositive: true }}
          />
          <StatsCard
            title="Courses Enrolled"
            value={grades.length || 8}
            description="Active courses"
            icon={BookOpen}
            color="purple"
          />
          <StatsCard
            title="Assignments Due"
            value={getUpcomingAssignments().length}
            description="This week"
            icon={Clock}
            color="orange"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Grades */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Recent Grades
              </CardTitle>
            </CardHeader>
            <CardContent>
              {grades.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No grades available yet.</p>
              ) : (
                <div className="space-y-3">
                  {grades.slice(0, 5).map((grade) => (
                    <div key={grade.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">
                          {grade.courses?.course_name || grade.course_code}
                        </p>
                        <p className="text-sm text-gray-500">
                          Total: {grade.total_mark}/100
                        </p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        grade.letter_grade === 'A' ? 'bg-green-100 text-green-800' :
                        grade.letter_grade === 'B' ? 'bg-blue-100 text-blue-800' :
                        grade.letter_grade === 'C' ? 'bg-yellow-100 text-yellow-800' :
                        grade.letter_grade === 'D' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {grade.letter_grade}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Upcoming Assignments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Upcoming Assignments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {getUpcomingAssignments().map((assignment) => (
                  <div key={assignment.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-3 ${
                        assignment.priority === 'high' ? 'bg-red-500' :
                        assignment.priority === 'medium' ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`}></div>
                      <div>
                        <p className="font-medium text-gray-900">{assignment.title}</p>
                        <p className="text-sm text-gray-500">{assignment.course}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">
                        {new Date(assignment.dueDate).toLocaleDateString()}
                      </p>
                      <p className="text-xs text-gray-500">Due date</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Announcements */}
        <AnnouncementsList />
      </div>
    </DashboardLayout>
  );
};

export default UpdatedStudentDashboard;
