"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Bell, Menu, X, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface DashboardLayoutProps {
  children: React.ReactNode
  title: string
  role: string
  navigation: Array<{
    name: string
    href: string
    icon: React.ComponentType<any>
    current?: boolean
  }>
}

export function DashboardLayout({ children, title, role, navigation }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [notificationCount, setNotificationCount] = useState(3)
  const [notificationPanelOpen, setNotificationPanelOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    router.push("/")
  }

  const handleNotifications = () => {
    setNotificationPanelOpen(!notificationPanelOpen)
    if (!notificationPanelOpen) {
      setNotificationCount(0) // Mark as read when opening
    }
  }

  const notifications = [
    {
      id: 1,
      title: "High Risk Student Alert",
      message: "Student John Doe has been flagged as high risk for dropout",
      time: "2 minutes ago",
      type: "alert",
    },
    {
      id: 2,
      title: "Meeting Reminder",
      message: "Department meeting scheduled for tomorrow at 10 AM",
      time: "1 hour ago",
      type: "reminder",
    },
    {
      id: 3,
      title: "New Message",
      message: "You have a new message from Sarah Wilson",
      time: "3 hours ago",
      type: "message",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 w-64 bg-card border-r border-border">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-semibold">HeisenBugs</h2>
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <nav className="px-4 space-y-2">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant={item.current ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => {
                  router.push(item.href)
                  setSidebarOpen(false)
                }}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Button>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:block">
        <div className="flex flex-col h-full bg-card border-r border-border">
          <div className="flex items-center px-6 py-4">
            <h2 className="text-xl font-bold">HeisenBugs</h2>
          </div>
          <nav className="flex-1 px-4 space-y-2">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant={item.current ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => router.push(item.href)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Button>
            ))}
          </nav>
          <div className="p-4">
            <Button variant="outline" className="w-full bg-transparent" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" className="lg:hidden mr-2" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-xl font-semibold">{title}</h1>
                <p className="text-sm text-muted-foreground capitalize">{role} Dashboard</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="relative">
                <Button variant="ghost" size="sm" className="relative" onClick={handleNotifications}>
                  <Bell className="h-4 w-4" />
                  {notificationCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
                      {notificationCount}
                    </Badge>
                  )}
                </Button>

                {notificationPanelOpen && (
                  <div className="absolute right-0 top-full mt-2 w-80 z-50">
                    <Card className="shadow-lg border">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm">Notifications</CardTitle>
                        <CardDescription className="text-xs">
                          You have {notifications.length} notifications
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <ScrollArea className="h-64">
                          <div className="space-y-1">
                            {notifications.map((notification) => (
                              <div
                                key={notification.id}
                                className="flex flex-col space-y-1 p-3 hover:bg-muted/50 cursor-pointer border-b border-border/50 last:border-b-0"
                              >
                                <div className="flex items-start justify-between">
                                  <p className="text-sm font-medium leading-none">{notification.title}</p>
                                  <span className="text-xs text-muted-foreground">{notification.time}</span>
                                </div>
                                <p className="text-xs text-muted-foreground">{notification.message}</p>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                        <div className="p-3 border-t border-border">
                          <Button variant="ghost" size="sm" className="w-full text-xs">
                            View All Notifications
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>

        {notificationPanelOpen && (
          <div className="fixed inset-0 z-30" onClick={() => setNotificationPanelOpen(false)} />
        )}

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
