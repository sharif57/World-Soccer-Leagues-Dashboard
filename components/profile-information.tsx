"use client"

import { useState } from "react"
import { Camera, Edit2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function ProfileInformation() {
  const [name, setName] = useState("Mr. John")
  const [email, setEmail] = useState("Mmr1234Joh@gmail.com")
  const [isEditing, setIsEditing] = useState({ name: false, email: false })

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving profile information:", { name, email })
    setIsEditing({ name: false, email: false })
  }

  return (
    <div className="space-y-8">
      {/* Profile Picture */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100">
            <Image
              src="/placeholder.svg?height=96&width=96"
              alt="Profile picture"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          <button className="absolute bottom-0 right-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
            <Camera className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </Label>
          <div className="relative">
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditing.name}
              className="pr-10 bg-gray-50 border-gray-200"
            />
            <button
              onClick={() => setIsEditing((prev) => ({ ...prev, name: !prev.name }))}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </Label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!isEditing.email}
              className="pr-10 bg-gray-50 border-gray-200"
            />
            <button
              onClick={() => setIsEditing((prev) => ({ ...prev, email: !prev.email }))}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center pt-4">
        <Button
          onClick={handleSave}
          className="px-8 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-lg font-medium"
        >
          Save Change
        </Button>
      </div>
    </div>
  )
}
