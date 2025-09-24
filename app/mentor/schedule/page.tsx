"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, MessageSquare, Settings, BarChart3, Plus } from "lucide-react"
import { ScheduleMeetingModal } from "@/components/schedule-meeting-modal"

const navigation = [
  { name: "My Students", href: "/mentor", icon: Users },
  { name: "Schedule", href: "/mentor/schedule", icon: Calendar, current: true },
  { name: "Messages", href: "/mentor/messages", icon: MessageSquare },
  { name: "Analytics", href: "/mentor/analytics", icon: BarChart3 },
  { name: "Settings", href: "/mentor/settings", icon: Settings },
]

const appointments = [
  {
    time: "10:00 AM",
    student: "Arjun Sharma",
    type: "Counseling Session",
    status: "Confirmed",
    duration: "30 min",
  },
  {
    time: "2:00 PM",
    student: "Kavya Nair",
    type: "Academic Review",
    status: "Pending",
    duration: "45 min",
  },
  {
    time: "4:00 PM",
    student: "Vikram Singh",
    type: "Career Guidance",
    status: "Confirmed",
    duration: "30 min",
  },
]

export default function MentorSchedulePage() {
  const [scheduleMeetingOpen, setScheduleMeetingOpen] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState<any>(null)

  const handleScheduleMeeting = (student?: any) => {
    setSelectedStudent(student)
    setScheduleMeetingOpen(true)
  }

  const handleQuickSchedule = () => {
    // This would normally validate the form and schedule the session
    alert("Session scheduled successfully!")
  }

  return (
    <DashboardLayout title="Schedule Management" role="mentor" navigation={navigation}>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Today's Appointments</h2>
          <Button onClick={() => handleScheduleMeeting()}>
            <Plus className="h-4 w-4 mr-2" />
            Schedule Meeting
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>Your scheduled counseling sessions for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {appointments.map((appointment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{appointment.time}</span>
                        <Badge variant={appointment.status === "Confirmed" ? "outline" : "secondary"}>
                          {appointment.status}
                        </Badge>
                      </div>
                      <div className="text-sm font-medium">{appointment.student}</div>
                      <div className="text-sm text-muted-foreground">
                        {appointment.type} • {appointment.duration}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleScheduleMeeting({ name: appointment.student, role: "Student" })}
                      >
                        Reschedule
                      </Button>
                      <Button size="sm">Join</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Schedule</CardTitle>
              <CardDescription>Schedule a new counseling session</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Select Student</label>
                <select className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background">
                  <option>Choose a student...</option>
                  <option>Arjun Sharma</option>
                  <option>Anita Desai</option>
                  <option>Vikram Singh</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Date & Time</label>
                <input
                  type="datetime-local"
                  className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Session Type</label>
                <select className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background">
                  <option>Counseling Session</option>
                  <option>Academic Review</option>
                  <option>Career Guidance</option>
                  <option>Personal Support</option>
                </select>
              </div>
              <Button className="w-full" onClick={handleQuickSchedule}>
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Session
              </Button>
            </CardContent>
          </Card>
        </div>

        <ScheduleMeetingModal
          open={scheduleMeetingOpen}
          onOpenChange={setScheduleMeetingOpen}
          recipientName={selectedStudent?.name || "Student"}
          recipientRole={selectedStudent?.role || "Student"}
          meetingType="Counseling Session"
        />
      </div>
    </DashboardLayout>
  )
}
