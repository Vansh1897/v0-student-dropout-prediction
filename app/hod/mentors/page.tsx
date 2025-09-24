import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { BarChart3, Users, UserCheck, Settings, Calendar, Search, Plus, Eye, MessageSquare } from "lucide-react"

const navigation = [
  { name: "Overview", href: "/hod", icon: BarChart3 },
  { name: "Students", href: "/hod/students", icon: Users },
  { name: "Mentors", href: "/hod/mentors", icon: UserCheck, current: true },
  { name: "Schedule", href: "/hod/schedule", icon: Calendar },
  { name: "Settings", href: "/hod/settings", icon: Settings },
]

const mentorsData = [
  {
    id: 1,
    name: "Dr. Rajesh Patel",
    department: "Computer Engineering",
    students: 15,
    experience: "8 years",
    specialization: "AI/ML",
    availability: "Available",
  },
  {
    id: 2,
    name: "Prof. Sunita Kumar",
    department: "Computer Engineering",
    students: 12,
    experience: "6 years",
    specialization: "Web Development",
    availability: "Busy",
  },
  {
    id: 3,
    name: "Dr. Amit Singh",
    department: "Computer Engineering",
    students: 18,
    experience: "10 years",
    specialization: "Data Science",
    availability: "Available",
  },
  {
    id: 4,
    name: "Prof. Meera Sharma",
    department: "Computer Engineering",
    students: 14,
    experience: "5 years",
    specialization: "Cybersecurity",
    availability: "Available",
  },
]

export default function HODMentorsPage() {
  return (
    <DashboardLayout title="Mentor Management" role="Head of Department" navigation={navigation}>
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Mentors Directory</h2>
            <p className="text-muted-foreground">Manage mentors and their student assignments</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New Mentor
          </Button>
        </div>

        {/* Search Bar */}
        <Card>
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search mentors..." className="pl-8" />
            </div>
          </CardContent>
        </Card>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mentorsData.map((mentor) => (
            <Card key={mentor.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{mentor.name}</CardTitle>
                    <CardDescription>{mentor.department}</CardDescription>
                  </div>
                  <Badge variant={mentor.availability === "Available" ? "default" : "secondary"}>
                    {mentor.availability}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Students:</span>
                    <div className="font-medium">{mentor.students}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Experience:</span>
                    <div className="font-medium">{mentor.experience}</div>
                  </div>
                </div>
                <div>
                  <span className="text-muted-foreground text-sm">Specialization:</span>
                  <div className="font-medium">{mentor.specialization}</div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Eye className="h-3 w-3 mr-1" />
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">4</div>
              <p className="text-sm text-muted-foreground">Total Mentors</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">59</div>
              <p className="text-sm text-muted-foreground">Students Assigned</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">3</div>
              <p className="text-sm text-muted-foreground">Available Now</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">15</div>
              <p className="text-sm text-muted-foreground">Avg Students/Mentor</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
