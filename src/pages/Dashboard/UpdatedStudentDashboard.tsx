
import React, { useState } from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import DashboardHeader from '@/components/Layout/DashboardHeader';
import StudentGrades from '@/components/Dashboard/StudentGrades';
import StudentTimetable from '@/components/Dashboard/StudentTimetable';
import AnnouncementsList from '@/components/Dashboard/AnnouncementsList';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Calendar, Bell, User } from 'lucide-react';

const UpdatedStudentDashboard = () => {
  return (
    <DashboardLayout userRole="student">
      <DashboardHeader />
      <div className="p-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="grades" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Grades</span>
            </TabsTrigger>
            <TabsTrigger value="timetable" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Timetable</span>
            </TabsTrigger>
            <TabsTrigger value="announcements" className="flex items-center space-x-2">
              <Bell className="h-4 w-4" />
              <span>Announcements</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Grade:</span>
                      <span className="font-medium">Grade 10</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Section:</span>
                      <span className="font-medium">A</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Academic Year:</span>
                      <span className="font-medium">2024-2025</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <AnnouncementsList />
            </div>
          </TabsContent>

          <TabsContent value="grades">
            <StudentGrades />
          </TabsContent>

          <TabsContent value="timetable">
            <StudentTimetable />
          </TabsContent>

          <TabsContent value="announcements">
            <AnnouncementsList />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default UpdatedStudentDashboard;
