
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Server, Database, Shield, Wifi } from 'lucide-react';

export const AdminSystemOverview = () => {
  const systemStatus = [
    {
      component: 'Database Server',
      status: 'online',
      uptime: '99.9%',
      lastCheck: '2 mins ago',
      icon: Database
    },
    {
      component: 'Web Server',
      status: 'online',
      uptime: '99.8%',
      lastCheck: '1 min ago',
      icon: Server
    },
    {
      component: 'Security System',
      status: 'online',
      uptime: '100%',
      lastCheck: '30 secs ago',
      icon: Shield
    },
    {
      component: 'Network',
      status: 'warning',
      uptime: '98.5%',
      lastCheck: '5 mins ago',
      icon: Wifi
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'default';
      case 'warning': return 'destructive';
      case 'offline': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Server className="h-5 w-5 mr-2" />
          System Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {systemStatus.map((system, index) => (
            <div key={index} className="p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <system.icon className="h-4 w-4 mr-2 text-gray-600" />
                  <h4 className="font-medium text-gray-900">{system.component}</h4>
                </div>
                <Badge variant={getStatusColor(system.status)}>
                  {system.status}
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <span className="text-gray-500">Uptime: </span>
                  <span className="font-medium">{system.uptime}</span>
                </div>
                <div>
                  <span className="text-gray-500">Last Check: </span>
                  <span className="font-medium">{system.lastCheck}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
