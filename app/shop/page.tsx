"use client"

import { useState } from "react"
import { ArrowRight, ChevronRight } from "lucide-react"

interface ShoppingOption {
  id: string
  name: string
  logo: string
  checked: boolean
}

export default function Component() {
  const [selectedCategory, setSelectedCategory] = useState("Shopping")
  const [shoppingOptions, setShoppingOptions] = useState<ShoppingOption[]>([
    { id: "amazon", name: "Amazon", logo: "/amazon.png", checked: false },
    { id: "ebay", name: "Ebay", logo: "/overstock.png", checked: false },
    { id: "overstock", name: "Overstock", logo: "/target.png", checked: false },
    { id: "zappos", name: "Zappos", logo: "/walmart.png", checked: false },
    { id: "target", name: "Target", logo: "/walmart.png", checked: false },
    { id: "sears", name: "Sears", logo: "/walmart.png", checked: false },
    { id: "walmart1", name: "Walmart", logo: "/walmart.png", checked: false },
    { id: "walmart2", name: "Walmart", logo: "/walmart.png", checked: false },
  ])

  const categories = [
    { id: "shopping", name: "Shopping", active: true },
    { id: "sports", name: "Sports", active: false },
    { id: "crypto", name: "Crypto", active: false },
  ]

  const handleCheckboxChange = (id: string) => {
    setShoppingOptions((prev) =>
      prev.map((option) => (option.id === id ? { ...option, checked: !option.checked } : option)),
    )
  }

  const handleAddNow = () => {
    const selectedOptions = shoppingOptions.filter((option) => option.checked)
    console.log("Selected options:", selectedOptions)
    // Handle form submission here
  }

  return (
    <div className=" bg-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <h1 className="text-xl font-medium text-gray-900 mb-8">Settings</h1>

            <div className="space-y-1">
              <p className="text-sm text-gray-500 mb-4">Select Category</p>

              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`w-full text-[30px] font-semibold flex items-center justify-between px-3 py-2.5 text-left rounded-md transition-colors ${
                    selectedCategory === category.name ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span className="font-medium ">{category.name}</span>
                  <ArrowRight className="size-6 " />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="grid grid-cols-2 gap-6">
                {shoppingOptions.map((option) => (
                  <label key={option.id} className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={option.checked}
                      onChange={() => handleCheckboxChange(option.id)}
                      className="size-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="text-gray-700 text-2xl font-medium group-hover:text-gray-900">{option.name}</span>
                    <div className="flex-1 flex justify-end">
                      <div className="bg-gray-100 px-3 py-2 rounded-md">
                        <img
                          src={option.logo || "/placeholder.svg"}
                          alt={`${option.name} logo`}
                          className="h- object-contain"
                        />
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleAddNow}
                  className="bg-slate-700 hover:bg-slate-800 text-white font-medium px-8 py-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                >
                  Add Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
