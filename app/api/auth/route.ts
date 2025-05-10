import { NextResponse } from "next/server"

// Sample user data
const users = [
  {
    id: 1,
    name: "Archna",
    email: "user@example.com",
    password: "password123", // In a real app, this would be hashed
    role: "customer",
  },
  {
    id: 2,
    name: "Debehaa",
    email: "admin@example.com",
    password: "admin123", // In a real app, this would be hashed
    role: "admin",
  },
]

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Find user by email
    const user = users.find((u) => u.email === email)

    // Check if user exists and password matches
    if (!user || user.password !== password) {
      return NextResponse.json({ success: false, message: "Invalid email or password" }, { status: 401 })
    }

    // In a real app, you would generate a JWT token here
    // For this demo, we'll just return the user data (except password)
    const { password: _, ...userData } = user

    return NextResponse.json({
      success: true,
      user: userData,
      token: "sample-jwt-token",
    })
  } catch (error) {
    return NextResponse.json({ success: false, message: "An error occurred" }, { status: 500 })
  }
}
