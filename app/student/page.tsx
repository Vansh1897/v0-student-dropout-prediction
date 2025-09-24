import { DashboardLayout } from "@/components/dashboard-layout"
import { StudentDashboard } from "@/components/student-dashboard"
import { BarChart3, Calendar, MessageSquare, User, Settings } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/student", icon: BarChart3, current: true },
  { name: "Schedule", href: "/student/schedule", icon: Calendar },
  { name: "Messages", href: "/student/messages", icon: MessageSquare },
  { name: "Profile", href: "/student/profile", icon: User },
  { name: "Settings", href: "/student/settings", icon: Settings },
]

export default function StudentPage() {
  return (
    <DashboardLayout title="My Progress" role="Student" navigation={navigation}>
      <StudentDashboard />
    </DashboardLayout>
  )
}
