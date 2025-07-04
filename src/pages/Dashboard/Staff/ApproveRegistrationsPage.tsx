
import React, { useState } from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { CheckCircle, XCircle, Search, Filter, Eye, FileText } from 'lucide-react';

const ApproveRegistrationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const mockRegistrations = [
    {
      id: 1,
      studentName: 'John Doe',
      studentId: 'LSSS2025001',
      grade: 9,
      section: 'A',
      submittedDate: '2025-01-10',
      status: 'pending',
      documents: ['Birth Certificate', 'Previous School Records', 'Medical Certificate'],
      guardianName: 'Jane Doe',
      guardianPhone: '+251911123456'
    },
    {
      id: 2,
      studentName: 'Sarah Wilson',
      studentId: 'LSSS2025002',
      grade: 10,
      section: 'B',
      submittedDate: '2025-01-12',
      status: 'approved',
      documents: ['Birth Certificate', 'Previous School Records'],
      guardianName: 'Mike Wilson',
      guardianPhone: '+251922654321'
    },
    {
      id: 3,
      studentName: 'Ahmed Hassan',
      studentId: 'LSSS2025003',
      grade: 11,
      section: 'A',
      submittedDate: '2025-01-08',
      status: 'rejected',
      documents: ['Birth Certificate'],
      guardianName: 'Fatima Hassan',
      guardianPhone: '+251933789012',
      rejectionReason: 'Incomplete documents - Missing previous school records'
    }
  ];

  const handleApprove = (id: number) => {
    console.log('Approving registration:', id);
    alert(`Registration ${id} has been approved successfully!`);
  };

  const handleReject = (id: number) => {
    const reason = prompt('Please enter rejection reason:');
    if (reason) {
      console.log('Rejecting registration:', id, 'Reason:', reason);
      alert(`Registration ${id} has been rejected. Reason: ${reason}`);
    }
  };

  const handleViewDetails = (id: number) => {
    console.log('Viewing details for registration:', id);
    alert(`Opening detailed view for registration ${id}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredRegistrations = mockRegistrations.filter(reg => {
    const matchesSearch = reg.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reg.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || reg.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const pendingCount = mockRegistrations.filter(r => r.status === 'pending').length;
  const approvedCount = mockRegistrations.filter(r => r.status === 'approved').length;
  const rejectedCount = mockRegistrations.filter(r => r.status === 'rejected').length;

  return (
    <DashboardLayout title="Approve Registrations">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Registration Approvals</h1>
            <p className="text-gray-600">Review and approve student registration applications</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <FileText className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">{pendingCount}</div>
              <p className="text-sm text-gray-600">Pending Approval</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{approvedCount}</div>
              <p className="text-sm text-gray-600">Approved</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{rejectedCount}</div>
              <p className="text-sm text-gray-600">Rejected</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{mockRegistrations.length}</div>
              <p className="text-sm text-gray-600">Total Applications</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by student name or ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-400" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border rounded-lg px-3 py-2"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Registrations List */}
        <Card>
          <CardHeader>
            <CardTitle>Registration Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredRegistrations.map((registration) => (
                <div key={registration.id} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">{registration.studentName}</h3>
                        <Badge className={getStatusColor(registration.status)}>
                          {registration.status.charAt(0).toUpperCase() + registration.status.slice(1)}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div>
                          <p><strong>Student ID:</strong> {registration.studentId}</p>
                          <p><strong>Grade:</strong> {registration.grade}{registration.section}</p>
                          <p><strong>Submitted:</strong> {registration.submittedDate}</p>
                        </div>
                        <div>
                          <p><strong>Guardian:</strong> {registration.guardianName}</p>
                          <p><strong>Phone:</strong> {registration.guardianPhone}</p>
                          <p><strong>Documents:</strong> {registration.documents.length} files</p>
                        </div>
                      </div>

                      {registration.status === 'rejected' && registration.rejectionReason && (
                        <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded">
                          <p className="text-sm text-red-800">
                            <strong>Rejection Reason:</strong> {registration.rejectionReason}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewDetails(registration.id)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      
                      {registration.status === 'pending' && (
                        <>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                            onClick={() => handleApprove(registration.id)}
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleReject(registration.id)}
                          >
                            <XCircle className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ApproveRegistrationsPage;
