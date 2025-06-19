
import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, AlertCircle, Info, CheckCircle } from 'lucide-react';

interface Announcement {
  id: string;
  title: string;
  body: string;
  target?: string;
  created_at: string;
  sender_id?: string;
}

const AnnouncementsList = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const { profile } = useAuth();

  useEffect(() => {
    fetchAnnouncements();
  }, [profile]);

  const fetchAnnouncements = async () => {
    if (!profile) return;

    try {
      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) {
        console.error('Error fetching announcements:', error);
        // Set some mock data for development
        setAnnouncements([
          {
            id: '1',
            title: 'Welcome to the School Management System',
            body: 'We are excited to announce the launch of our new comprehensive school management system. This platform will help streamline all academic and administrative processes.',
            target: 'all',
            created_at: new Date().toISOString(),
            sender_id: null
          },
          {
            id: '2',
            title: 'Midterm Examinations Schedule',
            body: 'Midterm examinations will commence on December 15th, 2024. Please review your timetables and prepare accordingly. Examination halls and seating arrangements will be posted next week.',
            target: 'students',
            created_at: new Date(Date.now() - 86400000).toISOString(),
            sender_id: null
          },
          {
            id: '3',
            title: 'Parent-Teacher Conference',
            body: 'We invite all parents to attend the upcoming parent-teacher conference scheduled for December 20th, 2024. This is an excellent opportunity to discuss your child\'s academic progress.',
            target: 'family',
            created_at: new Date(Date.now() - 172800000).toISOString(),
            sender_id: null
          }
        ]);
      } else {
        setAnnouncements(data || []);
      }
    } catch (error) {
      console.error('Error fetching announcements:', error);
      // Set mock data as fallback
      setAnnouncements([
        {
          id: '1',
          title: 'Welcome to the School Management System',
          body: 'This is a sample announcement to show how the system works.',
          target: 'all',
          created_at: new Date().toISOString(),
          sender_id: null
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getPriorityIcon = (target: string = 'all') => {
    switch (target) {
      case 'students':
        return <CheckCircle className="h-4 w-4 text-blue-500" />;
      case 'family':
        return <Info className="h-4 w-4 text-green-500" />;
      case 'staff':
        return <AlertCircle className="h-4 w-4 text-orange-500" />;
      default:
        return <Bell className="h-4 w-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (target: string = 'all') => {
    switch (target) {
      case 'students':
        return 'bg-blue-100 text-blue-800';
      case 'family':
        return 'bg-green-100 text-green-800';
      case 'staff':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return <div className="animate-pulse">Loading announcements...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bell className="h-5 w-5 mr-2" />
          Recent Announcements
        </CardTitle>
      </CardHeader>
      <CardContent>
        {announcements.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No announcements available.</p>
        ) : (
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getPriorityIcon(announcement.target)}
                    <h3 className="font-medium text-gray-900">{announcement.title}</h3>
                  </div>
                  <Badge className={getPriorityColor(announcement.target)}>
                    {announcement.target || 'general'}
                  </Badge>
                </div>
                
                <p className="text-gray-700 mb-3 leading-relaxed">{announcement.body}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>By: School Administration</span>
                  <span>
                    {new Date(announcement.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AnnouncementsList;
