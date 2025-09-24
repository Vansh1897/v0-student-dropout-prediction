import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, Users, UserCheck, Settings, Calendar, Search, Eye, UserPlus } from "lucide-react"

const navigation = [
  { name: "Overview", href: "/hod", icon: BarChart3 },
  { name: "Students", href: "/hod/students", icon: Users, current: true },
  { name: "Mentors", href: "/hod/mentors", icon: UserCheck },
  { name: "Schedule", href: "/hod/schedule", icon: Calendar },
  { name: "Settings", href: "/hod/settings", icon: Settings },
]

const studentsData = [
  {
    id: 1,
    name: "Arjun Sharma",
    year: "SE",
    rollNo: "SE001",
    attendance: 45,
    cgpa: 6.2,
    riskLevel: "Critical",
    mentor: "Dr. Patel",
    fees: "Pending",
  },
  {
    id: 2,
    name: "Priya Patel",
    year: "TE",
    rollNo: "TE015",
    attendance: 78,
    cgpa: 7.8,
    riskLevel: "Low",
    mentor: "Prof. Kumar",
    fees: "Paid",
  },
  {
    id: 3,
    name: "Rahul Kumar",
    year: "FE",
    rollNo: "FE032",
    attendance: 38,
    cgpa: 5.1,
    riskLevel: "Critical",
    mentor: "Dr. Singh",
    fees: "Pending",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    year: "BE",
    rollNo: "BE008",
    attendance: 85,
    cgpa: 8.2,
    riskLevel: "Low",
    mentor: "Prof. Sharma",
    fees: "Paid",
  },
  {
    id: 5,
    name: "Vikram Joshi",
    year: "SE",
    rollNo: "SE022",
    attendance: 62,
    cgpa: 6.8,
    riskLevel: "Moderate",
    mentor: "Dr. Patel",
    fees: "Paid",
  },
  {
    id: 6,
    name: "Anita Gupta",
    year: "TE",
    rollNo: "TE041",
    attendance: 55,
    cgpa: 6.0,
    riskLevel: "Moderate",
    mentor: "Prof. Kumar",
    fees: "Pending",
  },
]

export default function HODStudentsPage() {
  return (
    <DashboardLayout title="Student Management" role="Head of Department" navigation={navigation}>
      <div className="space-y-6">
        {/* Search and Filter Bar */}
        <Card>
          <CardHeader>
            <CardTitle>Student Directory</CardTitle>
            <CardDescription>Manage and monitor all students in the department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search students..." className="pl-8" />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  <SelectItem value="FE">First Year</SelectItem>
                  <SelectItem value="SE">Second Year</SelectItem>
                  <SelectItem value="TE">Third Year</SelectItem>
                  <SelectItem value="BE">Final Year</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Risk Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="low">Low Risk</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Students Table */}
            <div className="space-y-4">
              {studentsData.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-4">
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
                                : "default"
                          }
                        >
                          {student.riskLevel}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {student.rollNo} • Attendance: {student.attendance}% • CGPA: {student.cgpa} • Mentor:{" "}
                        {student.mentor}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={student.fees === "Paid" ? "default" : "destructive"}>{student.fees}</Badge>
                    <Button size="sm" variant="outline">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <UserPlus className="h-3 w-3 mr-1" />
                      Assign
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">240</div>
              <p className="text-sm text-muted-foreground">Total Students</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-red-500">12</div>
              <p className="text-sm text-muted-foreground">Critical Risk</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-yellow-500">31</div>
              <p className="text-sm text-muted-foreground">Moderate Risk</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-500">197</div>
              <p className="text-sm text-muted-foreground">Low Risk</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
