
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Download, Eye, Calendar, TrendingUp, Users, GraduationCap } from 'lucide-react';

const ViewReportsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');

  const categories = ['Academic', 'Financial', 'Attendance', 'Staff', 'Infrastructure'];
  const periods = ['This Week', 'This Month', 'This Quarter', 'This Year', 'Custom Range'];

  const mockReports = [
    {
      id: 1,
      title: 'Academic Performance Summary',
      category: 'Academic',
      description: 'Overall academic performance analysis for all grades',
      generatedDate: '2024-01-15',
      period: 'Q1 2024',
      size: '2.5 MB',
      format: 'PDF',
      status: 'ready',
      insights: {
        avgGPA: 3.2,
        topPerformers: 45,
        atRiskStudents: 12
      }
    },
    {
      id: 2,
      title: 'Financial Revenue Report',
      category: 'Financial',
      description: 'School revenue and expenditure analysis',
      generatedDate: '2024-01-14',
      period: 'December 2023',
      size: '1.8 MB',
      format: 'Excel',
      status: 'ready',
      insights: {
        totalRevenue: '850,000 ETB',
        collectionRate: '92%',
        outstandingFees: '68,000 ETB'
      }
    },
    {
      id: 3,
      title: 'Staff Performance Evaluation',
      category: 'Staff',
      description: 'Comprehensive staff performance assessment',
      generatedDate: '2024-01-13',
      period: 'Q4 2023',
      size: '3.2 MB',
      format: 'PDF',
      status: 'ready',
      insights: {
        totalStaff: 45,
        excellentRating: 32,
        improvementNeeded: 5
      }
    },
    {
      id: 4,
      title: 'Student Attendance Analysis',
      category: 'Attendance',
      description: 'Detailed attendance patterns and trends',
      generatedDate: '2024-01-12',
      period: 'January 2024',
      size: '1.2 MB',
      format: 'PDF',
      status: 'processing',
      insights: {
        avgAttendance: '94%',
        chronicAbsent: 8,
        perfectAttendance: 156
      }
    }
  ];

  const filteredReports = mockReports.filter(report => {
    const matchesCategory = !selectedCategory || report.category === selectedCategory;
    return matchesCategory;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'ready': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getOverviewStats = () => {
    return {
      totalReports: mockReports.length,
      readyReports: mockReports.filter(r => r.status === 'ready').length,
      processingReports: mockReports.filter(r => r.status === 'processing').length,
      totalSize: mockReports.reduce((sum, report) => sum + parseFloat(report.size), 0).toFixed(1)
    };
  };

  const stats = getOverviewStats();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">View Reports</h1>
          <p className="text-gray-600">Access and analyze comprehensive school reports</p>
        </div>
        <div className="flex items-center space-x-2">
          <FileText className="h-6 w-6 text-blue-600" />
          <Badge variant="secondary">Director Portal</Badge>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Total Reports</div>
                <div className="text-2xl font-bold text-blue-600">{stats.totalReports}</div>
              </div>
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Ready</div>
                <div className="text-2xl font-bold text-green-600">{stats.readyReports}</div>
              </div>
              <Eye className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Processing</div>
                <div className="text-2xl font-bold text-yellow-600">{stats.processingReports}</div>
              </div>
              <Calendar className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Total Size</div>
                <div className="text-2xl font-bold text-purple-600">{stats.totalSize} MB</div>
              </div>
              <Download className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger>
                <SelectValue placeholder="All Periods" />
              </SelectTrigger>
              <SelectContent>
                {periods.map(period => (
                  <SelectItem key={period} value={period}>{period}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline">
              Generate New Report
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Insights Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <GraduationCap className="h-5 w-5" />
              <span>Academic Highlights</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Average GPA</span>
                <Badge variant="outline">3.2</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Top Performers</span>
                <Badge variant="default">45 students</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">At-Risk Students</span>
                <Badge variant="destructive">12 students</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Staff Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Staff</span>
                <Badge variant="outline">45</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Excellent Rating</span>
                <Badge variant="default">32 staff</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Need Improvement</span>
                <Badge variant="secondary">5 staff</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Financial Summary</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Monthly Revenue</span>
                <Badge variant="outline">850K ETB</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Collection Rate</span>
                <Badge variant="default">92%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Outstanding</span>
                <Badge variant="secondary">68K ETB</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reports List */}
      <Card>
        <CardHeader>
          <CardTitle>Available Reports ({filteredReports.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredReports.map(report => (
              <div key={report.id} className="border rounded-lg p-4 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-lg font-semibold">{report.title}</h3>
                      <Badge variant="outline">{report.category}</Badge>
                      <Badge className={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                    </div>
                    <p className="text-gray-600">{report.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Generated: {report.generatedDate}</span>
                      <span>Period: {report.period}</span>
                      <span>Size: {report.size}</span>
                      <span>Format: {report.format}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 ml-4">
                    <Button variant="outline" size="sm" disabled={report.status !== 'ready'}>
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" disabled={report.status !== 'ready'}>
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>

                {/* Report Insights */}
                {report.insights && (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-medium mb-2">Key Insights:</h4>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      {Object.entries(report.insights).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-medium text-blue-600">{value}</div>
                          <div className="text-gray-500 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {filteredReports.length === 0 && (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No reports found for the selected criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewReportsPage;
