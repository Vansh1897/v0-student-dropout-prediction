import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Calendar, MessageSquare, BarChart3, Settings, Save, Bell, User, Clock } from "lucide-react"

const navigation = [
  { name: "My Students", href: "/mentor", icon: Users },
  { name: "Schedule", href: "/mentor/schedule", icon: Calendar },
  { name: "Messages", href: "/mentor/messages", icon: MessageSquare },
  { name: "Analytics", href: "/mentor/analytics", icon: BarChart3 },
  { name: "Settings", href: "/mentor/settings", icon: Settings, current: true },
]

export default function MentorSettingsPage() {
  return (
    <DashboardLayout title="Settings" role="Mentor" navigation={navigation}>
      <div className="space-y-6">
        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              Profile Information
            </CardTitle>
            <CardDescription>Update your personal and professional details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Dr. Rajesh Patel" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="rajesh.patel@college.edu" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" defaultValue="+91 98765 43210" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialization">Specialization</Label>
                <Input id="specialization" defaultValue="AI/ML, Data Science" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Input
                id="bio"
                defaultValue="Experienced mentor with 8 years in academia, specializing in AI/ML guidance."
              />
            </div>
          </CardContent>
        </Card>

        {/* Availability Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Availability Settings
            </CardTitle>
            <CardDescription>Set your office hours and availability preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="office-start">Office Hours Start</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select start time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9">9:00 AM</SelectItem>
                    <SelectItem value="10">10:00 AM</SelectItem>
                    <SelectItem value="11">11:00 AM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="office-end">Office Hours End</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select end time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="16">4:00 PM</SelectItem>
                    <SelectItem value="17">5:00 PM</SelectItem>
                    <SelectItem value="18">6:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="max-students">Maximum Students per Day</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select limit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 students</SelectItem>
                  <SelectItem value="8">8 students</SelectItem>
                  <SelectItem value="10">10 students</SelectItem>
                </SelectContent>
              </Select>
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
                <Label>Student Message Notifications</Label>
                <p className="text-sm text-muted-foreground">Get notified when students send messages</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Appointment Reminders</Label>
                <p className="text-sm text-muted-foreground">Reminders for scheduled meetings</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Risk Level Alerts</Label>
                <p className="text-sm text-muted-foreground">Alerts when student risk levels change</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Weekly Progress Reports</Label>
                <p className="text-sm text-muted-foreground">Receive weekly reports on student progress</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Mentoring Preferences */}
        <Card>
          <CardHeader>
            <CardTitle>Mentoring Preferences</CardTitle>
            <CardDescription>Configure your mentoring approach and methods</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="approach">Preferred Mentoring Approach</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select approach" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="directive">Directive (Structured guidance)</SelectItem>
                  <SelectItem value="collaborative">Collaborative (Joint problem-solving)</SelectItem>
                  <SelectItem value="supportive">Supportive (Emotional support focus)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Group Sessions</Label>
                <p className="text-sm text-muted-foreground">Allow group mentoring sessions</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Peer Referrals</Label>
                <p className="text-sm text-muted-foreground">Accept referrals from other mentors</p>
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
