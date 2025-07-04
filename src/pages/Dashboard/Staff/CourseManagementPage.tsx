
import React, { useState } from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { BookOpen, Plus, Search, Edit, Trash2, Users, Calendar } from 'lucide-react';

const CourseManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [gradeFilter, setGradeFilter] = useState('all');

  const mockCourses = [
    {
      id: 1,
      courseCode: 'MATH101',
      courseName: 'Mathematics',
      grade: 9,
      isCore: true,
      teacher: 'John Smith',
      students: 45,
      schedule: 'Mon, Wed, Fri - 8:00 AM',
      credits: 3,
      description: 'Basic mathematics covering algebra and geometry'
    },
    {
      id: 2,
      courseCode: 'PHYS201',
      courseName: 'Physics',
      grade: 10,
      isCore: true,
      teacher: 'Sarah Davis',
      students: 38,
      schedule: 'Tue, Thu - 10:00 AM',
      credits: 4,
      description: 'Introduction to mechanics and thermodynamics'
    },
    {
      id: 3,
      courseCode: 'CHEM301',
      courseName: 'Chemistry',
      grade: 11,
      isCore: true,
      teacher: 'Dr. Michael Johnson',
      students: 42,
      schedule: 'Mon, Wed, Fri - 2:00 PM',
      credits: 4,
      description: 'Organic and inorganic chemistry fundamentals'
    },
    {
      id: 4,
      courseCode: 'ART101',
      courseName: 'Art & Design',
      grade: 9,
      isCore: false,
      teacher: 'Emma Wilson',
      students: 25,
      schedule: 'Thu - 1:00 PM',
      credits: 2,
      description: 'Creative arts and design principles'
    }
  ];

  const handleAddCourse = () => {
    console.log('Adding new course');
    alert('Opening course creation form...');
  };

  const handleEditCourse = (id: number) => {
    console.log('Editing course:', id);
    alert(`Opening edit form for course ${id}`);
  };

  const handleDeleteCourse = (id: number) => {
    if (confirm('Are you sure you want to delete this course?')) {
      console.log('Deleting course:', id);
      alert(`Course ${id} has been deleted`);
    }
  };

  const handleViewStudents = (id: number) => {
    console.log('Viewing students for course:', id);
    alert(`Opening student list for course ${id}`);
  };

  const filteredCourses = mockCourses.filter(course => {
    const matchesSearch = course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.courseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.teacher.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = gradeFilter === 'all' || course.grade.toString() === gradeFilter;
    return matchesSearch && matchesGrade;
  });

  const totalCourses = mockCourses.length;
  const coreCourses = mockCourses.filter(c => c.isCore).length;
  const electiveCourses = mockCourses.filter(c => !c.isCore).length;
  const totalStudents = mockCourses.reduce((sum, course) => sum + course.students, 0);

  return (
    <DashboardLayout title="Course Management">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Course Management</h1>
            <p className="text-gray-600">Manage academic courses and curriculum</p>
          </div>
          <Button onClick={handleAddCourse} className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add New Course
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{totalCourses}</div>
              <p className="text-sm text-gray-600">Total Courses</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{coreCourses}</div>
              <p className="text-sm text-gray-600">Core Courses</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">{electiveCourses}</div>
              <p className="text-sm text-gray-600">Elective Courses</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{totalStudents}</div>
              <p className="text-sm text-gray-600">Total Enrollments</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search courses, codes, or teachers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-gray-400" />
                <select
                  value={gradeFilter}
                  onChange={(e) => setGradeFilter(e.target.value)}
                  className="border rounded-lg px-3 py-2"
                >
                  <option value="all">All Grades</option>
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                  <option value="11">Grade 11</option>
                  <option value="12">Grade 12</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{course.courseName}</CardTitle>
                    <p className="text-sm text-gray-600 font-mono">{course.courseCode}</p>
                  </div>
                  <div className="flex gap-1">
                    <Badge variant={course.isCore ? "default" : "secondary"}>
                      {course.isCore ? 'Core' : 'Elective'}
                    </Badge>
                    <Badge variant="outline">Grade {course.grade}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">{course.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span><strong>Teacher:</strong> {course.teacher}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span><strong>Students:</strong> {course.students}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span><strong>Schedule:</strong> {course.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-gray-400" />
                      <span><strong>Credits:</strong> {course.credits}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewStudents(course.id)}
                    >
                      <Users className="h-3 w-3 mr-1" />
                      Students
                    </Button>
                    
                    <div className="flex gap-1">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditCourse(course.id)}
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteCourse(course.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CourseManagementPage;
