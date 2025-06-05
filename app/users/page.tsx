"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trash2, Search, ChevronLeft, ChevronRight } from "lucide-react";

interface User {
  id: number;
  serial: number;
  name: string;
  email: string;
  joiningDate: string;
  lastLogIn: string;
  avatar: string;
}

// Mock user data
const initialUsers: User[] = [
  {
    id: 1,
    serial: 1,
    name: "Xyz",
    email: "xyz1234@gmail.com",
    joiningDate: "1 Jan 2025",
    lastLogIn: "1 Jan 2025",
    avatar: "/Logo.svg",
  },
  {
    id: 2,
    serial: 2,
    name: "Xyz",
    email: "xyz1234@gmail.com",
    joiningDate: "1 Jan 2025",
    lastLogIn: "1 Jan 2025",
    avatar: "/Logo.svg",
  },
  {
    id: 3,
    serial: 3,
    name: "Xyz",
    email: "xyz1234@gmail.com",
    joiningDate: "1 Jan 2025",
    lastLogIn: "1 Jan 2025",
    avatar: "/Logo.svg",
  },
  {
    id: 4,
    serial: 44,
    name: "Xyz",
    email: "xyz1234@gmail.com",
    joiningDate: "1 Jan 2025",
    lastLogIn: "1 Jan 2025",
    avatar: "/Logo.svg",
  },
  {
    id: 5,
    serial: 5,
    name: "Xyz",
    email: "xyz1234@gmail.com",
    joiningDate: "1 Jan 2025",
    lastLogIn: "1 Jan 2025",
    avatar: "/Logo.svg",
  },
  {
    id: 6,
    serial: 6,
    name: "Xyz",
    email: "xyz1234@gmail.com",
    joiningDate: "1 Jan 2025",
    lastLogIn: "1 Jan 2025",
    avatar: "/Logo.svg",
  },
  {
    id: 7,
    serial: 7,
    name: "Xyz",
    email: "xyz1234@gmail.com",
    joiningDate: "1 Jan 2025",
    lastLogIn: "1 Jan 2025",
    avatar: "/Logo.svg",
  },
  {
    id: 8,
    serial: 8,
    name: "Xyz",
    email: "xyz1234@gmail.com",
    joiningDate: "1 Jan 2025",
    lastLogIn: "1 Jan 2025",
    avatar: "/Logo.svg",
  },
  {
    id: 9,
    serial: 9,
    name: "Xyz",
    email: "xyz1234@gmail.com",
    joiningDate: "1 Jan 2025",
    lastLogIn: "1 Jan 2025",
    avatar: "/Logo.svg",
  },
  {
    id: 10,
    serial: 10,
    name: "Xyz",
    email: "xyz1234@gmail.com",
    joiningDate: "1 Jan 2025",
    lastLogIn: "1 Jan 2025",
    avatar: "/Logo.svg",
  },
  {
    id: 11,
    serial: 11,
    name: "Xyz",
    email: "xyz1234@gmail.com",
    joiningDate: "1 Jan 2025",
    lastLogIn: "1 Jan 2025",
    avatar: "/Logo.svg",
  },
  {
    id: 12,
    serial: 12,
    name: "Xyz",
    email: "xyz1234@gmail.com",
    joiningDate: "1 Jan 2025",
    lastLogIn: "1 Jan 2025",
    avatar: "/Logo.svg",
  },
  {
    id: 13,
    serial: 13,
    name: "Xyz",
    email: "xyz1234@gmail.com",
    joiningDate: "1 Jan 2025",
    lastLogIn: "1 Jan 2025",
    avatar: "/Logo.svg",
  },
  {
    id: 14,
    serial: 14,
    name: "Xyz",
    email: "xyz1234@gmail.com",
    joiningDate: "1 Jan 2025",
    lastLogIn: "1 Jan 2025",
    avatar: "/Logo.svg",
  },
];

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const usersPerPage = 7;

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination calculations
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = filteredUsers.slice(
    startIndex,
    startIndex + usersPerPage
  );

  // Delete user function
  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Pagination functions
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full  mx-auto p-4">
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-medium">Users List</CardTitle>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {/* Table Header */}
          <div className="bg-blue-50 border-b border-gray-200">
            <div className="grid grid-cols-7 gap-4 px-6 py-3 text-sm font-medium text-gray-700">
              <div>Image</div>
              <div>#Serial</div>
              <div>User Name</div>
              <div>Email</div>
              <div>Joining Date</div>
              <div>Last Log In</div>
              <div>Action</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {currentUsers.map((user, index) => (
              <div
                key={user.id}
                className={`grid grid-cols-7 gap-4 px-6 py-4 items-center text-sm ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                {/* Avatar */}
                <div>
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                    />
                    <AvatarFallback className="bg-orange-100 text-orange-600">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Serial */}
                <div className="text-gray-900">#{user.serial}</div>

                {/* Name */}
                <div className="text-gray-900">{user.name}</div>

                {/* Email */}
                <div className="text-gray-600">{user.email}</div>

                {/* Joining Date */}
                <div className="text-gray-600">{user.joiningDate}</div>

                {/* Last Log In */}
                <div className="text-gray-600">{user.lastLogIn}</div>

                {/* Action */}
                <div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-gray-400 hover:text-red-600"
                    onClick={() => deleteUser(user.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {currentUsers.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p>No users found</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2 p-6 border-t border-gray-100">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-1 px-3 py-2"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Back</span>
              </Button>

              <div className="flex items-center space-x-1">
                <Button
                  variant={currentPage === 1 ? "default" : "outline"}
                  size="sm"
                  className={`w-8 h-8 p-0 ${
                    currentPage === 1
                      ? "bg-gray-800 hover:bg-gray-700 text-white"
                      : ""
                  }`}
                  onClick={() => goToPage(1)}
                >
                  1
                </Button>

                {totalPages > 2 && currentPage > 2 && (
                  <span className="px-2 text-gray-500">...</span>
                )}

                {currentPage > 1 && currentPage < totalPages && (
                  <Button
                    variant="default"
                    size="sm"
                    className="w-8 h-8 p-0 bg-gray-800 hover:bg-gray-700 text-white"
                  >
                    {currentPage}
                  </Button>
                )}

                {totalPages > 2 && currentPage < totalPages - 1 && (
                  <span className="px-2 text-gray-500">...</span>
                )}

                {totalPages > 1 && (
                  <Button
                    variant={currentPage === totalPages ? "default" : "outline"}
                    size="sm"
                    className={`w-8 h-8 p-0 ${
                      currentPage === totalPages
                        ? "bg-gray-800 hover:bg-gray-700 text-white"
                        : ""
                    }`}
                    onClick={() => goToPage(totalPages)}
                  >
                    {totalPages}
                  </Button>
                )}
              </div>

              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-1 px-3 py-2"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                <span>Next</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Users Summary */}
          <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 text-sm text-gray-600">
            Showing {currentUsers.length} of {filteredUsers.length} users
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
