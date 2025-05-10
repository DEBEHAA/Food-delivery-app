import { NextResponse } from "next/server"

// Sample orders data
const orders = [
  {
    id: "ORD-123456",
    userId: 1,
    items: [
      { id: 1, name: "Classic Veg Burger", price: 129, quantity: 2 },
      { id: 5, name: "Margherita Pizza", price: 249, quantity: 1 },
    ],
    total: 507,
    status: "Delivered",
    paymentMethod: "Card",
    deliveryAddress: {
      name: "John Doe",
      address: "123 Main Street, Apartment 4B",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001",
      phone: "9876543210",
    },
    createdAt: "2023-05-07T10:30:00Z",
  },
  {
    id: "ORD-123455",
    userId: 1,
    items: [
      { id: 10, name: "Spicy Wings", price: 299, quantity: 2 },
      { id: 7, name: "Chicken Pepperoni", price: 399, quantity: 1 },
    ],
    total: 997,
    status: "Processing",
    paymentMethod: "UPI",
    deliveryAddress: {
      name: "John Doe",
      address: "123 Main Street, Apartment 4B",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001",
      phone: "9876543210",
    },
    createdAt: "2023-05-07T15:45:00Z",
  },
]

export async function GET(request: Request) {
  // Get the search params
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("userId")
  const orderId = searchParams.get("orderId")

  if (orderId) {
    const order = orders.find((o) => o.id === orderId)
    if (!order) {
      return NextResponse.json({ success: false, message: "Order not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true, order })
  }

  if (userId) {
    const userOrders = orders.filter((o) => o.userId === Number.parseInt(userId))
    return NextResponse.json({ success: true, orders: userOrders })
  }

  return NextResponse.json({ success: true, orders })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // In a real app, you would validate and save to a database
    // For this demo, we'll just return the data with an ID
    const newOrder = {
      id: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
      ...body,
      status: "Processing",
      createdAt: new Date().toISOString(),
    }

    return NextResponse.json({ success: true, order: newOrder })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 })
  }
}
