
import React from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { BookOpen, TrendingUp } from 'lucide-react';

const GradesPage = () => {
  const { profile } = useAuth();

  const mockGrades = [
    { subject: 'Mathematics', quiz: 85, midterm: 88, assignment: 92, final: 87, total: 88, grade: 'B+' },
    { subject: 'Physics', quiz: 78, midterm: 82, assignment: 85, final: 80, total: 81, grade: 'B' },
    { subject: 'Chemistry', quiz: 92, midterm: 89, assignment: 94, final: 91, total: 91, grade: 'A-' },
    { subject: 'Biology', quiz: 86, midterm: 84, assignment: 88, final: 85, total: 86, grade: 'B+' },
  ];

  const isStudent = profile?.role === 'student';
  const title = isStudent ? 'My Grades' : 'Grade Management';

  return (
    <DashboardLayout title={title}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            <p className="text-gray-600">
              {isStudent ? 'View your academic performance' : 'Manage student grades'}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            <span className="text-sm text-gray-600">Current Semester</span>
          </div>
        </div>

        {/* GPA Summary for Students */}
        {isStudent && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current GPA</CardTitle>
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">3.65</div>
                <p className="text-xs text-gray-600">This semester</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cumulative GPA</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">3.58</div>
                <p className="text-xs text-gray-600">Overall</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Class Rank</CardTitle>
                <TrendingUp className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">12</div>
                <p className="text-xs text-gray-600">Out of 45</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Grades Table */}
        <Card>
          <CardHeader>
            <CardTitle>Grade Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Subject</th>
                    <th className="text-center p-3 font-medium">Quiz (20%)</th>
                    <th className="text-center p-3 font-medium">Midterm (25%)</th>
                    <th className="text-center p-3 font-medium">Assignment (15%)</th>
                    <th className="text-center p-3 font-medium">Final (40%)</th>
                    <th className="text-center p-3 font-medium">Total</th>
                    <th className="text-center p-3 font-medium">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {mockGrades.map((grade, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{grade.subject}</td>
                      <td className="p-3 text-center">{grade.quiz}</td>
                      <td className="p-3 text-center">{grade.midterm}</td>
                      <td className="p-3 text-center">{grade.assignment}</td>
                      <td className="p-3 text-center">{grade.final}</td>
                      <td className="p-3 text-center font-medium">{grade.total}</td>
                      <td className="p-3 text-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          grade.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                          grade.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {grade.grade}
                        </span>
                      </td>
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

export default GradesPage;
