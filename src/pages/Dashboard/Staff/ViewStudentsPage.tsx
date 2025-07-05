
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Users, Search, Filter, Eye, Mail, Phone } from 'lucide-react';

const ViewStudentsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');

  const classes = ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];
  const sections = ['A', 'B', 'C', 'D'];

  const mockStudents = [
    {
      id: 1,
      name: 'John Doe',
      studentId: 'LSSS1701001',
      grade: 'Grade 9',
      section: 'A',
      email: 'john.doe@student.school.edu',
      phone: '+251911234567',
      guardianName: 'Jane Doe',
      guardianPhone: '+251911234577',
      attendance: 95,
      gpa: 3.8,
      status: 'active'
    },
    {
      id: 2,
      name: 'Jane Smith',
      studentId: 'LSSS1701002',
      grade: 'Grade 9',
      section: 'A',
      email: 'jane.smith@student.school.edu',
      phone: '+251911234568',
      guardianName: 'John Smith',
      guardianPhone: '+251911234578',
      attendance: 92,
      gpa: 3.6,
      status: 'active'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      studentId: 'LSSS1701003',
      grade: 'Grade 9',
      section: 'B',
      email: 'mike.johnson@student.school.edu',
      phone: '+251911234569',
      guardianName: 'Sarah Johnson',
      guardianPhone: '+251911234579',
      attendance: 88,
      gpa: 3.4,
      status: 'active'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      studentId: 'LSSS1701004',
      grade: 'Grade 10',
      section: 'A',
      email: 'sarah.wilson@student.school.edu',
      phone: '+251911234570',
      guardianName: 'Tom Wilson',
      guardianPhone: '+251911234580',
      attendance: 97,
      gpa: 3.9,
      status: 'active'
    }
  ];

  const filteredStudents = mockStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = !selectedClass || student.grade === selectedClass;
    const matchesSection = !selectedSection || student.section === selectedSection;
    
    return matchesSearch && matchesClass && matchesSection;
  });

  const getGPAColor = (gpa) => {
    if (gpa >= 3.5) return 'text-green-600';
    if (gpa >= 3.0) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getAttendanceColor = (attendance) => {
    if (attendance >= 95) return 'text-green-600';
    if (attendance >= 85) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">View Students</h1>
          <p className="text-gray-600">Manage and view student information</p>
        </div>
        <div className="flex items-center space-x-2">
          <Users className="h-6 w-6 text-blue-600" />
          <Badge variant="secondary">Teacher Portal</Badge>
        </div>
      </div>

      {/* Search and Filter Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>Search & Filter</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger>
                <SelectValue placeholder="Select Grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Grades</SelectItem>
                {classes.map(cls => (
                  <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedSection} onValueChange={setSelectedSection}>
              <SelectTrigger>
                <SelectValue placeholder="Select Section" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Sections</SelectItem>
                {sections.map(section => (
                  <SelectItem key={section} value={section}>Section {section}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={() => {
              setSearchTerm('');
              setSelectedClass('');
              setSelectedSection('');
            }}>
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Students Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{filteredStudents.length}</div>
              <div className="text-sm text-gray-500">Total Students</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {filteredStudents.filter(s => s.attendance >= 95).length}
              </div>
              <div className="text-sm text-gray-500">Excellent Attendance</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {filteredStudents.filter(s => s.gpa >= 3.5).length}
              </div>
              <div className="text-sm text-gray-500">High Achievers</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {filteredStudents.filter(s => s.status === 'active').length}
              </div>
              <div className="text-sm text-gray-500">Active Students</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Students List */}
      <Card>
        <CardHeader>
          <CardTitle>Students ({filteredStudents.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredStudents.map(student => (
              <div key={student.id} className="border rounded-lg p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{student.name}</h3>
                      <p className="text-sm text-gray-500">{student.studentId}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <Badge variant="outline">{student.grade} - {student.section}</Badge>
                        <Badge variant={student.status === 'active' ? 'default' : 'secondary'}>
                          {student.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className={`font-semibold ${getAttendanceColor(student.attendance)}`}>
                        {student.attendance}%
                      </div>
                      <div className="text-xs text-gray-500">Attendance</div>
                    </div>
                    <div className="text-center">
                      <div className={`font-semibold ${getGPAColor(student.gpa)}`}>
                        {student.gpa}
                      </div>
                      <div className="text-xs text-gray-500">GPA</div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
                  </div>
                </div>
                
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span>{student.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span>{student.phone}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-gray-600">
                      <span className="font-medium">Guardian:</span> {student.guardianName}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span>{student.guardianPhone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredStudents.length === 0 && (
            <div className="text-center py-8">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No students found matching your criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewStudentsPage;
