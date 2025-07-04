
import React from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { BookOpen, TrendingUp, Users, Edit } from 'lucide-react';

const StaffGradesPage = () => {
  const { profile } = useAuth();

  const mockStudentGrades = [
    { id: 1, name: 'John Doe', studentId: 'LSSS001', subject: 'Mathematics', quiz: 85, midterm: 88, assignment: 92, final: 87, total: 88, grade: 'B+' },
    { id: 2, name: 'Jane Smith', studentId: 'LSSS002', subject: 'Mathematics', quiz: 78, midterm: 82, assignment: 85, final: 80, total: 81, grade: 'B' },
    { id: 3, name: 'Mike Johnson', studentId: 'LSSS003', subject: 'Mathematics', quiz: 92, midterm: 89, assignment: 94, final: 91, total: 91, grade: 'A-' },
  ];

  const isTeacher = profile?.role === 'teacher';
  const title = isTeacher ? 'Grade Management' : 'Student Grades Overview';

  return (
    <DashboardLayout title={title}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            <p className="text-gray-600">
              {isTeacher ? 'Manage and input student grades' : 'Monitor academic performance'}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            <span className="text-sm text-gray-600">Current Semester</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">45</div>
              <p className="text-xs text-gray-600">Active students</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Grade</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">B+</div>
              <p className="text-xs text-gray-600">Class average</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Grades</CardTitle>
              <Edit className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">12</div>
              <p className="text-xs text-gray-600">Need input</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Subjects</CardTitle>
              <BookOpen className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">6</div>
              <p className="text-xs text-gray-600">Teaching</p>
            </CardContent>
          </Card>
        </div>

        {/* Student Grades Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Student Grades</CardTitle>
              {isTeacher && (
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Add New Grades
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Student</th>
                    <th className="text-left p-3 font-medium">Student ID</th>
                    <th className="text-center p-3 font-medium">Quiz (20%)</th>
                    <th className="text-center p-3 font-medium">Midterm (25%)</th>
                    <th className="text-center p-3 font-medium">Assignment (15%)</th>
                    <th className="text-center p-3 font-medium">Final (40%)</th>
                    <th className="text-center p-3 font-medium">Total</th>
                    <th className="text-center p-3 font-medium">Grade</th>
                    {isTeacher && <th className="text-center p-3 font-medium">Actions</th>}
                  </tr>
                </thead>
                <tbody>
                  {mockStudentGrades.map((student) => (
                    <tr key={student.id} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{student.name}</td>
                      <td className="p-3 text-gray-600">{student.studentId}</td>
                      <td className="p-3 text-center">{student.quiz}</td>
                      <td className="p-3 text-center">{student.midterm}</td>
                      <td className="p-3 text-center">{student.assignment}</td>
                      <td className="p-3 text-center">{student.final}</td>
                      <td className="p-3 text-center font-medium">{student.total}</td>
                      <td className="p-3 text-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          student.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                          student.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {student.grade}
                        </span>
                      </td>
                      {isTeacher && (
                        <td className="p-3 text-center">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </td>
                      )}
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

export default StaffGradesPage;
