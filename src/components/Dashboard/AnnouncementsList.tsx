
import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, AlertCircle, Info, CheckCircle } from 'lucide-react';

interface Announcement {
  id: string;
  title: string;
  content: string;
  priority: 'low' | 'normal' | 'high' | 'urgent';
  published_at: string;
  expires_at: string | null;
  profiles: {
    full_name: string;
  };
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
        .select(`
          *,
          profiles:author_id (
            full_name
          )
        `)
        .contains('target_roles', [profile.role])
        .or(`expires_at.is.null,expires_at.gt.${new Date().toISOString()}`)
        .order('published_at', { ascending: false });

      if (error) throw error;
      setAnnouncements(data || []);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPriorityIcon = (priority: string) => {
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

  const getPriorityColor = (priority: string) => {
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
                    {announcement.priority}
                  </Badge>
                </div>
                
                <p className="text-gray-700 mb-3">{announcement.content}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>By: {announcement.profiles?.full_name}</span>
                  <span>
                    {new Date(announcement.published_at).toLocaleDateString()}
                  </span>
                </div>
                
                {announcement.expires_at && (
                  <div className="mt-2 text-sm text-gray-500">
                    Expires: {new Date(announcement.expires_at).toLocaleDateString()}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AnnouncementsList;
