"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronLeft, CreditCard, MapPin, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"

// Declare Razorpay type globally
declare global {
  interface Window {
    Razorpay: any
  }
}

const cartItems = [
  {
    id: 1,
    name: "Classic Veg Burger",
    price: 99,
    quantity: 2,
    image: "/placeholder.svg?height=100&width=100",
    veg: true,
  },
  {
    id: 5,
    name: "Margherita Pizza",
    price: 99,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
    veg: true,
  },
  {
    id: 10,
    name: "Spicy Wings",
    price: 99,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
    veg: false,
  },
]

const savedAddresses = [
  {
    id: 1,
    name: "Home",
    address: "123 Main Street, Apartment 4B",
    city: "Erode",
    state: "Tamilnadu",
    pincode: "6382090",
    phone: "9876543210",
  },
  {
    id: 2,
    name: "Office",
    address: "456 Business Park, Building C",
    city: "Erode",
    state: "Tamilnadu",
    pincode: "673902",
    phone: "9876543210",
  },
]

export default function CheckoutPage() {
  const [selectedAddress, setSelectedAddress] = useState(savedAddresses[0].id)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [prefilledName, setPrefilledName] = useState("Customer")
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const name = localStorage.getItem("name") || "Customer"
      setPrefilledName(name)

      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.async = true
      script.onload = () => console.log("Razorpay SDK loaded")
      script.onerror = () => console.error("Failed to load Razorpay SDK")
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }
  }, [])

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const deliveryFee = 40
  const total = subtotal + deliveryFee

  const handlePayment = async () => {
    if (typeof window === "undefined" || !window.Razorpay) {
      alert("Razorpay SDK not loaded")
      return
    }

    setIsProcessing(true)

    const options = {
      key: "rzp_test_4rdgre6savrrmw",
      amount: total * 100,
      currency: "INR",
      name: "God of Burger",
      description: "Order Payment",
      handler: async function (response: any) {
        toast({
          title: "Payment Successful",
          description: `Payment ID: ${response.razorpay_payment_id}`,
        })
        router.push("/order-confirmation")
      },
      prefill: {
        name: prefilledName,
        email: "customer@example.com",
        contact: "9876543210",
      },
      notes: {
        address: "Customer address",
      },
      theme: {
        color: "#EF4444",
      },
    }

    const pay = new window.Razorpay(options)
    pay.open()
    setIsProcessing(false)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Link href="/cart" className="inline-flex items-center text-gray-600 hover:text-red-600">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Cart
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>
                <MapPin className="mr-2 inline-block" /> Delivery Address
              </CardTitle>
              <CardDescription>Select your delivery address</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={selectedAddress.toString()}
                onValueChange={(val) => setSelectedAddress(parseInt(val))}
                className="space-y-4"
              >
                {savedAddresses.map((address) => (
                  <div key={address.id} className="flex items-start space-x-4">
                    <RadioGroupItem value={address.id.toString()} id={`address-${address.id}`} />
                    <Label htmlFor={`address-${address.id}`} className="cursor-pointer w-full">
                      <div className="font-medium">{address.name}</div>
                      <div className="text-sm text-gray-500">
                        {address.address}, {address.city}, {address.state} - {address.pincode}<br />
                        Phone: {address.phone}
                      </div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <Truck className="mr-2 inline-block" /> Delivery Options
              </CardTitle>
              <CardDescription>Choose your delivery preference</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="standard" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="standard">Standard</TabsTrigger>
                  <TabsTrigger value="express">Express</TabsTrigger>
                </TabsList>
                <TabsContent value="standard">
                  <p className="mt-2 text-gray-600">Delivered within 3-5 business days.</p>
                </TabsContent>
                <TabsContent value="express">
                  <p className="mt-2 text-gray-600">Delivered within 1-2 business days. Additional charges may apply.</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <CreditCard className="mr-2 inline-block" /> Payment Method
              </CardTitle>
              <CardDescription>Select your payment option</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card">Credit / Debit Card</Label>
                </div>
                <div className="flex items-center space-x-4">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod">Cash on Delivery</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Review your order details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <span className="font-medium">{item.name}</span>
                    <span className="text-gray-500"> x {item.quantity}</span>
                  </div>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-red-600 hover:bg-red-700" onClick={handlePayment} disabled={isProcessing}>
                {isProcessing ? "Processing..." : `Pay ₹${total}`}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}