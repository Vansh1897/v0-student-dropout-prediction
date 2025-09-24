"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MessageSquare, Phone, TrendingDown, TrendingUp, AlertCircle } from "lucide-react"
import { ScheduleMeetingModal } from "./schedule-meeting-modal"
import { SendMessageModal } from "./send-message-modal"

// Mock data for assigned students
const assignedStudents = [
  {
    id: 1,
    name: "Arjun Sharma",
    year: "SE",
    riskLevel: "Critical",
    attendance: 45,
    fees: "Pending",
    lastMarks: 42,
    trend: "down",
    lastCounseling: "2 weeks ago",
    nextMeeting: null,
  },
  {
    id: 2,
    name: "Anita Desai",
    year: "SE",
    riskLevel: "Moderate",
    attendance: 72,
    fees: "Paid",
    lastMarks: 68,
    trend: "up",
    lastCounseling: "1 month ago",
    nextMeeting: "Tomorrow 2:00 PM",
  },
  {
    id: 3,
    name: "Vikram Singh",
    year: "SE",
    riskLevel: "Low",
    attendance: 88,
    fees: "Paid",
    lastMarks: 78,
    trend: "up",
    lastCounseling: "3 months ago",
    nextMeeting: null,
  },
  {
    id: 4,
    name: "Kavya Nair",
    year: "SE",
    riskLevel: "Moderate",
    attendance: 65,
    fees: "Paid",
    lastMarks: 55,
    trend: "down",
    lastCounseling: "2 weeks ago",
    nextMeeting: "Friday 11:00 AM",
  },
]

export function MentorDashboard() {
  const [selectedStudent, setSelectedStudent] = useState(assignedStudents[0])
  const [scheduleMeetingOpen, setScheduleMeetingOpen] = useState(false)
  const [sendMessageOpen, setSendMessageOpen] = useState(false)

  const getRiskColor = (level: string) => {
    switch (level) {
      case "Critical":
        return "destructive"
      case "Moderate":
        return "secondary"
      case "Low":
        return "outline"
      default:
        return "outline"
    }
  }

  const getRiskBgColor = (level: string) => {
    switch (level) {
      case "Critical":
        return "bg-red-500/10 border-red-500/20"
      case "Moderate":
        return "bg-yellow-500/10 border-yellow-500/20"
      case "Low":
        return "bg-green-500/10 border-green-500/20"
      default:
        return "bg-muted"
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Panel - Student List */}
      <div className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Assigned Students (4)</CardTitle>
            <CardDescription>Click on a student to view details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {assignedStudents.map((student) => (
              <div
                key={student.id}
                className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                  selectedStudent.id === student.id ? "border-primary bg-primary/5" : getRiskBgColor(student.riskLevel)
                }`}
                onClick={() => setSelectedStudent(student)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{student.name}</span>
                  <Badge variant={getRiskColor(student.riskLevel)}>{student.riskLevel}</Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  {student.year} • Attendance: {student.attendance}%
                </div>
                {student.nextMeeting && <div className="text-xs text-blue-600 mt-1">Next: {student.nextMeeting}</div>}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Center & Right Panel - Student Details */}
      <div className="lg:col-span-2 space-y-6">
        {/* Student Header */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <span>{selectedStudent.name}</span>
                  <Badge variant={getRiskColor(selectedStudent.riskLevel)}>{selectedStudent.riskLevel} Risk</Badge>
                </CardTitle>
                <CardDescription>
                  {selectedStudent.year} Year • Last counseling: {selectedStudent.lastCounseling}
                </CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" onClick={() => setScheduleMeetingOpen(true)}>
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Meeting
                </Button>
                <Button size="sm" variant="outline" onClick={() => setSendMessageOpen(true)}>
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Message
                </Button>
                <Button size="sm" variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Parent
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Student Details Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="academics">Academics</TabsTrigger>
            <TabsTrigger value="counseling">Counseling History</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Attendance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-2">{selectedStudent.attendance}%</div>
                  <Progress value={selectedStudent.attendance} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">
                    {selectedStudent.attendance < 75 ? "Below minimum requirement" : "Meeting requirements"}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Latest Marks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold">{selectedStudent.lastMarks}%</span>
                    {selectedStudent.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {selectedStudent.trend === "up" ? "Improving performance" : "Declining performance"}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Fee Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-2">{selectedStudent.fees}</div>
                  <Badge variant={selectedStudent.fees === "Paid" ? "outline" : "destructive"}>
                    {selectedStudent.fees === "Paid" ? "Up to date" : "Action required"}
                  </Badge>
                </CardContent>
              </Card>
            </div>

            {/* Risk Factors */}
            <Card>
              <CardHeader>
                <CardTitle>Risk Factors</CardTitle>
                <CardDescription>Key indicators contributing to risk assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {selectedStudent.attendance < 75 && (
                    <div className="flex items-center space-x-2 text-red-600">
                      <AlertCircle className="h-4 w-4" />
                      <span className="text-sm">Low attendance ({selectedStudent.attendance}%)</span>
                    </div>
                  )}
                  {selectedStudent.lastMarks < 50 && (
                    <div className="flex items-center space-x-2 text-red-600">
                      <AlertCircle className="h-4 w-4" />
                      <span className="text-sm">Poor academic performance ({selectedStudent.lastMarks}%)</span>
                    </div>
                  )}
                  {selectedStudent.fees === "Pending" && (
                    <div className="flex items-center space-x-2 text-yellow-600">
                      <AlertCircle className="h-4 w-4" />
                      <span className="text-sm">Pending fee payment</span>
                    </div>
                  )}
                  {selectedStudent.riskLevel === "Low" && (
                    <div className="text-sm text-green-600">No significant risk factors identified</div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="attendance">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Tracking</CardTitle>
                <CardDescription>30-day attendance overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  Attendance chart would be displayed here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="academics">
            <Card>
              <CardHeader>
                <CardTitle>Academic Performance</CardTitle>
                <CardDescription>Marks trend and subject-wise performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  Academic performance charts would be displayed here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="counseling">
            <Card>
              <CardHeader>
                <CardTitle>Counseling History</CardTitle>
                <CardDescription>Previous sessions and outcomes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <div className="font-medium">Initial Assessment</div>
                    <div className="text-sm text-muted-foreground">2 weeks ago</div>
                    <div className="text-sm mt-1">
                      Discussed attendance issues and academic challenges. Student committed to improvement plan.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <ScheduleMeetingModal
        open={scheduleMeetingOpen}
        onOpenChange={setScheduleMeetingOpen}
        recipientName={selectedStudent.name}
        recipientRole="Student"
        meetingType="Counseling Session"
      />

      <SendMessageModal
        open={sendMessageOpen}
        onOpenChange={setSendMessageOpen}
        recipientName={selectedStudent.name}
        recipientRole="Student"
        prefilledSubject={`Academic Progress Discussion - ${selectedStudent.name}`}
      />
    </div>
  )
}
