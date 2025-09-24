"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { TeacherDashboard } from "@/components/teacher-dashboard"
import { Home, Users, Calendar, MessageSquare, Settings, ClipboardCheck } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/teacher", icon: Home, current: true },
  { name: "Attendance", href: "/teacher/attendance", icon: ClipboardCheck },
  { name: "Students", href: "/teacher/students", icon: Users },
  { name: "Schedule", href: "/teacher/schedule", icon: Calendar },
  { name: "Messages", href: "/teacher/messages", icon: MessageSquare },
  { name: "Settings", href: "/teacher/settings", icon: Settings },
]

export default function TeacherPage() {
  return (
    <DashboardLayout title="Teacher Dashboard" role="teacher" navigation={navigation}>
      <TeacherDashboard />
    </DashboardLayout>
  )
}
