import React, { useState } from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, Calendar, User, Pin, Filter, Search, Archive } from 'lucide-react';
import { Input } from '@/components/ui/input';

const AnnouncementsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const mockAnnouncements = [
    {
      id: 1,
      title: 'Midterm Examination Schedule Released',
      content: 'The midterm examination schedule for all grades has been published. Please check your student portal for detailed timing and room assignments. Make sure to arrive 15 minutes before your exam time.',
      sender: 'Academic Office',
      senderRole: 'Administration',
      date: '2025-01-15',
      time: '10:30 AM',
      priority: 'high',
      category: 'academic',
      target: 'All Students',
      pinned: true,
      read: false,
      tags: ['exam', 'schedule', 'important']
    },
    {
      id: 2,
      title: 'Science Fair Registration Now Open',
      content: 'Registration for the annual science fair is now open. Students can submit their project proposals until January 25th. This is a great opportunity to showcase your scientific research and creativity.',
      sender: 'Science Department',
      senderRole: 'Department',
      date: '2025-01-10',
      time: '2:15 PM',
      priority: 'medium',
      category: 'events',
      target: 'Grade 9-12',
      pinned: false,
      read: true,
      tags: ['science', 'fair', 'registration']
    },
    {
      id: 3,
      title: 'Parent-Teacher Conference Scheduled',
      content: 'Parent-teacher conferences will be held on January 20th from 9:00 AM to 4:00 PM. Please schedule your appointment through the parent portal or contact the main office.',
      sender: 'Administration',
      senderRole: 'Administration',
      date: '2025-01-08',
      time: '9:00 AM',
      priority: 'medium',
      category: 'general',
      target: 'Parents & Students',
      pinned: false,
      read: true,
      tags: ['parents', 'conference', 'meeting']
    },
    {
      id: 4,
      title: 'Library Extended Hours During Exam Week',
      content: 'The library will have extended hours during exam week (January 15-22). Open from 7:00 AM to 10:00 PM to provide students with additional study space and resources.',
      sender: 'Library Staff',
      senderRole: 'Department',
      date: '2025-01-05',
      time: '11:45 AM',
      priority: 'low',
      category: 'facilities',
      target: 'All Students',
      pinned: false,
      read: false,
      tags: ['library', 'hours', 'exam']
    },
    {
      id: 5,
      title: 'New Cafeteria Menu Available',
      content: 'We have updated our cafeteria menu with new healthy options and dietary accommodations. The new menu is effective from January 22nd. Nutritional information is available on request.',
      sender: 'Cafeteria Services',
      senderRole: 'Services',
      date: '2025-01-03',
      time: '1:20 PM',
      priority: 'low',
      category: 'general',
      target: 'All Students',
      pinned: false,
      read: true,
      tags: ['cafeteria', 'menu', 'food']
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'academic', label: 'Academic' },
    { value: 'events', label: 'Events' },
    { value: 'general', label: 'General' },
    { value: 'facilities', label: 'Facilities' }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const handleMarkAsRead = (id: number) => {
    alert(`Marked announcement ${id} as read`);
  };

  const handleArchive = (id: number) => {
    alert(`Archived announcement ${id}`);
  };

  const handlePin = (id: number) => {
    alert(`Toggled pin for announcement ${id}`);
  };

  const filteredAnnouncements = mockAnnouncements.filter(announcement => {
    const matchesSearch = announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         announcement.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         announcement.sender.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || announcement.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const unreadCount = mockAnnouncements.filter(a => !a.read).length;
  const pinnedAnnouncements = filteredAnnouncements.filter(a => a.pinned);
  const regularAnnouncements = filteredAnnouncements.filter(a => !a.pinned);

  return (
    <DashboardLayout title="Announcements">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">School Announcements</h1>
            <p className="text-gray-600">Stay updated with important school news and events</p>
          </div>
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5 text-blue-600" />
            <span className="text-sm text-gray-600">{unreadCount} unread</span>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search announcements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border rounded-md text-sm"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Bell className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold">{mockAnnouncements.length}</div>
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
                  <div className="text-2xl font-bold text-red-600">{unreadCount}</div>
                  <p className="text-sm text-gray-600">Unread</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <Pin className="h-8 w-8 text-orange-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold">{pinnedAnnouncements.length}</div>
                  <p className="text-sm text-gray-600">Pinned</p>
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
        </div>

        {/* Pinned Announcements */}
        {pinnedAnnouncements.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Pin className="h-5 w-5 text-orange-600" />
              Pinned Announcements
            </h2>
            <div className="space-y-4">
              {pinnedAnnouncements.map((announcement) => (
                <Card key={announcement.id} className="border-l-4 border-l-orange-500">
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
                          {announcement.pinned && (
                            <Pin className="h-4 w-4 text-orange-500" />
                          )}
                        </div>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {announcement.content}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{announcement.sender}</span>
                            <span className="text-xs">({announcement.senderRole})</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{announcement.date} at {announcement.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Bell className="h-4 w-4" />
                            <span>{announcement.target}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {announcement.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2 ml-4">
                        {!announcement.read && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleMarkAsRead(announcement.id)}
                          >
                            Mark as Read
                          </Button>
                        )}
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handlePin(announcement.id)}
                        >
                          <Pin className="h-3 w-3 mr-1" />
                          {announcement.pinned ? 'Unpin' : 'Pin'}
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleArchive(announcement.id)}
                        >
                          <Archive className="h-3 w-3 mr-1" />
                          Archive
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Announcements */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Announcements</h2>
          <div className="space-y-4">
            {regularAnnouncements.map((announcement) => (
              <Card key={announcement.id} className={`hover:shadow-md transition-shadow ${
                !announcement.read ? 'border-l-4 border-l-blue-500 bg-blue-50/30' : ''
              }`}>
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
                        {announcement.pinned && (
                          <Pin className="h-4 w-4 text-orange-500" />
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {announcement.content}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{announcement.sender}</span>
                          <span className="text-xs">({announcement.senderRole})</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{announcement.date} at {announcement.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bell className="h-4 w-4" />
                          <span>{announcement.target}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {announcement.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 ml-4">
                      {!announcement.read && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleMarkAsRead(announcement.id)}
                        >
                          Mark as Read
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handlePin(announcement.id)}
                      >
                        <Pin className="h-3 w-3 mr-1" />
                        {announcement.pinned ? 'Unpin' : 'Pin'}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleArchive(announcement.id)}
                      >
                        <Archive className="h-3 w-3 mr-1" />
                        Archive
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {filteredAnnouncements.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No announcements found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AnnouncementsPage;
