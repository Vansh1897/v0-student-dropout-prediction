"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Home, Users, BarChart3, Settings, UserPlus, Calendar, MessageSquare } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/hod", icon: Home },
  { name: "Assign Mentor", href: "/hod/assign-mentor", icon: UserPlus, current: true },
  { name: "Students", href: "/hod/students", icon: Users },
  { name: "Analytics", href: "/hod/analytics", icon: BarChart3 },
  { name: "Schedule", href: "/hod/schedule", icon: Calendar },
  { name: "Messages", href: "/hod/messages", icon: MessageSquare },
  { name: "Settings", href: "/hod/settings", icon: Settings },
]

const unassignedStudents = [
  { id: 1, name: "Raj Patel", year: "FE", riskLevel: "Moderate", attendance: 68 },
  { id: 2, name: "Sita Sharma", year: "SE", riskLevel: "Critical", attendance: 45 },
  { id: 3, name: "Kiran Kumar", year: "TE", riskLevel: "Low", attendance: 85 },
]

const availableMentors = [
  { id: 1, name: "Dr. Rajesh Kumar", department: "Computer", currentStudents: 8, maxCapacity: 12 },
  { id: 2, name: "Prof. Anita Desai", department: "Computer", currentStudents: 10, maxCapacity: 12 },
  { id: 3, name: "Dr. Vikram Singh", department: "Computer", currentStudents: 6, maxCapacity: 12 },
]

export default function AssignMentorPage() {
  return (
    <DashboardLayout title="Assign Mentor" role="hod" navigation={navigation}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Unassigned Students</CardTitle>
              <CardDescription>Students who need mentor assignment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {unassignedStudents.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{student.name}</span>
                        <Badge variant="outline">{student.year}</Badge>
                        <Badge
                          variant={
                            student.riskLevel === "Critical"
                              ? "destructive"
                              : student.riskLevel === "Moderate"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {student.riskLevel}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">Attendance: {student.attendance}%</div>
                    </div>
                    <Button size="sm">Assign</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Available Mentors</CardTitle>
              <CardDescription>Faculty members and their current capacity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {availableMentors.map((mentor) => (
                  <div key={mentor.id} className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{mentor.name}</span>
                      <Badge variant="outline">{mentor.department}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Students: {mentor.currentStudents}/{mentor.maxCapacity}
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${(mentor.currentStudents / mentor.maxCapacity) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Bulk Assignment</CardTitle>
            <CardDescription>Assign multiple students to mentors at once</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium">Select Year</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="FE">First Year</SelectItem>
                    <SelectItem value="SE">Second Year</SelectItem>
                    <SelectItem value="TE">Third Year</SelectItem>
                    <SelectItem value="BE">Final Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Assignment Strategy</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose strategy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="balanced">Balanced Load</SelectItem>
                    <SelectItem value="risk-based">Risk Level Based</SelectItem>
                    <SelectItem value="random">Random Assignment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Auto Assign
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
