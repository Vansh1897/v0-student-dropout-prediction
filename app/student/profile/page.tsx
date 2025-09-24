import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, Calendar, MessageSquare, Settings, User, GraduationCap, BookOpen, TrendingUp, Edit } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/student", icon: Users },
  { name: "Profile", href: "/student/profile", icon: User, current: true },
  { name: "Schedule", href: "/student/schedule", icon: Calendar },
  { name: "Messages", href: "/student/messages", icon: MessageSquare },
  { name: "Settings", href: "/student/settings", icon: Settings },
]

export default function StudentProfilePage() {
  return (
    <DashboardLayout title="My Profile" role="Student" navigation={navigation}>
      <div className="space-y-6">
        {/* Profile Header */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Arjun Sharma</CardTitle>
                  <CardDescription>Computer Science Engineering • 3rd Year</CardDescription>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge variant="destructive">High Risk</Badge>
                    <Badge variant="secondary">ID: CS2021001</Badge>
                  </div>
                </div>
              </div>
              <Button variant="outline">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Personal Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input value="Arjun Sharma" readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input value="arjun.sharma@student.college.edu" readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <Input value="+91 98765 43210" readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label>Date of Birth</Label>
                    <Input value="15/08/2002" readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label>Address</Label>
                    <Input value="Mumbai, Maharashtra" readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label>Emergency Contact</Label>
                    <Input value="+91 98765 12345 (Father)" readOnly />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Academic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  Academic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Student ID</Label>
                    <Input value="CS2021001" readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label>Program</Label>
                    <Input value="B.Tech Computer Science Engineering" readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label>Year</Label>
                    <Input value="3rd Year" readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label>Semester</Label>
                    <Input value="6th Semester" readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label>Current CGPA</Label>
                    <Input value="6.8" readOnly />
                  </div>
                  <div className="space-y-2">
                    <Label>Admission Year</Label>
                    <Input value="2021" readOnly />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Courses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Current Courses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { code: "CS301", name: "Database Management Systems", credits: 4, grade: "B+" },
                    { code: "CS302", name: "Computer Networks", credits: 4, grade: "C+" },
                    { code: "CS303", name: "Software Engineering", credits: 3, grade: "B" },
                    { code: "CS304", name: "Machine Learning", credits: 4, grade: "C" },
                    { code: "CS305", name: "Web Technologies", credits: 3, grade: "B-" },
                  ].map((course, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div>
                        <p className="font-medium">
                          {course.code} - {course.name}
                        </p>
                        <p className="text-sm text-muted-foreground">{course.credits} Credits</p>
                      </div>
                      <Badge variant="secondary">{course.grade}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Risk Assessment & Progress */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Risk Assessment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">85%</div>
                  <Badge variant="destructive" className="mb-4">
                    High Risk
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Based on attendance, academic performance, and engagement metrics
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Attendance</span>
                      <span className="text-red-500">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Academic Performance</span>
                      <span className="text-yellow-500">68%</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Engagement</span>
                      <span className="text-red-500">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mentor Information */}
            <Card>
              <CardHeader>
                <CardTitle>Assigned Mentor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Dr. Rajesh Patel</p>
                    <p className="text-sm text-muted-foreground">AI/ML Specialist</p>
                    <p className="text-sm text-muted-foreground">rajesh.patel@college.edu</p>
                  </div>
                  <div className="space-y-2">
                    <Button size="sm" className="w-full">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Meeting
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm">
                    <p className="font-medium">Counseling Session</p>
                    <p className="text-muted-foreground">2 days ago with Dr. Rajesh Patel</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Assignment Submitted</p>
                    <p className="text-muted-foreground">3 days ago - CS301 Project</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Attendance Alert</p>
                    <p className="text-muted-foreground">5 days ago - Below 75%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
