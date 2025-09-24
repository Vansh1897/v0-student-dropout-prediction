"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BarChart3, Calendar, MessageSquare, User, Settings, Send } from "lucide-react"
import { SendMessageModal } from "@/components/send-message-modal"

const navigation = [
  { name: "Dashboard", href: "/student", icon: BarChart3 },
  { name: "Schedule", href: "/student/schedule", icon: Calendar },
  { name: "Messages", href: "/student/messages", icon: MessageSquare, current: true },
  { name: "Profile", href: "/student/profile", icon: User },
  { name: "Settings", href: "/student/settings", icon: Settings },
]

const messages = [
  {
    from: "Dr. Rajesh Kumar",
    subject: "Counseling Session Reminder",
    time: "2 hours ago",
    preview: "Don't forget about our counseling session tomorrow at 2:00 PM...",
  },
  {
    from: "Prof. Sharma",
    subject: "Assignment Deadline",
    time: "1 day ago",
    preview: "The Data Structures assignment is due this Friday...",
  },
]

export default function StudentMessagesPage() {
  const [sendMessageOpen, setSendMessageOpen] = useState(false)
  const [selectedRecipient, setSelectedRecipient] = useState<any>(null)

  const handleSendMessage = (recipient?: any) => {
    setSelectedRecipient(recipient)
    setSendMessageOpen(true)
  }

  const handleQuickSend = () => {
    // This would normally validate the form and send the message
    alert("Message sent successfully!")
  }

  return (
    <DashboardLayout title="Messages" role="student" navigation={navigation}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Inbox</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {messages.map((message, index) => (
                  <div key={index} className="p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50">
                    <div className="font-medium text-sm">{message.from}</div>
                    <div className="text-sm text-muted-foreground">{message.subject}</div>
                    <div className="text-xs text-muted-foreground mt-1">{message.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
                onClick={() => handleSendMessage({ name: "Dr. Rajesh Kumar", role: "Mentor" })}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Message Mentor
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
                onClick={() => handleSendMessage({ name: "Prof. Sharma", role: "Teacher" })}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Message Teacher
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
                onClick={() => handleSendMessage({ name: "Admin Office", role: "Administration" })}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact Admin
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Compose Message</CardTitle>
              <CardDescription>Send a message to your mentor or teacher</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">To</label>
                <Input placeholder="Select recipient" />
              </div>
              <div>
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="Enter subject" />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Type your message here..." rows={6} />
              </div>
              <Button onClick={handleQuickSend}>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <SendMessageModal
        open={sendMessageOpen}
        onOpenChange={setSendMessageOpen}
        recipientName={selectedRecipient?.name || ""}
        recipientRole={selectedRecipient?.role || ""}
      />
    </DashboardLayout>
  )
}
