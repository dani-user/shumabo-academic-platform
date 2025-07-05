
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, BarChart3, Users, GraduationCap, Target, Award, AlertTriangle } from 'lucide-react';

const PerformanceAnalyticsPage = () => {
  const [selectedMetric, setSelectedMetric] = useState('academic');
  const [selectedPeriod, setSelectedPeriod] = useState('this-year');

  const metrics = ['academic', 'attendance', 'financial', 'staff'];
  const periods = ['this-month', 'this-quarter', 'this-year', 'last-year'];

  const mockData = {
    academic: {
      overall: {
        averageGPA: 3.24,
        improvement: '+0.15',
        topPerformers: 125,
        atRiskStudents: 34
      },
      byGrade: [
        { grade: 'Grade 9', gpa: 3.1, students: 150, improvement: '+0.2' },
        { grade: 'Grade 10', gpa: 3.2, students: 145, improvement: '+0.1' },
        { grade: 'Grade 11', gpa: 3.3, students: 140, improvement: '+0.15' },
        { grade: 'Grade 12', gpa: 3.4, students: 135, improvement: '+0.05' }
      ],
      subjects: [
        { subject: 'Mathematics', average: 85, trend: 'up' },
        { subject: 'English', average: 82, trend: 'up' },
        { subject: 'Science', average: 79, trend: 'stable' },
        { subject: 'History', average: 88, trend: 'up' },
        { subject: 'Biology', average: 81, trend: 'down' }
      ]
    },
    attendance: {
      overall: 94.2,
      trend: '+2.1%',
      chronic: 15,
      perfect: 245
    },
    financial: {
      revenue: 2450000,
      growth: '+12%',
      collectionRate: 92,
      outstanding: 198000
    },
    staff: {
      total: 45,
      satisfaction: 87,
      retention: 94,
      professional: 32
    }
  };

  const getTrendColor = (trend) => {
    if (trend === 'up' || trend.startsWith('+')) return 'text-green-600';
    if (trend === 'down' || trend.startsWith('-')) return 'text-red-600';
    return 'text-gray-600';
  };

  const getTrendIcon = (trend) => {
    if (trend === 'up' || trend.startsWith('+')) return <TrendingUp className="h-4 w-4" />;
    if (trend === 'down' || trend.startsWith('-')) return <TrendingUp className="h-4 w-4 rotate-180" />;
    return <BarChart3 className="h-4 w-4" />;
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Performance Analytics</h1>
          <p className="text-gray-600">Comprehensive performance insights and trends</p>
        </div>
        <div className="flex items-center space-x-2">
          <BarChart3 className="h-6 w-6 text-blue-600" />
          <Badge variant="secondary">Director Portal</Badge>
        </div>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Analytics Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={selectedMetric} onValueChange={setSelectedMetric}>
              <SelectTrigger>
                <SelectValue placeholder="Select Metric" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="academic">Academic Performance</SelectItem>
                <SelectItem value="attendance">Attendance Tracking</SelectItem>
                <SelectItem value="financial">Financial Metrics</SelectItem>
                <SelectItem value="staff">Staff Performance</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger>
                <SelectValue placeholder="Select Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="this-quarter">This Quarter</SelectItem>
                <SelectItem value="this-year">This Year</SelectItem>
                <SelectItem value="last-year">Last Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              Export Analytics
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Overall GPA</div>
                <div className="text-2xl font-bold text-blue-600">
                  {mockData.academic.overall.averageGPA}
                </div>
                <div className="text-sm text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {mockData.academic.overall.improvement}
                </div>
              </div>
              <GraduationCap className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Attendance Rate</div>
                <div className="text-2xl font-bold text-green-600">
                  {mockData.attendance.overall}%
                </div>
                <div className="text-sm text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {mockData.attendance.trend}
                </div>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Collection Rate</div>
                <div className="text-2xl font-bold text-purple-600">
                  {mockData.financial.collectionRate}%
                </div>
                <div className="text-sm text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {mockData.financial.growth}
                </div>
              </div>
              <Target className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Staff Satisfaction</div>
                <div className="text-2xl font-bold text-orange-600">
                  {mockData.staff.satisfaction}%
                </div>
                <div className="text-sm text-gray-500">
                  Retention: {mockData.staff.retention}%
                </div>
              </div>
              <Award className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Academic Performance Details */}
      {selectedMetric === 'academic' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance by Grade</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockData.academic.byGrade.map((grade, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">{grade.grade}</div>
                      <div className="text-sm text-gray-500">{grade.students} students</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{grade.gpa} GPA</div>
                      <div className={`text-sm flex items-center ${getTrendColor(grade.improvement)}`}>
                        {getTrendIcon(grade.improvement)}
                        <span className="ml-1">{grade.improvement}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Subject Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockData.academic.subjects.map((subject, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">{subject.subject}</div>
                      <div className="text-sm text-gray-500">Class Average</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{subject.average}%</div>
                      <div className={`text-sm flex items-center ${getTrendColor(subject.trend)}`}>
                        {getTrendIcon(subject.trend)}
                        <span className="ml-1 capitalize">{subject.trend}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Performance Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            <span>Performance Alerts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
              <div>
                <div className="font-medium text-red-800">Grade 9-C Math Performance</div>
                <div className="text-sm text-red-600">Average score dropped by 8% this quarter</div>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div>
                <div className="font-medium text-yellow-800">Attendance Concern</div>
                <div className="text-sm text-yellow-600">15 students with chronic absenteeism</div>
              </div>
              <Button variant="outline" size="sm">
                Review Cases
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
              <div>
                <div className="font-medium text-green-800">Outstanding Achievement</div>
                <div className="text-sm text-green-600">Grade 11-A achieved 95% pass rate in sciences</div>
              </div>
              <Button variant="outline" size="sm">
                Celebrate
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Improvement Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Improvement Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-medium">Academic Improvements</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Implement peer tutoring program for struggling students</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Increase practical lab sessions for science subjects</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span>Provide additional English language support</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium">Operational Improvements</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Implement automated attendance tracking system</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Enhance parent-teacher communication channels</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Schedule regular professional development workshops</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceAnalyticsPage;
