
import React from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, Calendar, User } from 'lucide-react';

const AnnouncementsPage = () => {
  const mockAnnouncements = [
    {
      id: 1,
      title: 'Midterm Examination Schedule Released',
      content: 'The midterm examination schedule for all grades has been published. Please check your student portal for detailed timing and room assignments.',
      sender: 'Academic Office',
      date: '2025-01-15',
      priority: 'high',
      target: 'All Students'
    },
    {
      id: 2,
      title: 'Science Fair Registration Open',
      content: 'Registration for the annual science fair is now open. Students can submit their project proposals until January 25th.',
      sender: 'Science Department',
      date: '2025-01-10',
      priority: 'medium',
      target: 'Grade 9-12'
    },
    {
      id: 3,
      title: 'Parent-Teacher Conference',
      content: 'Parent-teacher conferences will be held on January 20th. Please schedule your appointment through the parent portal.',
      sender: 'Administration',
      date: '2025-01-08',
      priority: 'medium',
      target: 'Parents'
    },
    {
      id: 4,
      title: 'Library Extended Hours',
      content: 'The library will have extended hours during exam week. Open from 7 AM to 10 PM.',
      sender: 'Library',
      date: '2025-01-05',
      priority: 'low',
      target: 'All Students'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <DashboardLayout title="Announcements">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Announcements</h1>
            <p className="text-gray-600">Stay updated with school news and events</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Bell className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-sm text-gray-600">Total</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <Bell className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">3</div>
                  <p className="text-sm text-gray-600">High Priority</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-sm text-gray-600">This Week</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <User className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-sm text-gray-600">Unread</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Announcements List */}
        <div className="space-y-4">
          {mockAnnouncements.map((announcement) => (
            <Card key={announcement.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {announcement.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(announcement.priority)}`}>
                        {announcement.priority.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {announcement.content}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{announcement.sender}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{announcement.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bell className="h-4 w-4" />
                        <span>{announcement.target}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Mark as Read
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnnouncementsPage;
