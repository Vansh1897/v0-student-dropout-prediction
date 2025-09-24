"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Users, UserCheck, Settings, Calendar, Plus, Clock, MapPin } from "lucide-react"
import { ScheduleMeetingModal } from "@/components/schedule-meeting-modal"

const navigation = [
  { name: "Overview", href: "/hod", icon: BarChart3 },
  { name: "Students", href: "/hod/students", icon: Users },
  { name: "Mentors", href: "/hod/mentors", icon: UserCheck },
  { name: "Schedule", href: "/hod/schedule", icon: Calendar, current: true },
  { name: "Settings", href: "/hod/settings", icon: Settings },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Department Faculty Meeting",
    time: "10:00 AM",
    date: "Today",
    location: "Conference Room A",
    type: "Meeting",
  },
  { id: 2, title: "Student Counseling Review", time: "2:00 PM", date: "Today", location: "HOD Office", type: "Review" },
  {
    id: 3,
    title: "Mentor Training Session",
    time: "11:00 AM",
    date: "Tomorrow",
    location: "Seminar Hall",
    type: "Training",
  },
  { id: 4, title: "Parent-Teacher Meeting", time: "3:00 PM", date: "Dec 28", location: "Auditorium", type: "Meeting" },
]

export default function HODSchedulePage() {
  const [scheduleMeetingOpen, setScheduleMeetingOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<any>(null)

  const handleScheduleMeeting = (event?: any) => {
    setSelectedEvent(event)
    setScheduleMeetingOpen(true)
  }

  const handleEditEvent = (event: any) => {
    // This would open an edit modal in a real application
    alert(`Editing event: ${event.title}`)
  }

  return (
    <DashboardLayout title="Schedule Management" role="Head of Department" navigation={navigation}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Department Schedule</h2>
            <p className="text-muted-foreground">Manage meetings, events, and appointments</p>
          </div>
          <Button onClick={() => handleScheduleMeeting()}>
            <Plus className="h-4 w-4 mr-2" />
            Schedule Event
          </Button>
        </div>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>December 26, 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents
                .filter((event) => event.date === "Today")
                .map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col items-center">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{event.time}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{event.title}</span>
                          <Badge variant="outline">{event.type}</Badge>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleEditEvent(event)}>
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        Join
                      </Button>
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
            <CardDescription>Next 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents
                .filter((event) => event.date !== "Today")
                .map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col items-center">
                        <span className="text-sm text-muted-foreground">{event.date}</span>
                        <span className="text-sm font-medium">{event.time}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{event.title}</span>
                          <Badge variant="outline">{event.type}</Badge>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleEditEvent(event)}>
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        Details
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <Button
                className="w-full bg-transparent"
                variant="outline"
                onClick={() => handleScheduleMeeting({ name: "Faculty", role: "Department", type: "Faculty Meeting" })}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Faculty Meeting
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Button
                className="w-full bg-transparent"
                variant="outline"
                onClick={() => handleScheduleMeeting({ name: "Students", role: "Department", type: "Student Review" })}
              >
                <Users className="h-4 w-4 mr-2" />
                Plan Student Review
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Button
                className="w-full bg-transparent"
                variant="outline"
                onClick={() =>
                  handleScheduleMeeting({ name: "Office Hours", role: "Department", type: "Office Hours" })
                }
              >
                <Clock className="h-4 w-4 mr-2" />
                Set Office Hours
              </Button>
            </CardContent>
          </Card>
        </div>

        <ScheduleMeetingModal
          open={scheduleMeetingOpen}
          onOpenChange={setScheduleMeetingOpen}
          recipientName={selectedEvent?.name || "Department"}
          recipientRole={selectedEvent?.role || "Department"}
          meetingType={selectedEvent?.type || "Department Event"}
        />
      </div>
    </DashboardLayout>
  )
}
