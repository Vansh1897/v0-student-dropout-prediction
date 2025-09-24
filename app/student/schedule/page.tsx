"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart3, Calendar, MessageSquare, User, Settings, BookOpen } from "lucide-react"
import { ScheduleMeetingModal } from "@/components/schedule-meeting-modal"
import { SendMessageModal } from "@/components/send-message-modal"

const navigation = [
  { name: "Dashboard", href: "/student", icon: BarChart3 },
  { name: "Schedule", href: "/student/schedule", icon: Calendar, current: true },
  { name: "Messages", href: "/student/messages", icon: MessageSquare },
  { name: "Profile", href: "/student/profile", icon: User },
  { name: "Settings", href: "/student/settings", icon: Settings },
]

const schedule = [
  { time: "9:00 AM", subject: "Data Structures", room: "Lab 1", type: "Practical" },
  { time: "11:00 AM", subject: "Database Management", room: "Room 201", type: "Theory" },
  { time: "2:00 PM", subject: "Counseling Session", room: "Counselor Office", type: "Meeting" },
  { time: "4:00 PM", subject: "Software Engineering", room: "Room 105", type: "Theory" },
]

export default function StudentSchedulePage() {
  const [scheduleMeetingOpen, setScheduleMeetingOpen] = useState(false)
  const [sendMessageOpen, setSendMessageOpen] = useState(false)

  const handleScheduleChange = () => {
    // This would open a schedule change request modal in a real application
    alert("Schedule change request submitted successfully!")
  }

  const handleRequestCounseling = () => {
    setScheduleMeetingOpen(true)
  }

  const handleContactAdmin = () => {
    setSendMessageOpen(true)
  }

  return (
    <DashboardLayout title="My Schedule" role="student" navigation={navigation}>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>Your classes and appointments for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="text-sm font-medium w-20">{item.time}</div>
                    <div>
                      <div className="font-medium">{item.subject}</div>
                      <div className="text-sm text-muted-foreground">{item.room}</div>
                    </div>
                  </div>
                  <Badge variant={item.type === "Meeting" ? "secondary" : "outline"}>{item.type}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your schedule and appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button onClick={handleScheduleChange}>
                <Calendar className="h-4 w-4 mr-2" />
                Request Schedule Change
              </Button>
              <Button variant="outline">
                <BookOpen className="h-4 w-4 mr-2" />
                View Full Calendar
              </Button>
              <Button variant="outline" onClick={handleRequestCounseling}>
                <User className="h-4 w-4 mr-2" />
                Request Counseling
              </Button>
              <Button variant="outline" onClick={handleContactAdmin}>
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact Admin
              </Button>
            </div>
          </CardContent>
        </Card>

        <ScheduleMeetingModal
          open={scheduleMeetingOpen}
          onOpenChange={setScheduleMeetingOpen}
          recipientName="Dr. Rajesh Kumar"
          recipientRole="Mentor"
          meetingType="Counseling Session"
        />

        <SendMessageModal
          open={sendMessageOpen}
          onOpenChange={setSendMessageOpen}
          recipientName="Admin Office"
          recipientRole="Administration"
          prefilledSubject="Schedule Change Request"
        />
      </div>
    </DashboardLayout>
  )
}
