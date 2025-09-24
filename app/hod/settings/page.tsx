import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, Users, UserCheck, Settings, Calendar, Save, Bell, Shield, User } from "lucide-react"

const navigation = [
  { name: "Overview", href: "/hod", icon: BarChart3 },
  { name: "Students", href: "/hod/students", icon: Users },
  { name: "Mentors", href: "/hod/mentors", icon: UserCheck },
  { name: "Schedule", href: "/hod/schedule", icon: Calendar },
  { name: "Settings", href: "/hod/settings", icon: Settings, current: true },
]

export default function HODSettingsPage() {
  return (
    <DashboardLayout title="Settings" role="Head of Department" navigation={navigation}>
      <div className="space-y-6">
        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              Profile Settings
            </CardTitle>
            <CardDescription>Manage your personal information and preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Dr. Rajesh Mehta" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="rajesh.mehta@college.edu" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" defaultValue="+91 98765 43210" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" defaultValue="Computer Engineering" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="h-5 w-5 mr-2" />
              Notification Preferences
            </CardTitle>
            <CardDescription>Configure how you receive notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Critical Student Alerts</Label>
                <p className="text-sm text-muted-foreground">Get notified when students are at critical risk</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Mentor Assignment Updates</Label>
                <p className="text-sm text-muted-foreground">Notifications for mentor-student assignments</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Department Meeting Reminders</Label>
                <p className="text-sm text-muted-foreground">Reminders for scheduled meetings</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Weekly Reports</Label>
                <p className="text-sm text-muted-foreground">Receive weekly department performance reports</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              System Configuration
            </CardTitle>
            <CardDescription>Configure system-wide settings for the department</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="risk-threshold">Risk Assessment Threshold</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select threshold" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conservative">Conservative (60%)</SelectItem>
                    <SelectItem value="moderate">Moderate (70%)</SelectItem>
                    <SelectItem value="aggressive">Aggressive (80%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="auto-assign">Auto-assign Mentors</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="enabled">Enabled</SelectItem>
                    <SelectItem value="disabled">Disabled</SelectItem>
                    <SelectItem value="manual">Manual Approval</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Enable Predictive Analytics</Label>
                <p className="text-sm text-muted-foreground">Use AI to predict student dropout risk</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Automatic Report Generation</Label>
                <p className="text-sm text-muted-foreground">Generate monthly reports automatically</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </DashboardLayout>
  )
}
