
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    uniqueId: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0056b3] to-[#004494] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* School Logo & Name */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-3 text-white hover:text-blue-200 transition-colors">
            <div className="bg-white p-3 rounded-full">
              <GraduationCap className="h-8 w-8 text-[#0056b3]" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold">ShumAbo</h1>
              <p className="text-sm text-blue-200">Secondary School</p>
            </div>
          </Link>
        </div>

        {/* Login Form */}
        <Card className="backdrop-blur-lg bg-white/95 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Portal Login
            </CardTitle>
            <p className="text-gray-600">
              Enter your credentials to access your dashboard
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="uniqueId">Unique ID</Label>
                <Input
                  id="uniqueId"
                  name="uniqueId"
                  type="text"
                  placeholder="e.g., LSSS1701000"
                  value={formData.uniqueId}
                  onChange={handleInputChange}
                  className="h-12"
                  required
                />
                <p className="text-sm text-gray-500">
                  Use your school-issued unique ID
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="h-12 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 bg-[#0056b3] hover:bg-[#004494] text-white font-semibold"
              >
                Login to Portal
              </Button>
            </form>

            {/* Role Examples */}
            <div className="border-t pt-4">
              <p className="text-sm text-gray-600 mb-3">Example login formats:</p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Student:</span>
                  <span className="font-mono">LSSS1701000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Teacher:</span>
                  <span className="font-mono">LSST1701000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Admin:</span>
                  <span className="font-mono">LSSA1701000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Family:</span>
                  <span className="font-mono">LSSF1701000</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="text-center space-y-2">
              <a href="#" className="text-sm text-[#0056b3] hover:underline">
                Forgot your password?
              </a>
              <div className="text-sm text-gray-500">
                Need help? Contact the registrar's office
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back to Website */}
        <div className="text-center mt-6">
          <Link 
            to="/" 
            className="text-white hover:text-blue-200 transition-colors text-sm"
          >
            ← Back to School Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
