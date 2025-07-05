
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Calendar } from 'lucide-react';

export const AdminRecentActivity = () => {
  const activities = [
    {
      id: 1,
      action: 'New user registration',
      user: 'John Smith',
      role: 'Teacher',
      time: '10 minutes ago',
      status: 'pending'
    },
    {
      id: 2,
      action: 'Course updated',
      user: 'Dr. Johnson',
      role: 'Admin',
      time: '25 minutes ago',
      status: 'completed'
    },
    {
      id: 3,
      action: 'Grade submitted',
      user: 'Prof. Williams',
      role: 'Teacher',
      time: '1 hour ago',
      status: 'completed'
    },
    {
      id: 4,
      action: 'Student enrollment',
      user: 'Mary Brown',
      role: 'Registrar',
      time: '2 hours ago',
      status: 'completed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'destructive';
      case 'completed': return 'default';
      default: return 'secondary';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Activity className="h-5 w-5 mr-2" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="p-3 bg-gray-50 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-medium text-gray-900">{activity.action}</h4>
                  <p className="text-sm text-gray-600">
                    by {activity.user} ({activity.role})
                  </p>
                </div>
                <Badge variant={getStatusColor(activity.status)}>
                  {activity.status}
                </Badge>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="h-3 w-3 mr-1" />
                {activity.time}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
