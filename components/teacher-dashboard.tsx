"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ClipboardCheck, Users, Calendar, TrendingDown, CheckCircle, X } from "lucide-react"
import { ScheduleMeetingModal } from "./schedule-meeting-modal"
import { SendMessageModal } from "./send-message-modal"

// Mock data for classes and students
const classes = [
  { id: "SE-A", name: "SE Computer A", subject: "Data Structures", students: 45 },
  { id: "SE-B", name: "SE Computer B", subject: "Database Management", students: 42 },
  { id: "TE-A", name: "TE Computer A", subject: "Software Engineering", students: 38 },
]

const studentsData = {
  "SE-A": [
    { id: 1, name: "Arjun Sharma", rollNo: "SE2023001", present: true },
    { id: 2, name: "Anita Desai", rollNo: "SE2023002", present: true },
    { id: 3, name: "Vikram Singh", rollNo: "SE2023003", present: false },
    { id: 4, name: "Kavya Nair", rollNo: "SE2023004", present: true },
    { id: 5, name: "Rahul Kumar", rollNo: "SE2023005", present: false },
  ],
  "SE-B": [
    { id: 6, name: "Priya Patel", rollNo: "SE2023006", present: true },
    { id: 7, name: "Amit Shah", rollNo: "SE2023007", present: true },
    { id: 8, name: "Sneha Reddy", rollNo: "SE2023008", present: true },
  ],
  "TE-A": [
    { id: 9, name: "Rohan Gupta", rollNo: "TE2022001", present: true },
    { id: 10, name: "Meera Joshi", rollNo: "TE2022002", present: false },
  ],
}

export function TeacherDashboard() {
  const [selectedClass, setSelectedClass] = useState("SE-A")
  const [attendance, setAttendance] = useState(studentsData)
  const [attendanceDate, setAttendanceDate] = useState(new Date().toISOString().split("T")[0])
  const [scheduleMeetingOpen, setScheduleMeetingOpen] = useState(false)
  const [sendMessageOpen, setSendMessageOpen] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState<any>(null)

  const handleAttendanceChange = (studentId: number, present: boolean) => {
    setAttendance((prev) => ({
      ...prev,
      [selectedClass]: prev[selectedClass].map((student) =>
        student.id === studentId ? { ...student, present } : student,
      ),
    }))
  }

  const saveAttendance = () => {
    alert(`Attendance saved for ${selectedClass} on ${attendanceDate}`)
  }

  const handleScheduleMeeting = (student?: any) => {
    setSelectedStudent(student)
    setScheduleMeetingOpen(true)
  }

  const handleSendMessage = (student?: any) => {
    setSelectedStudent(student)
    setSendMessageOpen(true)
  }

  const currentStudents = attendance[selectedClass] || []
  const presentCount = currentStudents.filter((s) => s.present).length
  const attendancePercentage =
    currentStudents.length > 0 ? Math.round((presentCount / currentStudents.length) * 100) : 0

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Classes</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{classes.length}</div>
            <p className="text-xs text-muted-foreground">Active classes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{classes.reduce((sum, cls) => sum + cls.students, 0)}</div>
            <p className="text-xs text-muted-foreground">Across all classes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Attendance</CardTitle>
            <ClipboardCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">{attendancePercentage}%</div>
            <p className="text-xs text-muted-foreground">
              {presentCount}/{currentStudents.length} present
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">At Risk Students</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">8</div>
            <p className="text-xs text-muted-foreground">Need attention</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="attendance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="attendance">Attendance Management</TabsTrigger>
          <TabsTrigger value="classes">My Classes</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="attendance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mark Attendance</CardTitle>
              <CardDescription>Select class and mark student attendance for today</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <label className="text-sm font-medium">Select Class</label>
                  <Select value={selectedClass} onValueChange={setSelectedClass}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {classes.map((cls) => (
                        <SelectItem key={cls.id} value={cls.id}>
                          {cls.name} - {cls.subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <label className="text-sm font-medium">Date</label>
                  <input
                    type="date"
                    value={attendanceDate}
                    onChange={(e) => setAttendanceDate(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background"
                  />
                </div>
              </div>

              <div className="border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Students ({currentStudents.length})</h3>
                  <div className="text-sm text-muted-foreground">
                    Present: {presentCount} | Absent: {currentStudents.length - presentCount}
                  </div>
                </div>

                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {currentStudents.map((student) => (
                    <div
                      key={student.id}
                      className="flex items-center justify-between p-3 border border-border rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          checked={student.present}
                          onCheckedChange={(checked) => handleAttendanceChange(student.id, checked as boolean)}
                        />
                        <div>
                          <div className="font-medium">{student.name}</div>
                          <div className="text-sm text-muted-foreground">{student.rollNo}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {student.present ? (
                          <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Present
                          </Badge>
                        ) : (
                          <Badge variant="destructive">
                            <X className="h-3 w-3 mr-1" />
                            Absent
                          </Badge>
                        )}
                        <Button size="sm" variant="outline" onClick={() => handleSendMessage(student)}>
                          Message
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleScheduleMeeting(student)}>
                          Schedule
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end mt-4">
                  <Button onClick={saveAttendance}>
                    <ClipboardCheck className="h-4 w-4 mr-2" />
                    Save Attendance
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="classes">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {classes.map((cls) => (
              <Card key={cls.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{cls.name}</CardTitle>
                  <CardDescription>{cls.subject}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Total Students:</span>
                      <span className="font-medium">{cls.students}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Average Attendance:</span>
                      <span className="font-medium text-green-500">85%</span>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleScheduleMeeting({ name: cls.name, role: "Class" })}
                    >
                      <Calendar className="h-3 w-3 mr-1" />
                      Schedule
                    </Button>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Reports</CardTitle>
              <CardDescription>Generate and view attendance reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                <ClipboardCheck className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Attendance reports and analytics would be displayed here</p>
                <Button className="mt-4">Generate Report</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <ScheduleMeetingModal
        open={scheduleMeetingOpen}
        onOpenChange={setScheduleMeetingOpen}
        recipientName={selectedStudent?.name || "Class"}
        recipientRole={selectedStudent?.role || "Student"}
        meetingType={selectedStudent?.role === "Class" ? "Class Meeting" : "Student Meeting"}
      />

      <SendMessageModal
        open={sendMessageOpen}
        onOpenChange={setSendMessageOpen}
        recipientName={selectedStudent?.name || ""}
        recipientRole="Student"
        prefilledSubject={selectedStudent ? `Regarding ${selectedStudent.name}'s Attendance` : ""}
      />
    </div>
  )
}
