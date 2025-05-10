"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { BarChart3, Clock, Package, ShoppingBag, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

// Sample data for dashboard
const dashboardData = {
  stats: {
    totalOrders: 5,
    totalRevenue: 3520,
    totalCustomers: 5,
    pendingOrders: 1,
  },
  recentOrders: [
    {
      id: "ORD-123456",
      customer: "Archna",
      date: "2025-05-13",
      status: "Processing",
      total: 846,
    },
    {
      id: "ORD-123455",
      customer: "Debehaa",
      date: "2025-05-12",
      status: "Delivered",
      total: 1250,
    },
    {
      id: "ORD-123454",
      customer: "Anand",
      date: "2025-05-10",
      status: "Delivered",
      total: 750,
    },
    {
      id: "ORD-123453",
      customer: "Deepika",
      date: "2025-05-08",
      status: "Delivered",
      total: 980,
    },
    {
      id: "ORD-123452",
      customer: "Bairavi",
      date: "2025-05-05",
      status: "Delivered",
      total: 540,
    },
  ],
  topProducts: [
    {
      id: 1,
      name: "Classic Veg Burger",
      category: "Burgers",
      sales: 2,
      revenue: 10062,
      rating: 4.5,
    },
    {
      id: 5,
      name: "Margherita Pizza",
      category: "Pizza",
      sales: 2,
      revenue: 16185,
      rating: 4.7,
    },
    {
      id: 10,
      name: "Spicy Wings",
      category: "Fried Chicken",
      sales: 1,
      revenue: 15548,
      rating: 4.3,
    },
    {
      id: 15,
      name: "Chicken Shawarma Roll",
      category: "Shawarma",
      sales: 5,
      revenue: 6705,
      rating: 4.6,
    },
  ],
  salesData: [
    { month: "Jan", sales: 0 },
    { month: "Feb", sales: 0 },
    { month: "Mar", sales: 0 },
    { month: "Apr", sales: 0},
    { month: "May", sales: 4366},
    { month: "Jun", sales: 0 },
    { month: "Jul", sales: 0 },
    { month: "Aug", sales: 0 },
    { month: "Sep", sales: 0 },
    { month: "Oct", sales: 0 },
    { month: "Nov", sales: 0 },
    { month: "Dec", sales: 0 },
  ],
  categoryData: [
    { name: "Burgers", value: 35 },
    { name: "Pizza", value: 25 },
    { name: "Fried Chicken", value: 15 },
    { name: "Shawarma", value: 10 },
    { name: "Others", value: 15 },
  ],
}

export default function DashboardPage() {
  const [userType, setUserType] = useState("admin") // "admin" or "customer"
  const router = useRouter()

  // For a real app, you would fetch the user type from an API or context
  // This is just a simulation for the demo
  const handleUserTypeChange = (type: string) => {
    setUserType(type)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      {/* User type selector (for demo purposes) */}
      <div className="mb-8 flex justify-end">
        <Tabs value={userType} onValueChange={handleUserTypeChange}>
          <TabsList>
          
            <TabsTrigger value="admin">Admin View</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {userType === "admin" ? (
        // Admin Dashboard
        <div className="space-y-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹{dashboardData.stats.totalRevenue.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">+2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardData.stats.totalOrders}</div>
                <p className="text-xs text-muted-foreground">+2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardData.stats.totalCustomers}</div>
                <p className="text-xs text-muted-foreground">+5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardData.stats.pendingOrders}</div>
                <p className="text-xs text-muted-foreground">-2% from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Sales Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
              <CardDescription>Monthly sales for the current year</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  sales: {
                    label: "Sales",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="aspect-[4/3] w-full"
              >
                <BarChart data={dashboardData.salesData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Recent Orders and Top Products */}
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Latest orders across the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dashboardData.recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{order.id}</p>
                        <p className="text-sm text-gray-500">{order.customer}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹{order.total}</p>
                        <p
                          className={`text-sm ${
                            order.status === "Delivered"
                              ? "text-green-600"
                              : order.status === "Processing"
                                ? "text-blue-600"
                                : "text-red-600"
                          }`}
                        >
                          {order.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="mt-4 w-full">
                  View All Orders
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Products</CardTitle>
                <CardDescription>Best selling products this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dashboardData.topProducts.map((product) => (
                    <div key={product.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-500">{product.category}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center">
                          <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{product.rating}</span>
                        </div>
                        <p className="text-sm text-gray-500">{product.sales} sold</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="mt-4 w-full">
                  View All Products
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Admin Actions */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Manage Products</CardTitle>
                <CardDescription>Add, edit, or remove products</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-red-600 hover:bg-red-700">Manage Products</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage customer accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-red-600 hover:bg-red-700">Manage Users</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Promotions</CardTitle>
                <CardDescription>Create coupons and deals</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-red-600 hover:bg-red-700">Manage Promotions</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        // Customer Dashboard
        <div className="space-y-8">
          <h1 className="text-3xl font-bold">My Dashboard</h1>

          {/* User Profile Summary */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">JD</span>
              </div>
              <div>
                <CardTitle>John Doe</CardTitle>
                <CardDescription>john.doe@example.com | +91 9876543210</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-gray-100 p-4 text-center">
                  <p className="text-sm text-gray-500">Total Orders</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div className="rounded-lg bg-gray-100 p-4 text-center">
                  <p className="text-sm text-gray-500">Pending Orders</p>
                  <p className="text-2xl font-bold">1</p>
                </div>
                <div className="rounded-lg bg-gray-100 p-4 text-center">
                  <p className="text-sm text-gray-500">Reward Points</p>
                  <p className="text-2xl font-bold">250</p>
                </div>
              </div>
              <div className="mt-4 flex gap-4">
                <Button variant="outline" className="flex-1">
                  Edit Profile
                </Button>
                <Button variant="outline" className="flex-1">
                  Manage Addresses
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Track and manage your orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dashboardData.recentOrders.slice(0, 3).map((order) => (
                  <div key={order.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-gray-500">{order.date}</p>
                      <p
                        className={`text-sm ${
                          order.status === "Delivered"
                            ? "text-green-600"
                            : order.status === "Processing"
                              ? "text-blue-600"
                              : "text-red-600"
                        }`}
                      >
                        {order.status}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹{order.total}</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        <Package className="mr-2 h-4 w-4" />
                        Track Order
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-4 w-full">
                View All Orders
              </Button>
            </CardContent>
          </Card>

          {/* Recommended for You */}
          <Card>
            <CardHeader>
              <CardTitle>Recommended for You</CardTitle>
              <CardDescription>Based on your previous orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {dashboardData.topProducts.slice(0, 3).map((product) => (
                  <div key={product.id} className="rounded-lg border p-4">
                    <div className="mb-2 h-32 rounded-md bg-gray-100">
                      <img
                        src="/placeholder.svg?height=128&width=256"
                        alt={product.name}
                        className="h-full w-full object-cover rounded-md"
                      />
                    </div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <div className="mt-1 flex items-center">
                      <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{product.rating}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-medium">₹{(product.revenue / product.sales).toFixed(0)}</span>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
