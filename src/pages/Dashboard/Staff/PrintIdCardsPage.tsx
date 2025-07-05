
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { IdCard, Printer, Download, Search, Check } from 'lucide-react';

const PrintIdCardsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]);

  const grades = ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];

  const mockStudents = [
    {
      id: 1,
      name: 'John Doe',
      studentId: 'LSSS1701001',
      grade: 'Grade 9',
      section: 'A',
      photo: '/placeholder.svg',
      hasCard: false,
      lastPrinted: null
    },
    {
      id: 2,
      name: 'Jane Smith',
      studentId: 'LSSS1701002',
      grade: 'Grade 9',
      section: 'A',
      photo: '/placeholder.svg',
      hasCard: true,
      lastPrinted: '2024-01-15'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      studentId: 'LSSS1701003',
      grade: 'Grade 10',
      section: 'B',
      photo: '/placeholder.svg',
      hasCard: false,
      lastPrinted: null
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      studentId: 'LSSS1701004',
      grade: 'Grade 11',
      section: 'A',
      photo: '/placeholder.svg',
      hasCard: true,
      lastPrinted: '2024-01-10'
    }
  ];

  const filteredStudents = mockStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = !selectedGrade || student.grade === selectedGrade;
    
    return matchesSearch && matchesGrade;
  });

  const handleSelectStudent = (studentId, checked) => {
    if (checked) {
      setSelectedStudents(prev => [...prev, studentId]);
    } else {
      setSelectedStudents(prev => prev.filter(id => id !== studentId));
    }
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedStudents(filteredStudents.map(s => s.id));
    } else {
      setSelectedStudents([]);
    }
  };

  const handlePrintSelected = () => {
    console.log('Printing ID cards for students:', selectedStudents);
    // Handle print functionality
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Print ID Cards</h1>
          <p className="text-gray-600">Generate and print student ID cards</p>
        </div>
        <div className="flex items-center space-x-2">
          <IdCard className="h-6 w-6 text-blue-600" />
          <Badge variant="secondary">Registrar Portal</Badge>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{mockStudents.length}</div>
              <div className="text-sm text-gray-500">Total Students</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {mockStudents.filter(s => s.hasCard).length}
              </div>
              <div className="text-sm text-gray-500">With ID Cards</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">
                {mockStudents.filter(s => !s.hasCard).length}
              </div>
              <div className="text-sm text-gray-500">Need ID Cards</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{selectedStudents.length}</div>
              <div className="text-sm text-gray-500">Selected</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Search & Filter Students</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedGrade} onValueChange={setSelectedGrade}>
              <SelectTrigger>
                <SelectValue placeholder="Select Grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Grades</SelectItem>
                {grades.map(grade => (
                  <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                disabled={selectedStudents.length === 0}
                onClick={handlePrintSelected}
                className="flex items-center space-x-2"
              >
                <Printer className="h-4 w-4" />
                <span>Print Selected ({selectedStudents.length})</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ID Card Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Students List */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Students ({filteredStudents.length})</CardTitle>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={selectedStudents.length === filteredStudents.length && filteredStudents.length > 0}
                    onCheckedChange={handleSelectAll}
                  />
                  <span className="text-sm">Select All</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {filteredStudents.map(student => (
                  <div key={student.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        checked={selectedStudents.includes(student.id)}
                        onCheckedChange={(checked) => handleSelectStudent(student.id, checked)}
                      />
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium">{student.name}</div>
                        <div className="text-sm text-gray-500">{student.studentId}</div>
                        <div className="text-xs text-gray-400">{student.grade} - Section {student.section}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      {student.hasCard ? (
                        <div className="text-right">
                          <Badge variant="default" className="mb-1">
                            <Check className="h-3 w-3 mr-1" />
                            Has Card
                          </Badge>
                          <div className="text-xs text-gray-500">
                            Last printed: {student.lastPrinted}
                          </div>
                        </div>
                      ) : (
                        <Badge variant="outline">Needs Card</Badge>
                      )}
                      <Button variant="outline" size="sm">
                        <Printer className="h-4 w-4 mr-1" />
                        Print
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredStudents.length === 0 && (
                <div className="text-center py-8">
                  <IdCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No students found matching your criteria.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* ID Card Preview */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>ID Card Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-4 text-white">
                <div className="text-center mb-4">
                  <h3 className="font-bold text-sm">ShumAbo Secondary School</h3>
                  <p className="text-xs opacity-90">Student ID Card</p>
                </div>
                
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-16 h-20 bg-white rounded border-2 border-blue-200 flex items-center justify-center">
                    <span className="text-xs text-gray-500">Photo</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">John Doe</div>
                    <div className="text-xs opacity-90">LSSS1701001</div>
                    <div className="text-xs opacity-75">Grade 9 - Section A</div>
                  </div>
                </div>
                
                <div className="border-t border-blue-400 pt-2">
                  <div className="text-xs text-center opacity-75">
                    Valid for Academic Year 2024-2025
                  </div>
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Template
                </Button>
                <Button className="w-full">
                  <Printer className="h-4 w-4 mr-2" />
                  Print Sample
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrintIdCardsPage;
