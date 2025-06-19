
import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, TrendingUp, TrendingDown } from 'lucide-react';

interface Grade {
  id: string;
  grade_type: string;
  score: number;
  max_score: number;
  date_recorded: string;
  semester: number;
  course: {
    course_name: string;
    course_code: string;
  };
}

const StudentGrades = () => {
  const [grades, setGrades] = useState<Grade[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetchGrades();
  }, [user]);

  const fetchGrades = async () => {
    if (!user) return;

    try {
      const { data: studentData } = await supabase
        .from('students')
        .select('id')
        .eq('profile_id', user.id)
        .single();

      if (studentData) {
        const { data, error } = await supabase
          .from('grades')
          .select(`
            *,
            courses:course_id (
              course_name,
              course_code
            )
          `)
          .eq('student_id', studentData.id)
          .order('date_recorded', { ascending: false });

        if (error) throw error;
        setGrades(data || []);
      }
    } catch (error) {
      console.error('Error fetching grades:', error);
    } finally {
      setLoading(false);
    }
  };

  const getGradeColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 80) return 'bg-blue-500';
    if (percentage >= 70) return 'bg-yellow-500';
    if (percentage >= 60) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const calculateAverage = () => {
    if (grades.length === 0) return 0;
    const total = grades.reduce((sum, grade) => sum + (grade.score / grade.max_score) * 100, 0);
    return Math.round(total / grades.length);
  };

  if (loading) {
    return <div className="animate-pulse">Loading grades...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Subjects</p>
                <p className="text-2xl font-bold text-gray-900">
                  {new Set(grades.map(g => g.course?.course_code)).size}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Overall Average</p>
                <p className="text-2xl font-bold text-gray-900">{calculateAverage()}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <TrendingDown className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Assessments</p>
                <p className="text-2xl font-bold text-gray-900">{grades.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Grades</CardTitle>
        </CardHeader>
        <CardContent>
          {grades.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No grades available yet.</p>
          ) : (
            <div className="space-y-4">
              {grades.map((grade) => {
                const percentage = Math.round((grade.score / grade.max_score) * 100);
                return (
                  <div key={grade.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">{grade.course?.course_name}</h4>
                      <p className="text-sm text-gray-600">
                        {grade.grade_type} • Semester {grade.semester}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(grade.date_recorded).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge className={`${getGradeColor(percentage)} text-white`}>
                        {grade.score}/{grade.max_score}
                      </Badge>
                      <p className="text-sm text-gray-600 mt-1">{percentage}%</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentGrades;
