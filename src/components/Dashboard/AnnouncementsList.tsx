
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
  priority?: 'low' | 'normal' | 'high' | 'urgent';
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
      // Fetch announcements from the existing table structure
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
            body: 'This is a sample announcement to show how the system works.',
            priority: 'normal',
            created_at: new Date().toISOString(),
            sender_id: null
          },
          {
            id: '2',
            title: 'Midterm Exams Schedule',
            body: 'Midterm exams will begin next week. Please check your timetable for specific dates.',
            priority: 'high',
            created_at: new Date().toISOString(),
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
          priority: 'normal',
          created_at: new Date().toISOString(),
          sender_id: null
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getPriorityIcon = (priority: string = 'normal') => {
    switch (priority) {
      case 'urgent':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'high':
        return <Bell className="h-4 w-4 text-orange-500" />;
      case 'normal':
        return <Info className="h-4 w-4 text-blue-500" />;
      case 'low':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return <Info className="h-4 w-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string = 'normal') => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'normal':
        return 'bg-blue-100 text-blue-800';
      case 'low':
        return 'bg-green-100 text-green-800';
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
          Announcements
        </CardTitle>
      </CardHeader>
      <CardContent>
        {announcements.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No announcements available.</p>
        ) : (
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getPriorityIcon(announcement.priority)}
                    <h3 className="font-medium">{announcement.title}</h3>
                  </div>
                  <Badge className={getPriorityColor(announcement.priority)}>
                    {announcement.priority || 'normal'}
                  </Badge>
                </div>
                
                <p className="text-gray-700 mb-3">{announcement.body}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>By: School Administration</span>
                  <span>
                    {new Date(announcement.created_at).toLocaleDateString()}
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
