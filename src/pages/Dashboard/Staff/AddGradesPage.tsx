
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Save, Plus } from 'lucide-react';

const AddGradesPage = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [grades, setGrades] = useState([]);

  const classes = ['Grade 9A', 'Grade 9B', 'Grade 10A', 'Grade 10B', 'Grade 11A', 'Grade 11B'];
  const courses = ['Mathematics', 'English', 'Biology', 'Chemistry', 'Physics', 'History'];

  const mockStudents = [
    { id: 1, name: 'John Doe', studentId: 'LSSS1701001' },
    { id: 2, name: 'Jane Smith', studentId: 'LSSS1701002' },
    { id: 3, name: 'Mike Johnson', studentId: 'LSSS1701003' },
    { id: 4, name: 'Sarah Wilson', studentId: 'LSSS1701004' },
  ];

  const handleGradeChange = (studentId, field, value) => {
    setGrades(prev => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        [field]: value
      }
    }));
  };

  const calculateTotal = (studentGrades) => {
    if (!studentGrades) return 0;
    const { quiz = 0, assignment = 0, midterm = 0, finalExam = 0 } = studentGrades;
    return Number(quiz) + Number(assignment) + Number(midterm) + Number(finalExam);
  };

  const getLetterGrade = (total) => {
    if (total >= 90) return 'A';
    if (total >= 80) return 'B';
    if (total >= 70) return 'C';
    if (total >= 60) return 'D';
    return 'F';
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Add Grades</h1>
          <p className="text-gray-600">Record and manage student grades</p>
        </div>
        <div className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <Badge variant="secondary">Teacher Portal</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Select Class & Course</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="class">Class</Label>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a class" />
                </SelectTrigger>
                <SelectContent>
                  {classes.map(cls => (
                    <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="course">Course</Label>
              <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map(course => (
                    <SelectItem key={course} value={course}>{course}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Grade Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Quiz (20%)</span>
                <span>0-20 points</span>
              </div>
              <div className="flex justify-between">
                <span>Assignment (20%)</span>
                <span>0-20 points</span>
              </div>
              <div className="flex justify-between">
                <span>Midterm (30%)</span>
                <span>0-30 points</span>
              </div>
              <div className="flex justify-between">
                <span>Final Exam (30%)</span>
                <span>0-30 points</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {selectedClass && selectedCourse && (
        <Card>
          <CardHeader>
            <CardTitle>Student Grades - {selectedClass} ({selectedCourse})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Student</th>
                    <th className="text-center p-2">Quiz (20)</th>
                    <th className="text-center p-2">Assignment (20)</th>
                    <th className="text-center p-2">Midterm (30)</th>
                    <th className="text-center p-2">Final (30)</th>
                    <th className="text-center p-2">Total</th>
                    <th className="text-center p-2">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {mockStudents.map(student => {
                    const studentGrades = grades[student.id] || {};
                    const total = calculateTotal(studentGrades);
                    const letterGrade = getLetterGrade(total);
                    
                    return (
                      <tr key={student.id} className="border-b">
                        <td className="p-2">
                          <div>
                            <div className="font-medium">{student.name}</div>
                            <div className="text-sm text-gray-500">{student.studentId}</div>
                          </div>
                        </td>
                        <td className="p-2">
                          <Input
                            type="number"
                            min="0"
                            max="20"
                            className="w-16 text-center"
                            value={studentGrades.quiz || ''}
                            onChange={(e) => handleGradeChange(student.id, 'quiz', e.target.value)}
                          />
                        </td>
                        <td className="p-2">
                          <Input
                            type="number"
                            min="0"
                            max="20"
                            className="w-16 text-center"
                            value={studentGrades.assignment || ''}
                            onChange={(e) => handleGradeChange(student.id, 'assignment', e.target.value)}
                          />
                        </td>
                        <td className="p-2">
                          <Input
                            type="number"
                            min="0"
                            max="30"
                            className="w-16 text-center"
                            value={studentGrades.midterm || ''}
                            onChange={(e) => handleGradeChange(student.id, 'midterm', e.target.value)}
                          />
                        </td>
                        <td className="p-2">
                          <Input
                            type="number"
                            min="0"
                            max="30"
                            className="w-16 text-center"
                            value={studentGrades.finalExam || ''}
                            onChange={(e) => handleGradeChange(student.id, 'finalExam', e.target.value)}
                          />
                        </td>
                        <td className="p-2 text-center font-medium">
                          {total}/100
                        </td>
                        <td className="p-2 text-center">
                          <Badge variant={letterGrade === 'F' ? 'destructive' : 'default'}>
                            {letterGrade}
                          </Badge>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="flex justify-end mt-6">
              <Button className="flex items-center space-x-2">
                <Save className="h-4 w-4" />
                <span>Save Grades</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AddGradesPage;
