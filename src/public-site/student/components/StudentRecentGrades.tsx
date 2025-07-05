
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen } from 'lucide-react';

export const StudentRecentGrades = () => {
  const recentGrades = [
    { subject: 'Mathematics', grade: 'A', score: 92, date: '2024-03-08' },
    { subject: 'English', grade: 'B+', score: 87, date: '2024-03-07' },
    { subject: 'Physics', grade: 'A-', score: 89, date: '2024-03-06' },
    { subject: 'Chemistry', grade: 'B', score: 84, date: '2024-03-05' },
  ];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'default';
    if (grade.startsWith('B')) return 'secondary';
    return 'destructive';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <BookOpen className="h-5 w-5 mr-2" />
          Recent Grades
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentGrades.map((grade, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{grade.subject}</h4>
                <p className="text-sm text-gray-500">{grade.date}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-700">{grade.score}%</span>
                <Badge variant={getGradeColor(grade.grade)}>
                  {grade.grade}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
