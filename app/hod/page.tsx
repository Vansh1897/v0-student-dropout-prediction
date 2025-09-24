import { DashboardLayout } from "@/components/dashboard-layout"
import { HODDashboard } from "@/components/hod-dashboard"
import { BarChart3, Users, UserCheck, Settings, Calendar } from "lucide-react"

const navigation = [
  { name: "Overview", href: "/hod", icon: BarChart3, current: true },
  { name: "Students", href: "/hod/students", icon: Users },
  { name: "Mentors", href: "/hod/mentors", icon: UserCheck },
  { name: "Schedule", href: "/hod/schedule", icon: Calendar },
  { name: "Settings", href: "/hod/settings", icon: Settings },
]

export default function HODPage() {
  return (
    <DashboardLayout title="Department Overview" role="Head of Department" navigation={navigation}>
      <HODDashboard />
    </DashboardLayout>
  )
}
