
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, Calendar } from 'lucide-react';

export const StudentAnnouncementsList = () => {
  const announcements = [
    {
      id: 1,
      title: 'Mid-term Examinations Schedule',
      content: 'Mid-term examinations will begin on March 15th. Please check your individual timetables.',
      date: '2024-03-10',
      priority: 'high',
      sender: 'Academic Office'
    },
    {
      id: 2,
      title: 'Library Extended Hours',
      content: 'The library will be open until 10 PM during exam period to support student studies.',
      date: '2024-03-09',
      priority: 'medium',
      sender: 'Library Services'
    },
    {
      id: 3,
      title: 'Sports Day Registration',
      content: 'Registration for annual sports day is now open. Sign up at the sports office.',
      date: '2024-03-08',
      priority: 'low',
      sender: 'Sports Department'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bell className="h-5 w-5 mr-2" />
          Recent Announcements
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{announcement.title}</h4>
                <Badge variant={getPriorityColor(announcement.priority)}>
                  {announcement.priority}
                </Badge>
              </div>
              <p className="text-gray-600 text-sm mb-3">{announcement.content}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>From: {announcement.sender}</span>
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {announcement.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
