import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Bell, Mail, MessageSquare, Settings, Trash2 } from "lucide-react"

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: "New user registration",
      message: "John Doe has registered for an account",
      time: "5 minutes ago",
      type: "user",
      read: false,
    },
    {
      id: 2,
      title: "Match result updated",
      message: "Team Alpha vs Team Beta match result has been updated",
      time: "1 hour ago",
      type: "match",
      read: false,
    },
    {
      id: 3,
      title: "New community post",
      message: "Sarah Wilson created a new poll in the community",
      time: "2 hours ago",
      type: "community",
      read: true,
    },
    {
      id: 4,
      title: "System maintenance",
      message: "Scheduled maintenance will begin at 2:00 AM",
      time: "1 day ago",
      type: "system",
      read: true,
    },
  ]

  const notificationSettings = [
    { id: 1, label: "Email notifications", enabled: true },
    { id: 2, label: "Push notifications", enabled: true },
    { id: 3, label: "SMS notifications", enabled: false },
    { id: 4, label: "Match updates", enabled: true },
    { id: 5, label: "User activities", enabled: true },
    { id: 6, label: "Community posts", enabled: false },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <div className="flex gap-2">
          <Button variant="outline">Mark All Read</Button>
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex items-start gap-4 p-4 border rounded-lg ${
                      !notification.read ? "bg-blue-50 border-blue-200" : ""
                    }`}
                  >
                    <div className="p-2 bg-gray-100 rounded-lg">
                      {notification.type === "user" && <Bell className="w-4 h-4" />}
                      {notification.type === "match" && <Settings className="w-4 h-4" />}
                      {notification.type === "community" && <MessageSquare className="w-4 h-4" />}
                      {notification.type === "system" && <Mail className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium">{notification.title}</h3>
                        {!notification.read && (
                          <Badge variant="destructive" className="text-xs">
                            New
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{notification.message}</p>
                      <p className="text-xs text-gray-500">{notification.time}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notificationSettings.map((setting) => (
                  <div key={setting.id} className="flex items-center justify-between">
                    <label className="text-sm font-medium">{setting.label}</label>
                    <Switch defaultChecked={setting.enabled} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
