
import React, { useState } from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FileText, Download, Calendar, Users, BarChart3, TrendingUp, BookOpen, UserCheck } from 'lucide-react';

const GenerateReportsPage = () => {
  const [selectedReport, setSelectedReport] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [generating, setGenerating] = useState(false);

  const reportTypes = [
    {
      id: 'academic-performance',
      name: 'Academic Performance Report',
      description: 'Detailed student performance analysis with grades and GPA trends',
      icon: BookOpen,
      color: 'blue'
    },
    {
      id: 'attendance-report',
      name: 'Attendance Report',
      description: 'Student attendance statistics and patterns',
      icon: UserCheck,
      color: 'green'
    },
    {
      id: 'enrollment-report',
      name: 'Enrollment Report',
      description: 'Student enrollment numbers and demographics',
      icon: Users,
      color: 'purple'
    },
    {
      id: 'financial-report',
      name: 'Financial Report',
      description: 'Fee collection and financial overview',
      icon: BarChart3,
      color: 'orange'
    },
    {
      id: 'teacher-performance',
      name: 'Teacher Performance Report',
      description: 'Teaching effectiveness and student feedback analysis',
      icon: TrendingUp,
      color: 'indigo'
    },
    {
      id: 'comprehensive-report',
      name: 'Comprehensive School Report',
      description: 'Complete overview of all school metrics and KPIs',
      icon: FileText,
      color: 'red'
    }
  ];

  const handleGenerateReport = async () => {
    if (!selectedReport) {
      alert('Please select a report type');
      return;
    }

    setGenerating(true);
    
    // Simulate report generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Generating report:', {
      type: selectedReport,
      dateRange,
      grade: selectedGrade
    });

    const reportName = reportTypes.find(r => r.id === selectedReport)?.name || 'Report';
    alert(`${reportName} has been generated successfully! Download will start automatically.`);
    
    setGenerating(false);
  };

  const handleQuickReport = (reportId: string) => {
    setSelectedReport(reportId);
    // Set default date range to current month
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    
    setDateRange({
      start: firstDay.toISOString().split('T')[0],
      end: lastDay.toISOString().split('T')[0]
    });
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      orange: 'text-orange-600',
      indigo: 'text-indigo-600',
      red: 'text-red-600'
    };
    return colors[color as keyof typeof colors] || 'text-gray-600';
  };

  const getCardBorder = (color: string) => {
    const borders = {
      blue: 'border-blue-200 hover:border-blue-300',
      green: 'border-green-200 hover:border-green-300',
      purple: 'border-purple-200 hover:border-purple-300',
      orange: 'border-orange-200 hover:border-orange-300',
      indigo: 'border-indigo-200 hover:border-indigo-300',
      red: 'border-red-200 hover:border-red-300'
    };
    return borders[color as keyof typeof borders] || 'border-gray-200 hover:border-gray-300';
  };

  return (
    <DashboardLayout title="Generate Reports">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Report Generation</h1>
            <p className="text-gray-600">Generate comprehensive reports for analysis and decision making</p>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600" />
            <span className="text-sm text-gray-600">Select report type below</span>
          </div>
        </div>

        {/* Quick Report Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reportTypes.map((report) => {
            const IconComponent = report.icon;
            return (
              <Card 
                key={report.id} 
                className={`cursor-pointer transition-all duration-200 border-2 ${getCardBorder(report.color)} ${
                  selectedReport === report.id ? `border-${report.color}-500 bg-${report.color}-50` : ''
                }`}
                onClick={() => setSelectedReport(report.id)}
              >
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-${report.color}-100`}>
                      <IconComponent className={`h-6 w-6 ${getIconColor(report.color)}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{report.name}</CardTitle>
                      <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuickReport(report.id);
                    }}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Quick Generate
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Report Configuration */}
        <Card>
          <CardHeader>
            <CardTitle>Report Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Report Type Selection */}
            <div className="space-y-2">
              <Label>Selected Report Type</Label>
              <select
                value={selectedReport}
                onChange={(e) => setSelectedReport(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="">Select a report type...</option>
                {reportTypes.map((report) => (
                  <option key={report.id} value={report.id}>
                    {report.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Start Date</Label>
                <Input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label>End Date</Label>
                <Input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                />
              </div>
            </div>

            {/* Grade Filter */}
            <div className="space-y-2">
              <Label>Grade Level</Label>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="all">All Grades</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
              </select>
            </div>

            {/* Generate Button */}
            <div className="flex justify-center pt-4">
              <Button
                onClick={handleGenerateReport}
                disabled={generating || !selectedReport}
                className="px-8 py-2 bg-blue-600 hover:bg-blue-700"
              >
                {generating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Generating Report...
                  </>
                ) : (
                  <>
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Report
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'Academic Performance Report - December 2024', date: '2025-01-10', size: '2.4 MB' },
                { name: 'Attendance Report - Q4 2024', date: '2025-01-08', size: '1.8 MB' },
                { name: 'Enrollment Report - Fall 2024', date: '2025-01-05', size: '856 KB' },
                { name: 'Financial Report - December 2024', date: '2025-01-03', size: '1.2 MB' }
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">{report.name}</p>
                      <p className="text-sm text-gray-600">Generated on {report.date} • {report.size}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default GenerateReportsPage;
