
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookOpen, Plus, Edit, Eye, Calendar, Clock } from 'lucide-react';

const LessonPlansPage = () => {
  const [selectedWeek, setSelectedWeek] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const classes = ['Grade 9A', 'Grade 9B', 'Grade 10A', 'Grade 10B', 'Grade 11A', 'Grade 11B'];
  const weeks = [
    'Week 1 (Jan 1-7, 2024)',
    'Week 2 (Jan 8-14, 2024)',
    'Week 3 (Jan 15-21, 2024)',
    'Week 4 (Jan 22-28, 2024)',
  ];

  const mockLessonPlans = [
    {
      id: 1,
      subject: 'Mathematics',
      topic: 'Linear Equations',
      week: 'Week 1 (Jan 1-7, 2024)',
      class: 'Grade 9A',
      duration: '45 minutes',
      objectives: [
        'Understand the concept of linear equations',
        'Solve simple linear equations',
        'Apply linear equations to real-world problems'
      ],
      activities: [
        'Introduction to linear equations (10 min)',
        'Worked examples (15 min)',
        'Student practice (15 min)',
        'Review and homework assignment (5 min)'
      ],
      resources: ['Textbook Chapter 3', 'Calculator', 'Worksheets'],
      assessment: 'Class participation and homework completion',
      status: 'completed'
    },
    {
      id: 2,
      subject: 'English',
      topic: 'Creative Writing',
      week: 'Week 2 (Jan 8-14, 2024)',
      class: 'Grade 10A',
      duration: '50 minutes',
      objectives: [
        'Develop creative writing skills',
        'Use descriptive language effectively',
        'Structure short stories properly'
      ],
      activities: [
        'Writing prompt discussion (10 min)',
        'Individual writing time (25 min)',
        'Peer review session (10 min)',
        'Sharing and feedback (5 min)'
      ],
      resources: ['Writing prompts', 'Peer review checklist'],
      assessment: 'Written story and peer feedback participation',
      status: 'in-progress'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lesson Plans</h1>
          <p className="text-gray-600">Create and manage your lesson plans</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button 
            onClick={() => setShowCreateForm(true)}
            className="flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>New Lesson Plan</span>
          </Button>
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <Badge variant="secondary">Teacher Portal</Badge>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Filter Plans</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Week</label>
              <Select value={selectedWeek} onValueChange={setSelectedWeek}>
                <SelectTrigger>
                  <SelectValue placeholder="Select week" />
                </SelectTrigger>
                <SelectContent>
                  {weeks.map(week => (
                    <SelectItem key={week} value={week}>{week}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Class</label>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  {classes.map(cls => (
                    <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">12</div>
                <div className="text-sm text-gray-500">Total Plans</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">8</div>
                <div className="text-sm text-gray-500">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">3</div>
                <div className="text-sm text-gray-500">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">1</div>
                <div className="text-sm text-gray-500">Pending</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Lesson Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="Enter subject" />
              </div>
              <div>
                <label className="text-sm font-medium">Topic</label>
                <Input placeholder="Enter topic" />
              </div>
              <div>
                <label className="text-sm font-medium">Class</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    {classes.map(cls => (
                      <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Duration</label>
                <Input placeholder="e.g., 45 minutes" />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium">Learning Objectives</label>
                <Textarea placeholder="List the learning objectives..." rows={3} />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium">Activities</label>
                <Textarea placeholder="Describe the lesson activities..." rows={4} />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium">Resources Needed</label>
                <Textarea placeholder="List required resources..." rows={2} />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium">Assessment Method</label>
                <Textarea placeholder="How will you assess student learning?" rows={2} />
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                Cancel
              </Button>
              <Button>Save Lesson Plan</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">My Lesson Plans</h2>
        {mockLessonPlans.map(plan => (
          <Card key={plan.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-semibold">{plan.subject} - {plan.topic}</h3>
                    <Badge variant={plan.status === 'completed' ? 'default' : plan.status === 'in-progress' ? 'secondary' : 'outline'}>
                      {plan.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{plan.week}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{plan.duration}</span>
                    </span>
                    <span>{plan.class}</span>
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
                <div>
                  <h4 className="font-medium text-sm mb-2">Objectives:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {plan.objectives.map((obj, index) => (
                      <li key={index}>• {obj}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Activities:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {plan.activities.map((activity, index) => (
                      <li key={index}>• {activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LessonPlansPage;
