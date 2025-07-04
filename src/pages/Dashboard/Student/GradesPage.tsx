
import React from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, TrendingUp, Download, Eye } from 'lucide-react';

const GradesPage = () => {
  const mockGrades = [
    { subject: 'Mathematics', quiz: 85, midterm: 88, assignment: 92, final: 87, total: 88, grade: 'B+', teacher: 'Mr. Johnson' },
    { subject: 'Physics', quiz: 78, midterm: 82, assignment: 85, final: 80, total: 81, grade: 'B', teacher: 'Ms. Davis' },
    { subject: 'Chemistry', quiz: 92, midterm: 89, assignment: 94, final: 91, total: 91, grade: 'A-', teacher: 'Dr. Smith' },
    { subject: 'Biology', quiz: 86, midterm: 84, assignment: 88, final: 85, total: 86, grade: 'B+', teacher: 'Mrs. Wilson' },
    { subject: 'English', quiz: 90, midterm: 87, assignment: 95, final: 89, total: 90, grade: 'A-', teacher: 'Mr. Brown' },
  ];

  const recentAssignments = [
    { subject: 'Mathematics', title: 'Calculus Assignment 3', due: '2025-01-20', status: 'submitted', grade: 'A-' },
    { subject: 'Physics', title: 'Lab Report - Mechanics', due: '2025-01-18', status: 'graded', grade: 'B+' },
    { subject: 'Chemistry', title: 'Organic Chemistry Quiz', due: '2025-01-22', status: 'pending', grade: null },
  ];

  const handleDownloadReport = () => {
    // Mock download functionality
    alert('Grade report download started...');
  };

  const handleViewDetailed = (subject: string) => {
    alert(`Viewing detailed grades for ${subject}`);
  };

  return (
    <DashboardLayout title="My Grades">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Academic Performance</h1>
            <p className="text-gray-600">Track your grades and academic progress</p>
          </div>
          <Button onClick={handleDownloadReport} className="bg-blue-600 hover:bg-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
        </div>

        {/* GPA Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Credits Earned</CardTitle>
              <BookOpen className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">28</div>
              <p className="text-xs text-gray-600">This year</p>
            </CardContent>
          </Card>
        </div>

        {/* Grades Table */}
        <Card>
          <CardHeader>
            <CardTitle>Current Semester Grades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Subject</th>
                    <th className="text-center p-3 font-medium">Teacher</th>
                    <th className="text-center p-3 font-medium">Quiz (20%)</th>
                    <th className="text-center p-3 font-medium">Midterm (25%)</th>
                    <th className="text-center p-3 font-medium">Assignment (15%)</th>
                    <th className="text-center p-3 font-medium">Final (40%)</th>
                    <th className="text-center p-3 font-medium">Total</th>
                    <th className="text-center p-3 font-medium">Grade</th>
                    <th className="text-center p-3 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockGrades.map((grade, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{grade.subject}</td>
                      <td className="p-3 text-center text-gray-600">{grade.teacher}</td>
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
                      <td className="p-3 text-center">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewDetailed(grade.subject)}
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Recent Assignments */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Assignments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentAssignments.map((assignment, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{assignment.title}</h4>
                    <p className="text-sm text-gray-600">{assignment.subject} • Due: {assignment.due}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      assignment.status === 'graded' ? 'bg-green-100 text-green-800' :
                      assignment.status === 'submitted' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {assignment.status}
                    </span>
                    {assignment.grade && (
                      <span className="font-medium text-green-600">{assignment.grade}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default GradesPage;
