"use client";
import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {  Mail } from "lucide-react";
import { useRouter } from "next/navigation";


export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);


    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Login attempt:", { email });
    router.push("/auth/verfiy_email");
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl font-semibold text-gray-900">
           Forgot Password
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
                  required
                />
              </div>
            </div>

            

            <Button
              type="submit"
              className="w-full bg-slate-800 hover:bg-slate-900 text-white py-2.5 rounded-lg font-medium"
              disabled={isLoading}
            >
              {isLoading ? "Send OTP..." : "Send OTP"}
            </Button>
          </form>

      
        </CardContent>
      </Card>
    </div>
  );
}
