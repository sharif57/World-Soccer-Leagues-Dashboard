"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", value: 250 },
  { month: "Feb", value: 300 },
  { month: "Mar", value: 500 },
  { month: "Apr", value: 450 },
  { month: "May", value: 650 },
  { month: "Jun", value: 600 },
  { month: "Jul", value: 400 },
  { month: "Aug", value: 550 },
  { month: "Sep", value: 500 },
  { month: "Oct", value: 300 },
  { month: "Nov", value: 450 },
  { month: "Dec", value: 400 },
];

export function UserGrowthChart() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>User Growth</CardTitle>
            <p className="text-sm text-gray-600">1 Jan 24 - 5 Jan 25</p>
          </div>
          <div className="flex items-center gap-2">
            
            <Select defaultValue="month">
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">Month</SelectItem>
                <SelectItem value="year">Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">Total 4065</p>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Bar dataKey="value" fill="#203463" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
