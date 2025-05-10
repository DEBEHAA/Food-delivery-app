"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronLeft, CreditCard, MapPin, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"

// Sample cart data
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

// Sample addresses
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
    city: "erode",
    state: "Tamilnadu",
    pincode: "673902",
    phone: "9876543210",
  },
]

export default function CheckoutPage() {
  const [selectedAddress, setSelectedAddress] = useState(savedAddresses[0].id)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const deliveryFee = 40
  const total = subtotal + deliveryFee

  const handlePayment = () => {
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      toast({
        title: "Payment Successful",
        description: "Your order has been placed successfully!",
      })
      router.push("/order-confirmation")
    }, 2000)
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
          {/* Delivery Address */}
          <Card>
            <CardHeader className="flex flex-row items-center">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <CardTitle>Delivery Address</CardTitle>
                <CardDescription>Select where you want your order delivered</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <RadioGroup value={String(selectedAddress)} onValueChange={(value) => setSelectedAddress(Number(value))}>
                {savedAddresses.map((address) => (
                  <div key={address.id} className="flex items-start space-x-2 mb-4">
                    <RadioGroupItem value={String(address.id)} id={`address-${address.id}`} className="mt-1" />
                    <div className="grid gap-1.5">
                      <Label htmlFor={`address-${address.id}`} className="font-medium">
                        {address.name}
                      </Label>
                      <div className="text-sm text-gray-500">
                        <p>{address.address}</p>
                        <p>
                          {address.city}, {address.state} - {address.pincode}
                        </p>
                        <p>Phone: {address.phone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </RadioGroup>
              <Button variant="outline" className="mt-2">
                Add New Address
              </Button>
            </CardContent>
          </Card>

          {/* Delivery Options */}
          <Card>
            <CardHeader className="flex flex-row items-center">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <CardTitle>Delivery Options</CardTitle>
                <CardDescription>Choose your preferred delivery method</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="standard">
                <div className="flex items-start space-x-2 mb-4">
                  <RadioGroupItem value="standard" id="delivery-standard" className="mt-1" />
                  <div className="grid gap-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="delivery-standard" className="font-medium">
                        Standard Delivery
                      </Label>
                      <span className="font-medium">₹40</span>
                    </div>
                    <p className="text-sm text-gray-500">Delivery within 30-45 minutes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="express" id="delivery-express" className="mt-1" />
                  <div className="grid gap-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="delivery-express" className="font-medium">
                        Express Delivery
                      </Label>
                      <span className="font-medium">₹80</span>
                    </div>
                    <p className="text-sm text-gray-500">Delivery within 15-20 minutes</p>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card>
            <CardHeader className="flex flex-row items-center">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                <CreditCard className="h-5 w-5" />
              </div>
              <div>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Select your preferred payment method</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="card">Card</TabsTrigger>
                  <TabsTrigger value="upi">UPI</TabsTrigger>
                 
                  <TabsTrigger value="cod">Cash</TabsTrigger>
                </TabsList>
                <TabsContent value="card" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name-on-card">Name on Card</Label>
                    <Input id="name-on-card" placeholder="Debehaa" />
                  </div>
                </TabsContent>
                <TabsContent value="upi" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="upi-id">UPI ID</Label>
                    <Input id="upi-id" placeholder="yourname@upi" />
                  </div>
                </TabsContent>
                <TabsContent value="wallet" className="space-y-4 pt-4">
                  <RadioGroup defaultValue="paytm">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="paytm" id="wallet-paytm" />
                      <Label htmlFor="wallet-paytm">Paytm</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phonepe" id="wallet-phonepe" />
                      <Label htmlFor="wallet-phonepe">PhonePe</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="amazonpay" id="wallet-amazonpay" />
                      <Label htmlFor="wallet-amazonpay">Amazon Pay</Label>
                    </div>
                  </RadioGroup>
                </TabsContent>
                <TabsContent value="cod" className="pt-4">
                  <p className="text-sm text-gray-500">You will pay ₹{total} in cash when your order is delivered.</p>
                </TabsContent>
              </Tabs>
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
