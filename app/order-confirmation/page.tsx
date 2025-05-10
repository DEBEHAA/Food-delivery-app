"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { CheckCircle2, ChevronRight, MapPin, Package, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Sample order data
const orderData = {
  orderId: "ORD-" + Math.floor(100000 + Math.random() * 900000),
  date: new Date().toLocaleDateString(),
  time: new Date().toLocaleTimeString(),
  status: "confirmed",
  estimatedDelivery: "30-45 minutes",
  items: [
    {
      id: 1,
      name: "Classic Veg Burger",
      price: 99,
      quantity: 2,
      image: "/burger2.jpeg?height=100&width=100",
    },
    {
      id: 5,
      name: "Margherita Pizza",
      price: 99,
      quantity: 1,
      image: "/burger7.jpeg?height=100&width=100",
    },
    {
      id: 10,
      name: "Spicy Wings",
      price: 99,
      quantity: 1,
      image: "/burger10.jpeg?height=100&width=100",
    },
  ],
  subtotal: 806,
  deliveryFee: 40,
  total: 846,
  paymentMethod: "Card",
  deliveryAddress: {
    name: "Archna",
    address: "123 Main Street, Apartment 4B",
    city: "erode",
    state: "tamilnadu",
    pincode: "6382078",
    phone: "9876543210",
  },
}

export default function OrderConfirmationPage() {
  const [currentStep, setCurrentStep] = useState(1)

  // Simulate order progress
  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentStep(2), 5000)
    const timer2 = setTimeout(() => setCurrentStep(3), 10000)
    const timer3 = setTimeout(() => setCurrentStep(4), 15000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="text-3xl font-bold">Order Confirmed!</h1>
          <p className="text-gray-600 mt-2">Your order #{orderData.orderId} has been placed successfully.</p>
        </div>

        {/* Order Tracking */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Track Your Order</CardTitle>
            <CardDescription>Estimated delivery in {orderData.estimatedDelivery}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              <div className="space-y-8">
                <div className="relative flex items-start">
                  <div
                    className={`absolute left-0 flex h-8 w-8 items-center justify-center rounded-full ${
                      currentStep >= 1 ? "bg-green-600 text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="ml-12">
                    <h3 className="font-semibold">Order Confirmed</h3>
                    <p className="text-sm text-gray-500">
                      {orderData.date} at {orderData.time}
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div
                    className={`absolute left-0 flex h-8 w-8 items-center justify-center rounded-full ${
                      currentStep >= 2 ? "bg-green-600 text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    <Package className="h-5 w-5" />
                  </div>
                  <div className="ml-12">
                    <h3 className="font-semibold">Order Prepared</h3>
                    <p className="text-sm text-gray-500">
                      {currentStep >= 2 ? "Your food is being prepared by our chefs" : "Waiting to start preparation"}
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div
                    className={`absolute left-0 flex h-8 w-8 items-center justify-center rounded-full ${
                      currentStep >= 3 ? "bg-green-600 text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    <Truck className="h-5 w-5" />
                  </div>
                  <div className="ml-12">
                    <h3 className="font-semibold">Out for Delivery</h3>
                    <p className="text-sm text-gray-500">
                      {currentStep >= 3 ? "Your order is on the way" : "Waiting for delivery"}
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div
                    className={`absolute left-0 flex h-8 w-8 items-center justify-center rounded-full ${
                      currentStep >= 4 ? "bg-green-600 text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="ml-12">
                    <h3 className="font-semibold">Delivered</h3>
                    <p className="text-sm text-gray-500">
                      {currentStep >= 4 ? "Enjoy your meal!" : "Waiting for delivery"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
  <div className="w-full h-[400px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197251667745!2d-122.42067958468176!3d37.77902627975706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5d8b7d65%3A0xf9e264a297f4f097!2sBurger%20Place!5e0!3m2!1sen!2sus!4v1684223456789!5m2!1sen!2sus"
      width="600"
      height="400"
      className="h-full w-full object-cover border-0 rounded-xl shadow-md"
    
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  {/* Google Maps Link */}
  <a
    href="https://www.google.co.in/maps/place/God+Of+Burgers/@11.3137201,77.7253869,407m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba96f005547273d:0x7f3ce701e2d73fd3!8m2!3d11.3137178!4d77.7264992!16s%2Fg%2F11wvw_gnt1?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline hover:text-blue-800"
  >
    View on Google Maps
  </a>

          </CardContent>
        </Card>

        {/* Order Details */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
            <CardDescription>Order #{orderData.orderId}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Items</h3>
              <div className="space-y-4">
                {orderData.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-md bg-gray-100">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right font-semibold">₹{item.price * item.quantity}</div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">Payment Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₹{orderData.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span>₹{orderData.deliveryFee}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>₹{orderData.total}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Payment Method</span>
                  <span>{orderData.paymentMethod}</span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">Delivery Address</h3>
              <div className="text-gray-600">
                <p>{orderData.deliveryAddress.name}</p>
                <p>{orderData.deliveryAddress.address}</p>
                <p>
                  {orderData.deliveryAddress.city}, {orderData.deliveryAddress.state} -{" "}
                  {orderData.deliveryAddress.pincode}
                </p>
                <p>Phone: {orderData.deliveryAddress.phone}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Need Help?</Button>
            <Link href="/dashboard">
              <Button className="bg-red-600 hover:bg-red-700">
                Go to Dashboard
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
