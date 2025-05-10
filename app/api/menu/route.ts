import { NextResponse } from "next/server"

// Sample menu data
const menuData = {
  categories: [
    { id: 1, name: "Burgers", count: 15 },
    { id: 2, name: "Pizza", count: 15 },
    { id: 3, name: "Fried Chicken", count: 8 },
    { id: 4, name: "Tacos", count: 15 },
    { id: 5, name: "Shawarma", count: 15 },
    { id: 6, name: "Sandwich", count: 12 },
    { id: 7, name: "Mocktails (Type 1)", count: 12 },
    { id: 8, name: "Momos", count: 15 },
    { id: 9, name: "Grill", count: 8 },
    { id: 10, name: "Mocktails (Type 2)", count: 12 },
    { id: 11, name: "Desserts", count: 20 },
    { id: 12, name: "Cold Coffee", count: 15 },
  ],
  items: [
    // Burgers
    {
      id: 1,
      name: "Classic Veg Burger",
      category: "Burgers",
      price: 129,
      rating: 4.5,
      image: "/burger5.jpeg?height=200&width=200",
      veg: true,
    },
    {
      id: 2,
      name: "Chicken Zinger",
      category: "Burgers",
      price: 179,
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200",
      veg: false,
    },
    {
      id: 3,
      name: "Cheese Burst Burger",
      category: "Burgers",
      price: 159,
      rating: 4.3,
      image: "/placeholder.svg?height=200&width=200",
      veg: true,
    },
    {
      id: 4,
      name: "BBQ Burger",
      category: "Burgers",
      price: 189,
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=200",
      veg: false,
    },
    // Pizza
    {
      id: 5,
      name: "Margherita",
      category: "Pizza",
      price: 249,
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=200",
      veg: true,
    },
    {
      id: 6,
      name: "Farmhouse",
      category: "Pizza",
      price: 349,
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200",
      veg: true,
    },
    {
      id: 7,
      name: "Chicken Pepperoni",
      category: "Pizza",
      price: 399,
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200",
      veg: false,
    },
    {
      id: 8,
      name: "BBQ Chicken",
      category: "Pizza",
      price: 379,
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=200",
      veg: false,
    },
    // Fried Chicken
    {
      id: 9,
      name: "Classic Fried",
      category: "Fried Chicken",
      price: 249,
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=200",
      veg: false,
    },
    {
      id: 10,
      name: "Spicy Wings",
      category: "Fried Chicken",
      price: 299,
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200",
      veg: false,
    },
  ],
}

export async function GET(request: Request) {
  // Get the search params
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")

  if (category) {
    const filteredItems = menuData.items.filter((item) => item.category.toLowerCase() === category.toLowerCase())
    return NextResponse.json({ items: filteredItems })
  }

  return NextResponse.json(menuData)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // In a real app, you would validate and save to a database
    // For this demo, we'll just return the data with an ID
    const newItem = {
      id: menuData.items.length + 1,
      ...body,
    }

    return NextResponse.json({ success: true, item: newItem })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 })
  }
}
