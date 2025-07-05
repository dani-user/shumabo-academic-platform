
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface AdminStatsCardProps {
  title: string;
  value: string;
  icon: string;
  color: 'blue' | 'green' | 'orange' | 'red';
}

export const AdminStatsCard = ({ title, value, icon, color }: AdminStatsCardProps) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200',
    red: 'bg-red-50 text-red-600 border-red-200',
  };

  return (
    <Card className={`${colorClasses[color]} border-2`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium opacity-80">{title}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
          </div>
          <div className="text-2xl">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
};
