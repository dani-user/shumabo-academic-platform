
import React from 'react';
import TeacherDashboardLayout from './components/TeacherDashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, FileText, Calendar, GraduationCap, PlusCircle, UserCheck } from 'lucide-react';

const TeacherDashboard = () => {
  const mockData = {
    teacher: {
      name: 'Dr. Sarah Wilson',
      id: 'LSST1701000',
      subjects: ['Mathematics', 'Physics']
    },
    classes: [
      { grade: 11, section: 'A', subject: 'Mathematics', students: 32 },
      { grade: 11, section: 'B', subject: 'Mathematics', students: 30 },
      { grade: 12, section: 'A', subject: 'Physics', students: 28 }
    ],
    pendingTasks: [
      { id: 1, task: 'Grade midterm exams for 11A Math', due: '2025-01-20' },
      { id: 2, task: 'Submit lesson plans for next week', due: '2025-01-18' }
    ]
  };

  return (
    <TeacherDashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-2">Welcome, {mockData.teacher.name}</h1>
          <p className="text-green-100">Teacher Portal - Manage your classes and students</p>
          <p className="text-green-100">Teacher ID: {mockData.teacher.id}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Classes</CardTitle>
              <BookOpen className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{mockData.classes.length}</div>
              <p className="text-xs text-gray-600">Active assignments</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {mockData.classes.reduce((sum, cls) => sum + cls.students, 0)}
              </div>
              <p className="text-xs text-gray-600">Across all classes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
              <FileText className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-500">{mockData.pendingTasks.length}</div>
              <p className="text-xs text-gray-600">Need attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Subjects</CardTitle>
              <GraduationCap className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{mockData.teacher.subjects.length}</div>
              <p className="text-xs text-gray-600">{mockData.teacher.subjects.join(', ')}</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button className="h-20 flex flex-col items-center justify-center bg-green-600 hover:bg-green-700">
            <PlusCircle className="h-6 w-6 mb-2" />
            <span>Add Grades</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center bg-green-600 hover:bg-green-700">
            <UserCheck className="h-6 w-6 mb-2" />
            <span>Take Attendance</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center bg-green-600 hover:bg-green-700">
            <FileText className="h-6 w-6 mb-2" />
            <span>Lesson Plans</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center bg-green-600 hover:bg-green-700">
            <Users className="h-6 w-6 mb-2" />
            <span>View Students</span>
          </Button>
        </div>

        {/* My Classes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-green-600" />
              My Classes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockData.classes.map((cls, index) => (
                <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{cls.subject} - Grade {cls.grade}{cls.section}</h4>
                    <p className="text-sm text-gray-600">{cls.students} students</p>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-orange-500" />
              Pending Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockData.pendingTasks.map((task) => (
                <div key={task.id} className="flex justify-between items-center p-3 border rounded-lg border-orange-200 bg-orange-50">
                  <div>
                    <h4 className="font-medium">{task.task}</h4>
                    <p className="text-sm text-gray-600">Due: {task.due}</p>
                  </div>
                  <Button variant="outline" size="sm">Complete</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </TeacherDashboardLayout>
  );
};

export default TeacherDashboard;
