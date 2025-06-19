
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, BookOpen, Calendar } from 'lucide-react';

const WelcomeCard = () => {
  const { profile } = useAuth();

  const getRoleSpecificContent = () => {
    switch (profile?.role) {
      case 'student':
        return {
          icon: GraduationCap,
          title: `Welcome back, ${profile.fname}!`,
          subtitle: `Continue your learning journey • Grade ${profile.unique_id}`,
          color: 'bg-blue-500'
        };
      case 'family':
        return {
          icon: Users,
          title: `Welcome, ${profile.fname}!`,
          subtitle: 'Stay connected with your child\'s education progress',
          color: 'bg-green-500'
        };
      case 'teacher':
        return {
          icon: BookOpen,
          title: `Good day, ${profile.fname}!`,
          subtitle: 'Ready to inspire and educate your students',
          color: 'bg-purple-500'
        };
      case 'registrar':
        return {
          icon: Calendar,
          title: `Hello, ${profile.fname}!`,
          subtitle: 'Manage student registrations and academic records',
          color: 'bg-orange-500'
        };
      case 'admin':
        return {
          icon: Users,
          title: `Welcome, ${profile.fname}!`,
          subtitle: 'Oversee school operations and manage systems',
          color: 'bg-red-500'
        };
      case 'director':
        return {
          icon: GraduationCap,
          title: `Good day, ${profile.fname}!`,
          subtitle: 'Lead the school towards academic excellence',
          color: 'bg-indigo-500'
        };
      default:
        return {
          icon: GraduationCap,
          title: `Welcome, ${profile?.fname}!`,
          subtitle: 'Access your school management dashboard',
          color: 'bg-gray-500'
        };
    }
  };

  const content = getRoleSpecificContent();
  const IconComponent = content.icon;

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex items-center">
          <div className={`${content.color} p-3 rounded-full`}>
            <IconComponent className="h-8 w-8 text-white" />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-gray-900">
              {content.title}
            </h2>
            <p className="text-gray-600 mt-1">
              {content.subtitle}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;
