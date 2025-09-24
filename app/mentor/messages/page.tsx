"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, MessageSquare, BarChart3, Settings, Send, Search, Plus } from "lucide-react"
import { ScheduleMeetingModal } from "@/components/schedule-meeting-modal"
import { SendMessageModal } from "@/components/send-message-modal"

const navigation = [
  { name: "My Students", href: "/mentor", icon: Users },
  { name: "Schedule", href: "/mentor/schedule", icon: Calendar },
  { name: "Messages", href: "/mentor/messages", icon: MessageSquare, current: true },
  { name: "Analytics", href: "/mentor/analytics", icon: BarChart3 },
  { name: "Settings", href: "/mentor/settings", icon: Settings },
]

const conversations = [
  {
    id: 1,
    student: "Arjun Sharma",
    lastMessage: "Thank you for the guidance on my project",
    time: "2 hours ago",
    unread: 2,
    status: "Critical",
  },
  {
    id: 2,
    student: "Priya Patel",
    lastMessage: "Can we schedule a meeting this week?",
    time: "1 day ago",
    unread: 0,
    status: "Low",
  },
  {
    id: 3,
    student: "Vikram Joshi",
    lastMessage: "I'm struggling with the coursework",
    time: "2 days ago",
    unread: 1,
    status: "Moderate",
  },
  {
    id: 4,
    student: "Anita Gupta",
    lastMessage: "Thanks for the career advice!",
    time: "3 days ago",
    unread: 0,
    status: "Moderate",
  },
]

export default function MentorMessagesPage() {
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
    <DashboardLayout title="Messages" role="Mentor" navigation={navigation}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Student Messages</h2>
            <p className="text-muted-foreground">Communicate with your mentees</p>
          </div>
          <Button onClick={() => handleSendMessage()}>
            <Plus className="h-4 w-4 mr-2" />
            New Message
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Conversations</CardTitle>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search conversations..." className="pl-8" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {conversations.map((conv) => (
                    <div
                      key={conv.id}
                      className="flex items-center justify-between p-4 hover:bg-muted/50 cursor-pointer border-b"
                    >
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{conv.student}</span>
                          <Badge
                            variant={
                              conv.status === "Critical"
                                ? "destructive"
                                : conv.status === "Moderate"
                                  ? "secondary"
                                  : "default"
                            }
                            className="text-xs"
                          >
                            {conv.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                        <p className="text-xs text-muted-foreground">{conv.time}</p>
                      </div>
                      {conv.unread > 0 && <Badge className="ml-2">{conv.unread}</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Arjun Sharma</CardTitle>
                    <CardDescription>SE • Critical Risk Level</CardDescription>
                  </div>
                  <Badge variant="destructive">Critical</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                {/* Messages */}
                <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
                  <div className="flex justify-start">
                    <div className="bg-muted p-3 rounded-lg max-w-xs">
                      <p className="text-sm">
                        Hi sir, I'm having trouble with my attendance. Can you help me understand the consequences?
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Yesterday, 2:30 PM</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-xs">
                      <p className="text-sm">
                        Of course! Let's schedule a meeting to discuss this. Your current attendance is concerning and
                        we need to work on improving it.
                      </p>
                      <p className="text-xs opacity-70 mt-1">Yesterday, 3:15 PM</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-muted p-3 rounded-lg max-w-xs">
                      <p className="text-sm">Thank you for the guidance on my project. When can we meet?</p>
                      <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="flex space-x-2">
                  <Input placeholder="Type your message..." className="flex-1" />
                  <Button>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <Button
                className="w-full bg-transparent"
                variant="outline"
                onClick={() => handleSendMessage({ name: "All Students", role: "Group" })}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Broadcast Message
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Button
                className="w-full bg-transparent"
                variant="outline"
                onClick={() => handleScheduleMeeting({ name: "Study Group", role: "Group" })}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Group Meeting
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Button className="w-full bg-transparent" variant="outline">
                <Users className="h-4 w-4 mr-2" />
                Create Study Group
              </Button>
            </CardContent>
          </Card>
        </div>

        <ScheduleMeetingModal
          open={scheduleMeetingOpen}
          onOpenChange={setScheduleMeetingOpen}
          recipientName={selectedStudent?.name || "Student"}
          recipientRole={selectedStudent?.role || "Student"}
          meetingType={selectedStudent?.role === "Group" ? "Group Meeting" : "Individual Meeting"}
        />

        <SendMessageModal
          open={sendMessageOpen}
          onOpenChange={setSendMessageOpen}
          recipientName={selectedStudent?.name || "Student"}
          recipientRole={selectedStudent?.role || "Student"}
          prefilledSubject={selectedStudent?.role === "Group" ? "Group Announcement" : ""}
        />
      </div>
    </DashboardLayout>
  )
}
