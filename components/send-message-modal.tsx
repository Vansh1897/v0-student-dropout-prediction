"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Send, Paperclip } from "lucide-react"

interface SendMessageModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  recipientName?: string
  recipientRole?: string
  prefilledSubject?: string
}

export function SendMessageModal({
  open,
  onOpenChange,
  recipientName = "Recipient",
  recipientRole = "person",
  prefilledSubject = "",
}: SendMessageModalProps) {
  const [priority, setPriority] = useState("normal")
  const [subject, setSubject] = useState(prefilledSubject)
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form
    setPriority("normal")
    setSubject("")
    setMessage("")
    setIsSubmitting(false)
    onOpenChange(false)

    // Show success message (in real app, use toast)
    alert(`Message sent successfully to ${recipientName}!`)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive"
      case "medium":
        return "secondary"
      case "normal":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <MessageSquare className="h-5 w-5" />
            <span>Send Message</span>
          </DialogTitle>
          <DialogDescription>
            Send a message to {recipientName} ({recipientRole})
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>To</Label>
            <div className="flex items-center space-x-2 p-2 border rounded-md bg-muted/50">
              <span className="font-medium">{recipientName}</span>
              <Badge variant="outline">{recipientRole}</Badge>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="priority">Priority</Label>
            <Select value={priority} onValueChange={setPriority}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Message subject"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              rows={6}
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Button type="button" variant="ghost" size="sm">
                <Paperclip className="h-4 w-4 mr-1" />
                Attach File
              </Button>
            </div>
            <div>
              Priority: <Badge variant={getPriorityColor(priority)}>{priority}</Badge>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!subject || !message || isSubmitting}>
              <Send className="h-4 w-4 mr-2" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
