
import React, { useState } from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Users, UserPlus, Search, Edit, Trash2, MoreHorizontal, Shield } from 'lucide-react';

const ManageUsersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');

  const mockUsers = [
    {
      id: 1,
      uniqueId: 'LSST1701001',
      name: 'John Smith',
      email: 'john.smith@school.edu',
      role: 'teacher',
      status: 'active',
      lastLogin: '2025-01-15',
      subjects: ['Mathematics', 'Physics']
    },
    {
      id: 2,
      uniqueId: 'LSSS1701001', 
      name: 'Alice Johnson',
      email: 'alice.johnson@student.school.edu',
      role: 'student',
      status: 'active',
      lastLogin: '2025-01-15',
      grade: '11A'
    },
    {
      id: 3,
      uniqueId: 'LSSR1701001',
      name: 'Maria Rodriguez',
      email: 'maria.rodriguez@school.edu',
      role: 'registrar',
      status: 'active',
      lastLogin: '2025-01-14',
      department: 'Administration'
    },
    {
      id: 4,
      uniqueId: 'LSSF1701001',
      name: 'David Brown',
      email: 'david.brown@family.school.edu',
      role: 'family',
      status: 'inactive',
      lastLogin: '2025-01-10',
      children: ['Alice Brown - 10B']
    }
  ];

  const handleAddUser = () => {
    console.log('Adding new user');
    alert('Opening user creation form...');
  };

  const handleEditUser = (id: number) => {
    console.log('Editing user:', id);
    alert(`Opening edit form for user ${id}`);
  };

  const handleDeleteUser = (id: number) => {
    if (confirm('Are you sure you want to delete this user?')) {
      console.log('Deleting user:', id);
      alert(`User ${id} has been deleted`);
    }
  };

  const handleResetPassword = (id: number) => {
    console.log('Resetting password for user:', id);
    alert(`Password reset email sent for user ${id}`);
  };

  const toggleUserStatus = (id: number) => {
    console.log('Toggling status for user:', id);
    alert(`User ${id} status has been toggled`);
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-100 text-red-800';
      case 'director': return 'bg-purple-100 text-purple-800';
      case 'teacher': return 'bg-blue-100 text-blue-800';
      case 'registrar': return 'bg-green-100 text-green-800';
      case 'student': return 'bg-yellow-100 text-yellow-800';
      case 'family': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.uniqueId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const roleStats = {
    admin: mockUsers.filter(u => u.role === 'admin').length,
    teacher: mockUsers.filter(u => u.role === 'teacher').length,
    student: mockUsers.filter(u => u.role === 'student').length,
    family: mockUsers.filter(u => u.role === 'family').length,
    registrar: mockUsers.filter(u => u.role === 'registrar').length,
    director: mockUsers.filter(u => u.role === 'director').length
  };

  return (
    <DashboardLayout title="Manage Users">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
            <p className="text-gray-600">Manage all system users and their permissions</p>
          </div>
          <Button onClick={handleAddUser} className="bg-blue-600 hover:bg-blue-700">
            <UserPlus className="h-4 w-4 mr-2" />
            Add New User
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-red-600">{roleStats.admin}</div>
              <p className="text-xs text-gray-600">Admins</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-blue-600">{roleStats.teacher}</div>
              <p className="text-xs text-gray-600">Teachers</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-yellow-600">{roleStats.student}</div>
              <p className="text-xs text-gray-600">Students</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-orange-600">{roleStats.family}</div>
              <p className="text-xs text-gray-600">Families</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-green-600">{roleStats.registrar}</div>
              <p className="text-xs text-gray-600">Registrars</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-purple-600">{roleStats.director}</div>
              <p className="text-xs text-gray-600">Directors</p>
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
                    placeholder="Search by name, email, or ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-gray-400" />
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="border rounded-lg px-3 py-2"
                >
                  <option value="all">All Roles</option>
                  <option value="admin">Admin</option>
                  <option value="director">Director</option>
                  <option value="teacher">Teacher</option>
                  <option value="registrar">Registrar</option>
                  <option value="student">Student</option>
                  <option value="family">Family</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">User</th>
                    <th className="text-left p-3 font-medium">Unique ID</th>
                    <th className="text-center p-3 font-medium">Role</th>
                    <th className="text-center p-3 font-medium">Status</th>
                    <th className="text-center p-3 font-medium">Last Login</th>
                    <th className="text-center p-3 font-medium">Additional Info</th>
                    <th className="text-center p-3 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-gray-600">{user.email}</div>
                        </div>
                      </td>
                      <td className="p-3 font-mono text-sm">{user.uniqueId}</td>
                      <td className="p-3 text-center">
                        <Badge className={getRoleColor(user.role)}>
                          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                        </Badge>
                      </td>
                      <td className="p-3 text-center">
                        <Badge className={getStatusColor(user.status)}>
                          {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                        </Badge>
                      </td>
                      <td className="p-3 text-center text-sm text-gray-600">{user.lastLogin}</td>
                      <td className="p-3 text-center text-sm text-gray-600">
                        {user.subjects && `Subjects: ${user.subjects.join(', ')}`}
                        {user.grade && `Grade: ${user.grade}`}
                        {user.department && `Dept: ${user.department}`}
                        {user.children && `Children: ${user.children.join(', ')}`}
                      </td>
                      <td className="p-3 text-center">
                        <div className="flex justify-center gap-1">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditUser(user.id)}
                          >
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleResetPassword(user.id)}
                          >
                            <Shield className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleUserStatus(user.id)}
                          >
                            <MoreHorizontal className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
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

export default ManageUsersPage;
