
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CreditCard, Search, Download, DollarSign, AlertCircle, CheckCircle, Clock } from 'lucide-react';

const FeeCollectionPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const grades = ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];
  const paymentStatuses = ['paid', 'pending', 'overdue', 'partial'];

  const mockFeeData = [
    {
      id: 1,
      studentName: 'John Doe',
      studentId: 'LSSS1701001',
      grade: 'Grade 9',
      section: 'A',
      totalFee: 5000,
      paidAmount: 5000,
      balance: 0,
      status: 'paid',
      dueDate: '2024-01-15',
      lastPayment: '2024-01-10',
      paymentMethod: 'Bank Transfer'
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      studentId: 'LSSS1701002',
      grade: 'Grade 9',
      section: 'A',
      totalFee: 5000,
      paidAmount: 3000,
      balance: 2000,
      status: 'partial',
      dueDate: '2024-01-15',
      lastPayment: '2024-01-05',
      paymentMethod: 'Cash'
    },
    {
      id: 3,
      studentName: 'Mike Johnson',
      studentId: 'LSSS1701003',
      grade: 'Grade 10',
      section: 'B',
      totalFee: 5500,
      paidAmount: 0,
      balance: 5500,
      status: 'overdue',
      dueDate: '2024-01-10',
      lastPayment: null,
      paymentMethod: null
    },
    {
      id: 4,
      studentName: 'Sarah Wilson',
      studentId: 'LSSS1701004',
      grade: 'Grade 11',
      section: 'A',
      totalFee: 6000,
      paidAmount: 0,
      balance: 6000,
      status: 'pending',
      dueDate: '2024-01-20',
      lastPayment: null,
      paymentMethod: null
    }
  ];

  const filteredData = mockFeeData.filter(record => {
    const matchesSearch = record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = !selectedGrade || record.grade === selectedGrade;
    const matchesStatus = !selectedStatus || record.status === selectedStatus;
    
    return matchesSearch && matchesGrade && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'partial': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'paid': return <CheckCircle className="h-4 w-4" />;
      case 'partial': return <Clock className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'overdue': return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getFinancialStats = () => {
    const totalFees = filteredData.reduce((sum, record) => sum + record.totalFee, 0);
    const totalPaid = filteredData.reduce((sum, record) => sum + record.paidAmount, 0);
    const totalBalance = filteredData.reduce((sum, record) => sum + record.balance, 0);
    const collectionRate = totalFees > 0 ? ((totalPaid / totalFees) * 100).toFixed(1) : 0;
    
    return { totalFees, totalPaid, totalBalance, collectionRate };
  };

  const stats = getFinancialStats();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Fee Collection</h1>
          <p className="text-gray-600">Manage student fee payments and collections</p>
        </div>
        <div className="flex items-center space-x-2">
          <CreditCard className="h-6 w-6 text-blue-600" />
          <Badge variant="secondary">Registrar Portal</Badge>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Total Fees</div>
                <div className="text-2xl font-bold text-blue-600">
                  {stats.totalFees.toLocaleString()} ETB
                </div>
              </div>
              <DollarSign className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Collected</div>
                <div className="text-2xl font-bold text-green-600">
                  {stats.totalPaid.toLocaleString()} ETB
                </div>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Outstanding</div>
                <div className="text-2xl font-bold text-red-600">
                  {stats.totalBalance.toLocaleString()} ETB
                </div>
              </div>
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Collection Rate</div>
                <div className="text-2xl font-bold text-purple-600">
                  {stats.collectionRate}%
                </div>
              </div>
              <div className="text-purple-600">%</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search & Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search student..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedGrade} onValueChange={setSelectedGrade}>
              <SelectTrigger>
                <SelectValue placeholder="All Grades" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Grades</SelectItem>
                {grades.map(grade => (
                  <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger>
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Status</SelectItem>
                {paymentStatuses.map(status => (
                  <SelectItem key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Fee Records */}
      <Card>
        <CardHeader>
          <CardTitle>Student Fee Records ({filteredData.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Student</th>
                  <th className="text-center p-3">Grade</th>
                  <th className="text-center p-3">Total Fee</th>
                  <th className="text-center p-3">Paid</th>
                  <th className="text-center p-3">Balance</th>
                  <th className="text-center p-3">Status</th>
                  <th className="text-center p-3">Due Date</th>
                  <th className="text-center p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map(record => (
                  <tr key={record.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <div>
                        <div className="font-medium">{record.studentName}</div>
                        <div className="text-sm text-gray-500">{record.studentId}</div>
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      {record.grade} - {record.section}
                    </td>
                    <td className="p-3 text-center font-medium">
                      {record.totalFee.toLocaleString()} ETB
                    </td>
                    <td className="p-3 text-center text-green-600 font-medium">
                      {record.paidAmount.toLocaleString()} ETB
                    </td>
                    <td className="p-3 text-center">
                      <span className={record.balance > 0 ? 'text-red-600 font-medium' : 'text-gray-500'}>
                        {record.balance.toLocaleString()} ETB
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <Badge className={`${getStatusColor(record.status)} flex items-center space-x-1 w-fit mx-auto`}>
                        {getStatusIcon(record.status)}
                        <span>{record.status}</span>
                      </Badge>
                    </td>
                    <td className="p-3 text-center text-sm">
                      {record.dueDate}
                    </td>
                    <td className="p-3 text-center">
                      <div className="flex space-x-2 justify-center">
                        <Button variant="outline" size="sm">
                          Record Payment
                        </Button>
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredData.length === 0 && (
            <div className="text-center py-8">
              <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No fee records found for the selected criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Payment Reminders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span>Overdue payments</span>
                <Badge variant="destructive">
                  {mockFeeData.filter(r => r.status === 'overdue').length}
                </Badge>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Due this week</span>
                <Badge variant="secondary">3</Badge>
              </div>
              <Button className="w-full" variant="outline">
                Send Reminders
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Payment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Bank Transfer</span>
                <span>60%</span>
              </div>
              <div className="flex justify-between">
                <span>Cash</span>
                <span>30%</span>
              </div>
              <div className="flex justify-between">
                <span>Mobile Money</span>
                <span>10%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Generate Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" className="w-full">
                Monthly Collection Report
              </Button>
              <Button variant="outline" className="w-full">
                Outstanding Fees Report
              </Button>
              <Button variant="outline" className="w-full">
                Payment History Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeeCollectionPage;
