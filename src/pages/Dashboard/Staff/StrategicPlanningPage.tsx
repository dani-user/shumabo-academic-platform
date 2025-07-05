
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Target, Calendar, Plus, Edit, Eye, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const StrategicPlanningPage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('');

  const timeframes = ['Short-term (1 year)', 'Medium-term (3 years)', 'Long-term (5 years)'];

  const mockStrategicGoals = [
    {
      id: 1,
      title: 'Improve Academic Excellence',
      description: 'Achieve 95% pass rate across all grades and increase average GPA to 3.5',
      timeframe: 'Medium-term (3 years)',
      priority: 'high',
      status: 'in-progress',
      progress: 65,
      startDate: '2024-01-01',
      targetDate: '2026-12-31',
      department: 'Academic',
      objectives: [
        'Implement advanced teaching methodologies',
        'Establish tutoring programs',
        'Upgrade laboratory equipment',
        'Enhance teacher training programs'
      ],
      milestones: [
        { title: 'Teacher Training Complete', date: '2024-06-30', status: 'completed' },
        { title: 'Lab Equipment Installation', date: '2024-09-15', status: 'in-progress' },
        { title: 'Tutoring Program Launch', date: '2024-12-01', status: 'pending' }
      ]
    },
    {
      id: 2,
      title: 'Digital Infrastructure Development',
      description: 'Modernize school technology infrastructure and implement digital learning platforms',
      timeframe: 'Short-term (1 year)',
      priority: 'high',
      status: 'in-progress',
      progress: 80,
      startDate: '2024-01-15',
      targetDate: '2024-12-15',
      department: 'IT',
      objectives: [
        'Install high-speed internet connectivity',
        'Set up computer labs in all blocks',
        'Implement learning management system',
        'Train staff on digital tools'
      ],
      milestones: [
        { title: 'Internet Infrastructure', date: '2024-03-31', status: 'completed' },
        { title: 'Computer Lab Setup', date: '2024-06-30', status: 'completed' },
        { title: 'LMS Implementation', date: '2024-10-01', status: 'in-progress' }
      ]
    },
    {
      id: 3,
      title: 'Student Enrollment Growth',
      description: 'Increase student enrollment by 25% while maintaining quality education standards',
      timeframe: 'Medium-term (3 years)',
      priority: 'medium',
      status: 'planning',
      progress: 20,
      startDate: '2024-02-01',
      targetDate: '2027-01-31',
      department: 'Administration',
      objectives: [
        'Expand marketing and outreach programs',
        'Build additional classroom facilities',
        'Hire qualified teaching staff',
        'Develop scholarship programs'
      ],
      milestones: [
        { title: 'Marketing Strategy Development', date: '2024-04-30', status: 'completed' },
        { title: 'Facility Expansion Planning', date: '2024-08-31', status: 'in-progress' },
        { title: 'Staff Recruitment Drive', date: '2025-01-15', status: 'pending' }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'planning': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      case 'in-progress': return <Clock className="h-4 w-4" />;
      case 'planning': return <Target className="h-4 w-4" />;
      case 'pending': return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const filteredGoals = mockStrategicGoals.filter(goal => {
    return !selectedTimeframe || goal.timeframe === selectedTimeframe;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Strategic Planning</h1>
          <p className="text-gray-600">Plan and track long-term institutional goals</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button 
            onClick={() => setShowCreateForm(true)}
            className="flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>New Strategic Goal</span>
          </Button>
          <div className="flex items-center space-x-2">
            <Target className="h-6 w-6 text-blue-600" />
            <Badge variant="secondary">Director Portal</Badge>
          </div>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{mockStrategicGoals.length}</div>
              <div className="text-sm text-gray-500">Active Goals</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {mockStrategicGoals.filter(g => g.status === 'completed').length}
              </div>
              <div className="text-sm text-gray-500">Completed</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {mockStrategicGoals.filter(g => g.status === 'in-progress').length}
              </div>
              <div className="text-sm text-gray-500">In Progress</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {Math.round(mockStrategicGoals.reduce((sum, goal) => sum + goal.progress, 0) / mockStrategicGoals.length)}%
              </div>
              <div className="text-sm text-gray-500">Avg Progress</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
              <SelectTrigger>
                <SelectValue placeholder="All Timeframes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Timeframes</SelectItem>
                {timeframes.map(timeframe => (
                  <SelectItem key={timeframe} value={timeframe}>{timeframe}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline">
              View Timeline
            </Button>
            <Button variant="outline">
              Export Plan
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Create New Goal Form */}
      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Strategic Goal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Goal Title</label>
                <Input placeholder="Enter goal title" />
              </div>
              <div>
                <label className="text-sm font-medium">Department</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="academic">Academic</SelectItem>
                    <SelectItem value="administration">Administration</SelectItem>
                    <SelectItem value="it">IT</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Timeframe</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeframes.map(timeframe => (
                      <SelectItem key={timeframe} value={timeframe}>{timeframe}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Priority</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium">Description</label>
                <Textarea placeholder="Describe the strategic goal..." rows={3} />
              </div>
              <div>
                <label className="text-sm font-medium">Start Date</label>
                <Input type="date" />
              </div>
              <div>
                <label className="text-sm font-medium">Target Date</label>
                <Input type="date" />
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                Cancel
              </Button>
              <Button>Create Goal</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Strategic Goals List */}
      <div className="space-y-6">
        {filteredGoals.map(goal => (
          <Card key={goal.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-xl font-semibold">{goal.title}</h3>
                    <Badge className={getPriorityColor(goal.priority)}>
                      {goal.priority} priority
                    </Badge>
                    <Badge className={getStatusColor(goal.status)}>
                      {getStatusIcon(goal.status)}
                      <span className="ml-1">{goal.status}</span>
                    </Badge>
                  </div>
                  <p className="text-gray-600">{goal.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{goal.startDate} - {goal.targetDate}</span>
                    </span>
                    <span>{goal.timeframe}</span>
                    <span>{goal.department}</span>
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

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{goal.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Objectives and Milestones */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Key Objectives</h4>
                  <ul className="space-y-2">
                    {goal.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Milestones</h4>
                  <div className="space-y-2">
                    {goal.milestones.map((milestone, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span>{milestone.title}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-500">{milestone.date}</span>
                          <Badge className={getStatusColor(milestone.status)} variant="outline">
                            {milestone.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredGoals.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No strategic goals found for the selected criteria.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default StrategicPlanningPage;
