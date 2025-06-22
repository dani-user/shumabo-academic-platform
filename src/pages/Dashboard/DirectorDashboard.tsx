import React from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, DollarSign, Award, Calendar, FileText } from 'lucide-react';

const DirectorDashboard = () => {
  const mockData = {
    director: {
      name: 'Dr. Robert Williams',
      id: 'LSSD1701000'
    },
    metrics: {
      totalEnrollment: 1247,
      revenue: 2450000,
      academicPerformance: 87.5,
      teacherSatisfaction: 92
    },
    keyUpdates: [
      { id: 1, title: 'Q1 Financial Report Ready', priority: 'High', date: '2025-01-15' },
      { id: 2, title: 'New Teacher Hiring Complete', priority: 'Medium', date: '2025-01-12' },
      { id: 3, title: 'Infrastructure Upgrade Proposal', priority: 'High', date: '2025-01-10' }
    ]
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-[#0056b3] to-[#004494] text-white p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-2">Welcome, {mockData.director.name}</h1>
          <p className="text-blue-100">Director Portal - Strategic oversight and institutional leadership</p>
          <p className="text-blue-100">Director ID: {mockData.director.id}</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Enrollment</CardTitle>
              <Users className="h-4 w-4 text-[#0056b3]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#0056b3]">{mockData.metrics.totalEnrollment}</div>
              <p className="text-xs text-green-600">+5.2% from last year</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Annual Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">ETB {mockData.metrics.revenue.toLocaleString()}</div>
              <p className="text-xs text-green-600">+12.8% from last year</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Academic Performance</CardTitle>
              <Award className="h-4 w-4 text-[#0056b3]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#0056b3]">{mockData.metrics.academicPerformance}%</div>
              <p className="text-xs text-green-600">+3.1% improvement</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Teacher Satisfaction</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{mockData.metrics.teacherSatisfaction}%</div>
              <p className="text-xs text-green-600">Excellent rating</p>
            </CardContent>
          </Card>
        </div>

        {/* Strategic Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button className="h-20 flex flex-col items-center justify-center bg-[#0056b3] hover:bg-[#004494]">
            <FileText className="h-6 w-6 mb-2" />
            <span>View Reports</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center bg-[#0056b3] hover:bg-[#004494]">
            <TrendingUp className="h-6 w-6 mb-2" />
            <span>Performance Analytics</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center bg-[#0056b3] hover:bg-[#004494]">
            <Calendar className="h-6 w-6 mb-2" />
            <span>Strategic Planning</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center bg-[#0056b3] hover:bg-[#004494]">
            <Users className="h-6 w-6 mb-2" />
            <span>Faculty Management</span>
          </Button>
        </div>

        {/* Key Updates & Decisions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#0056b3]" />
              Key Updates & Decisions Required
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockData.keyUpdates.map((update) => (
                <div key={update.id} className="flex justify-between items-center p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{update.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        update.priority === 'High' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {update.priority} Priority
                      </span>
                      <span className="text-sm text-gray-600">{update.date}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Review</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Overview Chart Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[#0056b3]" />
              Performance Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Performance charts and analytics will be displayed here</p>
                <p className="text-sm text-gray-400">Integration with reporting system pending</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DirectorDashboard;
