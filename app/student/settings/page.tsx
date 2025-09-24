import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Calendar, MessageSquare, Settings, Save, Bell, User, Shield, Smartphone } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/student", icon: Users },
  { name: "Profile", href: "/student/profile", icon: User },
  { name: "Schedule", href: "/student/schedule", icon: Calendar },
  { name: "Messages", href: "/student/messages", icon: MessageSquare },
  { name: "Settings", href: "/student/settings", icon: Settings, current: true },
]

export default function StudentSettingsPage() {
  return (
    <DashboardLayout title="Settings" role="Student" navigation={navigation}>
      <div className="space-y-6">
        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              Account Settings
            </CardTitle>
            <CardDescription>Update your account information and preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="display-name">Display Name</Label>
                <Input id="display-name" defaultValue="Arjun Sharma" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="arjun.sharma@student.college.edu" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+91 98765 43210" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergency-contact">Emergency Contact</Label>
                <Input id="emergency-contact" defaultValue="+91 98765 12345" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio (Optional)</Label>
              <Input
                id="bio"
                placeholder="Tell us a bit about yourself..."
                defaultValue="3rd year CSE student interested in AI/ML and web development"
              />
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
            <CardDescription>Choose how you want to receive notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Assignment Reminders</Label>
                <p className="text-sm text-muted-foreground">Get notified about upcoming assignment deadlines</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Attendance Alerts</Label>
                <p className="text-sm text-muted-foreground">Alerts when attendance falls below threshold</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Mentor Messages</Label>
                <p className="text-sm text-muted-foreground">Notifications for messages from your mentor</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Schedule Updates</Label>
                <p className="text-sm text-muted-foreground">Updates about class schedule changes</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Grade Updates</Label>
                <p className="text-sm text-muted-foreground">Notifications when new grades are posted</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Privacy Settings
            </CardTitle>
            <CardDescription>Control your privacy and data sharing preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Profile Visibility</Label>
                <p className="text-sm text-muted-foreground">Allow other students to see your profile</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Academic Progress Sharing</Label>
                <p className="text-sm text-muted-foreground">Share progress with parents/guardians</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Anonymous Feedback</Label>
                <p className="text-sm text-muted-foreground">Allow anonymous feedback collection</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Study Preferences */}
        <Card>
          <CardHeader>
            <CardTitle>Study Preferences</CardTitle>
            <CardDescription>Customize your learning experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="study-mode">Preferred Study Mode</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select study mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="individual">Individual Study</SelectItem>
                  <SelectItem value="group">Group Study</SelectItem>
                  <SelectItem value="mixed">Mixed Approach</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="reminder-frequency">Reminder Frequency</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Study Streak Tracking</Label>
                <p className="text-sm text-muted-foreground">Track your daily study habits</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Mobile App Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Smartphone className="h-5 w-5 mr-2" />
              Mobile App Settings
            </CardTitle>
            <CardDescription>Configure mobile app preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Push Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive push notifications on your mobile device</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Offline Mode</Label>
                <p className="text-sm text-muted-foreground">Download content for offline access</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto-sync</Label>
                <p className="text-sm text-muted-foreground">Automatically sync data when connected</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-destructive/50">
          <CardHeader>
            <CardTitle className="text-destructive">Danger Zone</CardTitle>
            <CardDescription>Irreversible and destructive actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
              <div>
                <p className="font-medium">Reset All Settings</p>
                <p className="text-sm text-muted-foreground">Reset all settings to default values</p>
              </div>
              <Button
                variant="outline"
                className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
              >
                Reset
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
              <div>
                <p className="font-medium">Deactivate Account</p>
                <p className="text-sm text-muted-foreground">Temporarily deactivate your account</p>
              </div>
              <Button variant="destructive">Deactivate</Button>
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
