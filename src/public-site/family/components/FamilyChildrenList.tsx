
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, BookOpen, Calendar } from 'lucide-react';

export const FamilyChildrenList = () => {
  const children = [
    {
      id: 1,
      name: 'Sarah Johnson',
      studentId: 'LSSS1701001',
      grade: '10A',
      gpa: '3.85',
      attendance: '96%',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Michael Johnson',
      studentId: 'LSSS1701002',
      grade: '8B',
      gpa: '3.62',
      attendance: '92%',
      status: 'Active'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Users className="h-5 w-5 mr-2" />
          My Children
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {children.map((child) => (
            <div key={child.id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{child.name}</h4>
                  <p className="text-sm text-gray-500">ID: {child.studentId}</p>
                </div>
                <Badge variant="default">{child.status}</Badge>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center">
                  <BookOpen className="h-3 w-3 mr-1 text-blue-600" />
                  <span className="text-gray-600">Grade: </span>
                  <span className="font-medium ml-1">{child.grade}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600">GPA: </span>
                  <span className="font-medium ml-1">{child.gpa}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1 text-green-600" />
                  <span className="text-gray-600">Attend: </span>
                  <span className="font-medium ml-1">{child.attendance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
