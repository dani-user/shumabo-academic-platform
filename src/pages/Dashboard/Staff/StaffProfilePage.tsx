
import React from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { User, Mail, Phone, Calendar, MapPin, Edit, Save, Camera } from 'lucide-react';

const StaffProfilePage = () => {
  const { profile } = useAuth();

  const mockProfileData = {
    ...profile,
    department: 'Mathematics Department',
    position: 'Senior Mathematics Teacher',
    joiningDate: '2020-08-15',
    address: '123 Main Street, Addis Ababa',
    emergencyContact: '+251911234567',
    qualifications: ['BSc Mathematics', 'MSc Applied Mathematics', 'Teaching Certificate'],
    subjects: ['Mathematics', 'Advanced Mathematics', 'Statistics'],
    experience: '8 years'
  };

  return (
    <DashboardLayout title="Staff Profile">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Staff Profile</h1>
            <p className="text-gray-600">Manage your professional information</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Picture & Basic Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <div className="bg-blue-100 p-8 rounded-full inline-block">
                    <User className="h-16 w-16 text-blue-900" />
                  </div>
                  <Button 
                    size="sm" 
                    className="absolute bottom-0 right-1/2 transform translate-x-1/2 bg-white shadow-md hover:bg-gray-50"
                    variant="outline"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  {mockProfileData.fname} {mockProfileData.lname}
                </h2>
                <p className="text-gray-600 mb-2">{mockProfileData.position}</p>
                <p className="text-sm text-gray-500 mb-4">{mockProfileData.department}</p>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>{mockProfileData.email}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{mockProfileData.phone || 'Not provided'}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {mockProfileData.joiningDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Teaching Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-medium">{mockProfileData.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subjects</span>
                    <span className="font-medium">{mockProfileData.subjects.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Classes</span>
                    <span className="font-medium">6</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students</span>
                    <span className="font-medium">180</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fname">First Name</Label>
                    <Input id="fname" value={mockProfileData.fname} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="lname">Last Name</Label>
                    <Input id="lname" value={mockProfileData.lname} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" value={mockProfileData.email} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" value={mockProfileData.phone || ''} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Input id="gender" value={mockProfileData.gender || 'Not specified'} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="uniqueId">Staff ID</Label>
                    <Input id="uniqueId" value={mockProfileData.unique_id} readOnly />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" value={mockProfileData.address} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="emergencyContact">Emergency Contact</Label>
                    <Input id="emergencyContact" value={mockProfileData.emergencyContact} readOnly />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Information */}
            <Card>
              <CardHeader>
                <CardTitle>Professional Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <Input id="department" value={mockProfileData.department} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="position">Position</Label>
                    <Input id="position" value={mockProfileData.position} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="joiningDate">Joining Date</Label>
                    <Input id="joiningDate" value={mockProfileData.joiningDate} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="experience">Experience</Label>
                    <Input id="experience" value={mockProfileData.experience} readOnly />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Qualifications & Subjects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Qualifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {mockProfileData.qualifications.map((qual, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>{qual}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Teaching Subjects</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {mockProfileData.subjects.map((subject, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>{subject}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StaffProfilePage;
