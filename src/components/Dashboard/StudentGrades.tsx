
import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, TrendingUp, TrendingDown } from 'lucide-react';

interface Grade {
  id: string;
  course_code: string;
  course_name: string;
  assignment?: number;
  midterm?: number;
  final_exam?: number;
  total_mark?: number;
  letter_grade?: string;
  semester?: number;
  created_at: string;
}

const StudentGrades = () => {
  const [grades, setGrades] = useState<Grade[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, profile } = useAuth();

  useEffect(() => {
    fetchGrades();
  }, [user]);

  const fetchGrades = async () => {
    if (!user) return;

    try {
      // Try to fetch from grades table
      const { data, error } = await supabase
        .from('grades')
        .select(`
          *,
          courses (
            course_name,
            course_code
          )
        `)
        .limit(10);

      if (error) {
        console.error('Error fetching grades:', error);
        // Set mock data for development
        setMockGrades();
      } else {
        const formattedGrades = (data || []).map(grade => ({
          id: grade.id,
          course_code: grade.course_code || 'N/A',
          course_name: grade.course_code || 'Sample Course',
          assignment: grade.assignment,
          midterm: grade.midterm,
          final_exam: grade.final_exam,
          total_mark: grade.total_mark,
          letter_grade: grade.letter_grade,
          semester: grade.semester,
          created_at: grade.created_at
        }));
        setGrades(formattedGrades);
      }
    } catch (error) {
      console.error('Error fetching grades:', error);
      setMockGrades();
    } finally {
      setLoading(false);
    }
  };

  const setMockGrades = () => {
    setGrades([
      {
        id: '1',
        course_code: 'MATH101',
        course_name: 'Mathematics',
        assignment: 85,
        midterm: 90,
        final_exam: 88,
        total_mark: 87.5,
        letter_grade: 'A',
        semester: 1,
        created_at: new Date().toISOString()
      },
      {
        id: '2',
        course_code: 'ENG101',
        course_name: 'English Literature',
        assignment: 78,
        midterm: 82,
        final_exam: 85,
        total_mark: 81.5,
        letter_grade: 'B+',
        semester: 1,
        created_at: new Date().toISOString()
      },
      {
        id: '3',
        course_code: 'SCI101',
        course_name: 'General Science',
        assignment: 92,
        midterm: 88,
        final_exam: 90,
        total_mark: 90,
        letter_grade: 'A+',
        semester: 1,
        created_at: new Date().toISOString()
      }
    ]);
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
    const total = grades.reduce((sum, grade) => sum + (grade.total_mark || 0), 0);
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
                  {new Set(grades.map(g => g.course_code)).size}
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
                const percentage = grade.total_mark || 0;
                return (
                  <div key={grade.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">{grade.course_name}</h4>
                      <p className="text-sm text-gray-600">
                        {grade.course_code} • Semester {grade.semester || 1}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(grade.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge className={`${getGradeColor(percentage)} text-white`}>
                        {grade.letter_grade || 'N/A'}
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
