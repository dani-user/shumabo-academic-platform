
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';

export const StudentUpcomingEvents = () => {
  const upcomingEvents = [
    {
      title: 'Mathematics Quiz',
      date: '2024-03-12',
      time: '10:00 AM',
      location: 'Room 201',
      type: 'Assessment'
    },
    {
      title: 'Science Project Submission',
      date: '2024-03-15',
      time: '11:59 PM',
      location: 'Online Portal',
      type: 'Assignment'
    },
    {
      title: 'Parent-Teacher Meeting',
      date: '2024-03-18',
      time: '2:00 PM',
      location: 'Main Hall',
      type: 'Meeting'
    },
    {
      title: 'Sports Day Practice',
      date: '2024-03-20',
      time: '4:00 PM',
      location: 'Sports Ground',
      type: 'Activity'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calendar className="h-5 w-5 mr-2" />
          Upcoming Events
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="p-3 bg-gray-50 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-gray-900">{event.title}</h4>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {event.type}
                </span>
              </div>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-2" />
                  {event.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-2" />
                  {event.time}
                </div>
                <div className="flex items-center">
                  <span className="h-3 w-3 mr-2">📍</span>
                  {event.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
