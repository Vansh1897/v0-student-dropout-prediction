"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Calendar, MessageSquare, TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react"
import { useState } from "react"
import { ScheduleMeetingModal } from "./schedule-meeting-modal"
import { SendMessageModal } from "./send-message-modal"

// Mock student data
const studentData = {
  name: "Arjun Sharma",
  year: "SE",
  rollNo: "SE2023001",
  riskLevel: "Moderate",
  attendance: 72,
  cgpa: 6.8,
  feesStatus: "Paid",
  mentor: "Dr. Rajesh Kumar",
}

const recentMarks = [
  { subject: "Data Structures", marks: 78, total: 100, trend: "up" },
  { subject: "Database Management", marks: 65, total: 100, trend: "down" },
  { subject: "Computer Networks", marks: 72, total: 100, trend: "up" },
  { subject: "Software Engineering", marks: 58, total: 100, trend: "down" },
]

const upcomingEvents = [
  { type: "Counseling Session", date: "Tomorrow 2:00 PM", mentor: "Dr. Rajesh Kumar" },
  { type: "Assignment Due", date: "Friday", subject: "Data Structures" },
  { type: "Mid-term Exam", date: "Next Monday", subject: "Database Management" },
]

export function StudentDashboard() {
  const [scheduleMeetingOpen, setScheduleMeetingOpen] = useState(false)
  const [sendMessageOpen, setSendMessageOpen] = useState(false)

  const getRiskColor = (level: string) => {
    switch (level) {
      case "Critical":
        return "text-red-500"
      case "Moderate":
        return "text-yellow-500"
      case "Low":
        return "text-green-500"
      default:
        return "text-muted-foreground"
    }
  }

  const getRiskMessage = (level: string) => {
    switch (level) {
      case "Critical":
        return "Your academic performance needs immediate attention. Please schedule a meeting with your mentor."
      case "Moderate":
        return "Some areas need improvement. Regular counseling sessions can help you get back on track."
      case "Low":
        return "Great job! Keep up the good work and maintain your current performance."
      default:
        return "Status unknown"
    }
  }

  return (
    <div className="space-y-6">
      {/* Risk Status Alert */}
      <Alert
        className={`border-l-4 ${
          studentData.riskLevel === "Critical"
            ? "border-l-red-500 bg-red-500/10"
            : studentData.riskLevel === "Moderate"
              ? "border-l-yellow-500 bg-yellow-500/10"
              : "border-l-green-500 bg-green-500/10"
        }`}
      >
        <AlertTriangle className={`h-4 w-4 ${getRiskColor(studentData.riskLevel)}`} />
        <AlertDescription>
          <div className="flex items-center justify-between">
            <div>
              <span className="font-medium">Risk Level: </span>
              <span className={`font-bold ${getRiskColor(studentData.riskLevel)}`}>{studentData.riskLevel}</span>
              <div className="mt-1 text-sm">{getRiskMessage(studentData.riskLevel)}</div>
            </div>
            <Button size="sm" onClick={() => setScheduleMeetingOpen(true)}>
              <Calendar className="h-4 w-4 mr-2" />
              Request Counseling
            </Button>
          </div>
        </AlertDescription>
      </Alert>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">{studentData.attendance}%</div>
            <Progress value={studentData.attendance} className="h-2 mb-2" />
            <p className="text-xs text-muted-foreground">
              {studentData.attendance < 75 ? "Below minimum (75%)" : "Meeting requirements"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">CGPA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">{studentData.cgpa}</div>
            <div className="flex items-center space-x-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-xs text-green-500">+0.2 from last semester</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Fee Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="font-bold text-green-500">{studentData.feesStatus}</span>
            </div>
            <p className="text-xs text-muted-foreground">All dues cleared</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Mentor</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-medium mb-2">{studentData.mentor}</div>
            <Button
              size="sm"
              variant="outline"
              className="w-full bg-transparent"
              onClick={() => setSendMessageOpen(true)}
            >
              <MessageSquare className="h-3 w-3 mr-2" />
              Contact
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Performance</CardTitle>
            <CardDescription>Latest test and assignment scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMarks.map((mark, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="font-medium">{mark.subject}</div>
                    <div className="text-sm text-muted-foreground">
                      {mark.marks}/{mark.total}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">{((mark.marks / mark.total) * 100).toFixed(0)}%</span>
                    {mark.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Important dates and deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                  <Calendar className="h-4 w-4 mt-0.5 text-primary" />
                  <div className="space-y-1">
                    <div className="font-medium">{event.type}</div>
                    <div className="text-sm text-muted-foreground">{event.date}</div>
                    {event.mentor && <div className="text-xs text-muted-foreground">with {event.mentor}</div>}
                    {event.subject && (
                      <Badge variant="outline" className="text-xs">
                        {event.subject}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and requests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => setScheduleMeetingOpen(true)}>
              <Calendar className="h-4 w-4 mr-2" />
              Request Counseling Session
            </Button>
            <Button variant="outline" onClick={() => setSendMessageOpen(true)}>
              <MessageSquare className="h-4 w-4 mr-2" />
              Message Mentor
            </Button>
            <Button variant="outline">View Attendance Report</Button>
            <Button variant="outline">Download Marksheet</Button>
          </div>
        </CardContent>
      </Card>

      <ScheduleMeetingModal
        open={scheduleMeetingOpen}
        onOpenChange={setScheduleMeetingOpen}
        recipientName={studentData.mentor}
        recipientRole="Mentor"
        meetingType="Counseling Session"
      />

      <SendMessageModal
        open={sendMessageOpen}
        onOpenChange={setSendMessageOpen}
        recipientName={studentData.mentor}
        recipientRole="Mentor"
        prefilledSubject="Academic Support Request"
      />
    </div>
  )
}
