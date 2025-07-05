
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Users, Search, Plus, Edit, Eye, Mail, Phone, Award, Calendar } from 'lucide-react';

const FacultyManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const departments = ['Mathematics', 'English', 'Science', 'History', 'Physical Education', 'Arts'];
  const roles = ['teacher', 'registrar', 'admin', 'director'];

  const mockFaculty = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      employeeId: 'EMP001',
      role: 'teacher',
      department: 'Mathematics',
      email: 'sarah.johnson@school.edu',
      phone: '+251911234567',
      hireDate: '2020-08-15',
      qualifications: ['PhD Mathematics', 'MEd Curriculum'],
      experience: '8 years',
      status: 'active',
      performance: 'excellent',
      courses: ['Algebra II', 'Calculus', 'Statistics'],
      schedule: '8:00 AM - 4:00 PM'
    },
    {
      id: 2,
      name: 'Mr. Michael Brown',
      employeeId: 'EMP002',
      role: 'teacher',
      department: 'English',
      email: 'michael.brown@school.edu',
      phone: '+251911234568',
      hireDate: '2019-01-10',
      qualifications: ['MA English Literature', 'BA English'],
      experience: '12 years',
      status: 'active',
      performance: 'good',
      courses: ['English Literature', 'Creative Writing', 'Grammar'],
      schedule: '9:00 AM - 5:00 PM'
    },
    {
      id: 3,
      name: 'Ms. Emily Davis',
      employeeId: 'EMP003',
      role: 'registrar',
      department: 'Administration',
      email: 'emily.davis@school.edu',
      phone: '+251911234569',
      hireDate: '2021-03-01',
      qualifications: ['MBA Administration', 'BSc Computer Science'],
      experience: '6 years',
      status: 'active',
      performance: 'excellent',
      courses: [],
      schedule: '8:30 AM - 4:30 PM'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      employeeId: 'EMP004',
      role: 'admin',
      department: 'Administration',
      email: 'james.wilson@school.edu',
      phone: '+251911234570',
      hireDate: '2018-09-20',
      qualifications: ['EdD Educational Leadership', 'MEd Administration'],
      experience: '15 years',
      status: 'active',
      performance: 'excellent',
      courses: [],
      schedule: '8:00 AM - 6:00 PM'
    }
  ];

  const filteredFaculty = mockFaculty.filter(faculty => {
    const matchesSearch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faculty.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = !selectedDepartment || faculty.department === selectedDepartment;
    const matchesRole = !selectedRole || faculty.role === selectedRole;
    
    return matchesSearch && matchesDepartment && matchesRole;
  });

  const getPerformanceColor = (performance) => {
    switch (performance) {
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'good': return 'bg-blue-100 text-blue-800';
      case 'satisfactory': return 'bg-yellow-100 text-yellow-800';
      case 'needs-improvement': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'teacher': return 'bg-blue-100 text-blue-800';
      case 'registrar': return 'bg-purple-100 text-purple-800';
      case 'admin': return 'bg-orange-100 text-orange-800';
      case 'director': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getFacultyStats = () => {
    return {
      total: mockFaculty.length,
      teachers: mockFaculty.filter(f => f.role === 'teacher').length,
      admins: mockFaculty.filter(f => f.role === 'admin' || f.role === 'director').length,
      excellent: mockFaculty.filter(f => f.performance === 'excellent').length
    };
  };

  const stats = getFacultyStats();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Faculty Management</h1>
          <p className="text-gray-600">Manage staff information and performance</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button className="flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Add Faculty</span>
          </Button>
          <div className="flex items-center space-x-2">
            <Users className="h-6 w-6 text-blue-600" />
            <Badge variant="secondary">Director Portal</Badge>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Total Faculty</div>
                <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Teachers</div>
                <div className="text-2xl font-bold text-green-600">{stats.teachers}</div>
              </div>
              <Award className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Administrators</div>
                <div className="text-2xl font-bold text-purple-600">{stats.admins}</div>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Excellent Rating</div>
                <div className="text-2xl font-bold text-orange-600">{stats.excellent}</div>
              </div>
              <Award className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Search & Filter Faculty</CardTitle>
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
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger>
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Departments</SelectItem>
                {departments.map(dept => (
                  <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger>
                <SelectValue placeholder="All Roles" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Roles</SelectItem>
                {roles.map(role => (
                  <SelectItem key={role} value={role}>
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline">
              Export List
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Faculty List */}
      <Card>
        <CardHeader>
          <CardTitle>Faculty Members ({filteredFaculty.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredFaculty.map(faculty => (
              <div key={faculty.id} className="border rounded-lg p-4 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-lg">
                        {faculty.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{faculty.name}</h3>
                      <p className="text-sm text-gray-500">{faculty.employeeId}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={getRoleColor(faculty.role)}>
                          {faculty.role}
                        </Badge>
                        <Badge variant="outline">{faculty.department}</Badge>
                        <Badge className={getPerformanceColor(faculty.performance)}>
                          {faculty.performance}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span>{faculty.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span>{faculty.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>Hired: {faculty.hireDate}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">Experience:</span> {faculty.experience}
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Schedule:</span> {faculty.schedule}
                    </div>
                    {faculty.courses.length > 0 && (
                      <div className="text-sm">
                        <span className="font-medium">Courses:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {faculty.courses.map((course, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t">
                  <div className="text-sm">
                    <span className="font-medium">Qualifications:</span>
                    <div className="mt-1 text-gray-600">
                      {faculty.qualifications.join(', ')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredFaculty.length === 0 && (
            <div className="text-center py-8">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No faculty members found matching your criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Performance Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span>Due this month</span>
                <Badge variant="outline">5</Badge>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Completed</span>
                <Badge variant="default">12</Badge>
              </div>
              <Button className="w-full" variant="outline">
                Schedule Reviews
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Professional Development</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" className="w-full text-sm">
                Training Calendar
              </Button>
              <Button variant="outline" className="w-full text-sm">
                Certification Tracking
              </Button>
              <Button variant="outline" className="w-full text-sm">
                Workshop Registration
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" className="w-full text-sm">
                Staff Directory
              </Button>
              <Button variant="outline" className="w-full text-sm">
                Performance Summary
              </Button>
              <Button variant="outline" className="w-full text-sm">
                Attendance Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FacultyManagementPage;
