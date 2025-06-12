"use client"

import type { ReactNode } from "react"
import { User, Lock, Shield, FileText, ScrollText, Bell, ChevronRight } from "lucide-react"
import { Switch } from "@/components/ui/switch"

interface SettingsLayoutProps {
  children: ReactNode
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function SettingsLayout({ children, activeSection, onSectionChange }: SettingsLayoutProps) {
  const menuItems = [
    {
      id: "profile",
      label: "Profile Information",
      icon: User,
      hasArrow: true,
    },
    {
      id: "password",
      label: "Change Password",
      icon: Lock,
      hasArrow: true,
    },
    {
      id: "trust",
      label: "Trust and Safety",
      icon: Shield,
      hasArrow: true,
    },
    {
      id: "privacy",
      label: "Privacy and Policy",
      icon: FileText,
      hasArrow: true,
    },
    {
      id: "terms",
      label: "Terms and conditions",
      icon: ScrollText,
      hasArrow: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Sidebar */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                  activeSection === item.id
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.hasArrow && <ChevronRight className="w-4 h-4 text-gray-400" />}
              </button>
            ))}

            {/* Push Notifications Toggle */}
            <div className="flex items-center justify-between p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-600">Push Notifications</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">On</span>
                <Switch defaultChecked />
                <span className="text-sm text-gray-500">Off</span>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">{children}</div>
      </div>
    </div>
  )
}
