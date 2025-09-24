import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, MessageSquare, BarChart3, Settings, TrendingUp, TrendingDown } from "lucide-react"

const navigation = [
  { name: "My Students", href: "/mentor", icon: Users },
  { name: "Schedule", href: "/mentor/schedule", icon: Calendar },
  { name: "Messages", href: "/mentor/messages", icon: MessageSquare },
  { name: "Analytics", href: "/mentor/analytics", icon: BarChart3, current: true },
  { name: "Settings", href: "/mentor/settings", icon: Settings },
]

const studentProgress = [
  { name: "Arjun Sharma", initialRisk: 85, currentRisk: 65, improvement: -20, trend: "improving" },
  { name: "Priya Patel", initialRisk: 25, currentRisk: 20, improvement: -5, trend: "stable" },
  { name: "Vikram Joshi", initialRisk: 55, currentRisk: 45, improvement: -10, trend: "improving" },
  { name: "Anita Gupta", initialRisk: 60, currentRisk: 70, improvement: 10, trend: "declining" },
]

export default function MentorAnalyticsPage() {
  return (
    <DashboardLayout title="Analytics" role="Mentor" navigation={navigation}>
      <div className="space-y-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">Under your mentorship</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Risk Reduction</CardTitle>
              <TrendingDown className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">-12%</div>
              <p className="text-xs text-muted-foreground">This semester</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sessions Conducted</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">78%</div>
              <p className="text-xs text-muted-foreground">Students improved</p>
            </CardContent>
          </Card>
        </div>

        {/* Student Progress Tracking */}
        <Card>
          <CardHeader>
            <CardTitle>Student Progress Tracking</CardTitle>
            <CardDescription>Risk level changes over time for your mentees</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {studentProgress.map((student, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{student.name}</span>
                      <Badge
                        variant={
                          student.trend === "improving"
                            ? "default"
                            : student.trend === "declining"
                              ? "destructive"
                              : "secondary"
                        }
                      >
                        {student.trend}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">
                        {student.initialRisk}% → {student.currentRisk}%
                      </span>
                      <span
                        className={`text-sm font-medium ${student.improvement < 0 ? "text-green-500" : "text-red-500"}`}
                      >
                        {student.improvement > 0 ? "+" : ""}
                        {student.improvement}%
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Risk Level</span>
                      <span>{student.currentRisk}%</span>
                    </div>
                    <Progress value={student.currentRisk} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Intervention Effectiveness</CardTitle>
              <CardDescription>Success rate of different intervention types</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>One-on-One Counseling</span>
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Academic Support</span>
                  <span>72%</span>
                </div>
                <Progress value={72} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Career Guidance</span>
                  <span>68%</span>
                </div>
                <Progress value={68} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Peer Support Groups</span>
                  <span>61%</span>
                </div>
                <Progress value={61} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Trends</CardTitle>
              <CardDescription>Your mentoring impact over time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <p className="font-medium">September</p>
                  <p className="text-sm text-muted-foreground">12 sessions, 3 critical cases</p>
                </div>
                <Badge variant="secondary">Good</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <p className="font-medium">October</p>
                  <p className="text-sm text-muted-foreground">15 sessions, 2 critical cases</p>
                </div>
                <Badge variant="default">Excellent</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <p className="font-medium">November</p>
                  <p className="text-sm text-muted-foreground">18 sessions, 1 critical case</p>
                </div>
                <Badge variant="default">Excellent</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <p className="font-medium">December</p>
                  <p className="text-sm text-muted-foreground">28 sessions, 1 critical case</p>
                </div>
                <Badge variant="default">Outstanding</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
