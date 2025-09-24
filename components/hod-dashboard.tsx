"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Users, TrendingDown, Calendar, Eye, UserPlus } from "lucide-react"
import { ScheduleMeetingModal } from "./schedule-meeting-modal"
import { SendMessageModal } from "./send-message-modal"

// Mock data for demonstration
const kpiData = {
  totalStudents: 240,
  atRiskPercentage: 18,
  criticalCount: 12,
  moderateRisk: 31,
}

const classData = [
  { year: "FE", total: 60, atRisk: 8, critical: 2 },
  { year: "SE", total: 60, atRisk: 12, critical: 4 },
  { year: "TE", total: 60, total: 60, atRisk: 15, critical: 4 },
  { year: "BE", total: 60, atRisk: 8, critical: 2 },
]

const criticalStudents = [
  {
    name: "Arjun Sharma",
    year: "SE",
    riskLevel: "Critical",
    attendance: 45,
    fees: "Pending",
    lastCounseling: "2 weeks ago",
  },
  {
    name: "Priya Patel",
    year: "TE",
    riskLevel: "Critical",
    attendance: 52,
    fees: "Paid",
    lastCounseling: "1 week ago",
  },
  { name: "Rahul Kumar", year: "FE", riskLevel: "Critical", attendance: 38, fees: "Pending", lastCounseling: "Never" },
  {
    name: "Sneha Reddy",
    year: "BE",
    riskLevel: "Critical",
    attendance: 41,
    fees: "Paid",
    lastCounseling: "3 days ago",
  },
]

export function HODDashboard() {
  const [scheduleMeetingOpen, setScheduleMeetingOpen] = useState(false)
  const [sendMessageOpen, setSendMessageOpen] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState<any>(null)

  const handleScheduleMeeting = (student?: any) => {
    setSelectedStudent(student)
    setScheduleMeetingOpen(true)
  }

  const handleSendMessage = (student?: any) => {
    setSelectedStudent(student)
    setSendMessageOpen(true)
  }

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpiData.totalStudents}</div>
            <p className="text-xs text-muted-foreground">Across all years</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">At Risk</CardTitle>
            <TrendingDown className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">{kpiData.atRiskPercentage}%</div>
            <p className="text-xs text-muted-foreground">{kpiData.moderateRisk} students</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Cases</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">{kpiData.criticalCount}</div>
            <p className="text-xs text-muted-foreground">Immediate attention needed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interventions</CardTitle>
            <Calendar className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">24</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Class Heatmap */}
        <Card>
          <CardHeader>
            <CardTitle>Risk Distribution by Year</CardTitle>
            <CardDescription>Overview of at-risk students across all academic years</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {classData.map((classItem) => (
              <div key={classItem.year} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">
                    {classItem.year} ({classItem.total} students)
                  </span>
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="text-yellow-600">
                      {classItem.atRisk} at risk
                    </Badge>
                    <Badge variant="destructive">{classItem.critical} critical</Badge>
                  </div>
                </div>
                <Progress value={(classItem.atRisk / classItem.total) * 100} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Critical Students */}
        <Card>
          <CardHeader>
            <CardTitle>Critical Students</CardTitle>
            <CardDescription>Students requiring immediate intervention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {criticalStudents.map((student, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{student.name}</span>
                      <Badge variant="outline">{student.year}</Badge>
                      <Badge variant="destructive">Critical</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Attendance: {student.attendance}% • Fees: {student.fees}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <UserPlus className="h-3 w-3 mr-1" />
                      Assign
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleSendMessage(student)}>
                      Message
                    </Button>
                    <Button size="sm" onClick={() => handleScheduleMeeting(student)}>
                      Schedule
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mentor Assignment Widget */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Manage mentors and student assignments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              Add New Mentor
            </Button>
            <Button variant="outline">
              <Users className="h-4 w-4 mr-2" />
              Bulk Assign Students
            </Button>
            <Button variant="outline" onClick={() => handleScheduleMeeting()}>
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Department Meeting
            </Button>
            <Button variant="outline">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Generate Risk Report
            </Button>
          </div>
        </CardContent>
      </Card>

      <ScheduleMeetingModal
        open={scheduleMeetingOpen}
        onOpenChange={setScheduleMeetingOpen}
        recipientName={selectedStudent?.name || "Department"}
        recipientRole={selectedStudent ? "Student" : "Faculty"}
        meetingType={selectedStudent ? "Counseling Session" : "Department Meeting"}
      />

      <SendMessageModal
        open={sendMessageOpen}
        onOpenChange={setSendMessageOpen}
        recipientName={selectedStudent?.name || ""}
        recipientRole="Student"
        prefilledSubject={selectedStudent ? `Regarding ${selectedStudent.name}'s Academic Performance` : ""}
      />
    </div>
  )
}
