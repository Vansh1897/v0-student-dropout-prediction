import { DashboardLayout } from "@/components/dashboard-layout"
import { MentorDashboard } from "@/components/mentor-dashboard"
import { Users, Calendar, MessageSquare, BarChart3, Settings } from "lucide-react"

const navigation = [
  { name: "My Students", href: "/mentor", icon: Users, current: true },
  { name: "Schedule", href: "/mentor/schedule", icon: Calendar },
  { name: "Messages", href: "/mentor/messages", icon: MessageSquare },
  { name: "Analytics", href: "/mentor/analytics", icon: BarChart3 },
  { name: "Settings", href: "/mentor/settings", icon: Settings },
]

export default function MentorPage() {
  return (
    <DashboardLayout title="My Students" role="Mentor" navigation={navigation}>
      <MentorDashboard />
    </DashboardLayout>
  )
}
