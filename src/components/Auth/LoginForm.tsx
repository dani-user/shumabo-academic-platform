
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, User, Lock } from 'lucide-react';

const LoginForm = () => {
  const [uniqueId, setUniqueId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signIn(uniqueId, password);
    
    if (!error) {
      navigate('/');
    }
    
    setLoading(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-blue-900">
          Login to School Portal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="uniqueId">Unique ID</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="uniqueId"
                type="text"
                placeholder="e.g., LSSS1701001"
                value={uniqueId}
                onChange={(e) => setUniqueId(e.target.value)}
                className="pl-10"
                required
              />
            </div>
            <p className="text-sm text-gray-500">
              Use your school-issued unique ID
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </Button>
        </form>

        {/* Test Credentials */}
        <div className="border-t pt-4 mt-4">
          <p className="text-sm text-gray-600 mb-3">Test credentials (password: password123):</p>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-500">Admin:</span>
              <span className="font-mono">LSSA1701001</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Student:</span>
              <span className="font-mono">LSSS1701001</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Teacher:</span>
              <span className="font-mono">LSST1701001</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Family:</span>
              <span className="font-mono">LSSF1701001</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
