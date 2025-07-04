
import React, { useState } from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { User, Mail, Phone, MapPin, Calendar, Edit, Camera, Save, X, Shield, Bell } from 'lucide-react';

const ProfilePage = () => {
  const { profile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({
    fname: profile?.fname || '',
    mname: profile?.mname || '',
    lname: profile?.lname || '',
    email: profile?.email || '',
    phone: profile?.phone || '+251-911-123456',
  });

  const mockProfileData = {
    ...profile,
    photo: null,
    phone: profile?.phone || '+251-911-123456',
    address: '123 Main Street, Addis Ababa, Ethiopia',
    birthDate: '2005-05-15',
    joinDate: '2023-01-15',
    grade: profile?.role === 'student' ? '11' : undefined,
    section: profile?.role === 'student' ? 'A' : undefined,
    studentId: profile?.unique_id,
    parentName: profile?.role === 'student' ? 'John Doe Sr.' : undefined,
    parentPhone: profile?.role === 'student' ? '+251-911-654321' : undefined,
    parentEmail: profile?.role === 'student' ? 'parent@example.com' : undefined,
    emergencyContact: '+251-911-999888',
    bloodType: 'O+',
    medicalConditions: 'None',
    previousSchool: 'ABC Elementary School'
  };

  const academicInfo = {
    currentGPA: 3.65,
    totalCredits: 28,
    expectedGraduation: '2026-06-15',
    academicStanding: 'Good Standing',
    advisor: 'Ms. Sarah Johnson',
    majorSubjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology']
  };

  const handleSave = () => {
    // Mock save functionality
    console.log('Saving profile:', editedProfile);
    alert('Profile updated successfully!');
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile({
      fname: profile?.fname || '',
      mname: profile?.mname || '',
      lname: profile?.lname || '',
      email: profile?.email || '',
      phone: profile?.phone || '+251-911-123456',
    });
    setIsEditing(false);
  };

  const handleChangePassword = () => {
    alert('Password change form opened...');
  };

  const handlePhotoUpload = () => {
    alert('Photo upload functionality would be implemented here...');
  };

  return (
    <DashboardLayout title="My Profile">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
            <p className="text-gray-600">Manage your personal information and account settings</p>
          </div>
          <div className="flex items-center space-x-2">
            {isEditing ? (
              <>
                <Button variant="outline" onClick={handleCancel}>
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
                <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </>
            ) : (
              <Button onClick={() => setIsEditing(true)} className="bg-blue-600 hover:bg-blue-700">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Picture and Basic Info */}
          <Card className="lg:col-span-1">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {mockProfileData.photo ? (
                      <img
                        src={mockProfileData.photo}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover"
                      />
                    ) : (
                      <User className="h-16 w-16 text-blue-600" />
                    )}
                  </div>
                  <button 
                    onClick={handlePhotoUpload}
                    className="absolute bottom-4 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                  >
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  {mockProfileData.fname} {mockProfileData.lname}
                </h2>
                <p className="text-gray-600 capitalize mb-2">{mockProfileData.role}</p>
                <p className="text-sm text-gray-500">ID: {mockProfileData.unique_id}</p>
                {mockProfileData.grade && (
                  <p className="text-sm text-blue-600 font-medium">
                    Grade {mockProfileData.grade}{mockProfileData.section}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">First Name</label>
                  {isEditing ? (
                    <Input
                      value={editedProfile.fname}
                      onChange={(e) => setEditedProfile({...editedProfile, fname: e.target.value})}
                      className="mt-1"
                    />
                  ) : (
                    <p className="font-medium mt-1">{mockProfileData.fname}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm text-gray-600">Middle Name</label>
                  {isEditing ? (
                    <Input
                      value={editedProfile.mname}
                      onChange={(e) => setEditedProfile({...editedProfile, mname: e.target.value})}
                      className="mt-1"
                    />
                  ) : (
                    <p className="font-medium mt-1">{mockProfileData.mname || 'N/A'}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm text-gray-600">Last Name</label>
                  {isEditing ? (
                    <Input
                      value={editedProfile.lname}
                      onChange={(e) => setEditedProfile({...editedProfile, lname: e.target.value})}
                      className="mt-1"
                    />
                  ) : (
                    <p className="font-medium mt-1">{mockProfileData.lname}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm text-gray-600">Email</label>
                  {isEditing ? (
                    <Input
                      type="email"
                      value={editedProfile.email}
                      onChange={(e) => setEditedProfile({...editedProfile, email: e.target.value})}
                      className="mt-1"
                    />
                  ) : (
                    <p className="font-medium mt-1">{mockProfileData.email}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm text-gray-600">Phone</label>
                  {isEditing ? (
                    <Input
                      value={editedProfile.phone}
                      onChange={(e) => setEditedProfile({...editedProfile, phone: e.target.value})}
                      className="mt-1"
                    />
                  ) : (
                    <p className="font-medium mt-1">{mockProfileData.phone}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm text-gray-600">Address</label>
                  <p className="font-medium mt-1">{mockProfileData.address}</p>
                </div>

                <div>
                  <label className="text-sm text-gray-600">Birth Date</label>
                  <p className="font-medium mt-1">{mockProfileData.birthDate}</p>
                </div>

                <div>
                  <label className="text-sm text-gray-600">Join Date</label>
                  <p className="font-medium mt-1">{mockProfileData.joinDate}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Academic Information for Students */}
        {mockProfileData.role === 'student' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Academic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600">Grade & Section</label>
                    <p className="font-medium">{mockProfileData.grade}{mockProfileData.section}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Student ID</label>
                    <p className="font-medium">{mockProfileData.studentId}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Current GPA</label>
                    <p className="font-medium text-blue-600">{academicInfo.currentGPA}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Total Credits</label>
                    <p className="font-medium">{academicInfo.totalCredits}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Academic Standing</label>
                    <p className="font-medium text-green-600">{academicInfo.academicStanding}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Class Advisor</label>
                    <p className="font-medium">{academicInfo.advisor}</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Major Subjects</label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {academicInfo.majorSubjects.map((subject, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergency Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">Parent/Guardian Name</label>
                  <p className="font-medium">{mockProfileData.parentName}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Parent Phone</label>
                  <p className="font-medium">{mockProfileData.parentPhone}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Parent Email</label>
                  <p className="font-medium">{mockProfileData.parentEmail}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Emergency Contact</label>
                  <p className="font-medium">{mockProfileData.emergencyContact}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Blood Type</label>
                  <p className="font-medium">{mockProfileData.bloodType}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Medical Conditions</label>
                  <p className="font-medium">{mockProfileData.medicalConditions}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Change Password</p>
                  <p className="text-sm text-gray-600">Update your account password for security</p>
                </div>
              </div>
              <Button variant="outline" onClick={handleChangePassword}>
                Change Password
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium">Notification Preferences</p>
                  <p className="text-sm text-gray-600">Manage email and push notifications</p>
                </div>
              </div>
              <Button variant="outline">
                Manage Notifications
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="font-medium">Privacy Settings</p>
                  <p className="text-sm text-gray-600">Control who can see your information</p>
                </div>
              </div>
              <Button variant="outline">
                Privacy Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
