// This file defines the MongoDB schemas for the application
// In a production app, you would use a proper ODM like Mongoose

export interface User {
  _id?: string
  name: string
  email: string
  password: string // In a real app, this would be hashed
  phone: string
  role: "customer" | "admin"
  addresses?: Address[]
  createdAt: Date
  updatedAt: Date
}

export interface Address {
  _id?: string
  name: string
  address: string
  city: string
  state: string
  pincode: string
  phone: string
  isDefault?: boolean
}

export interface Category {
  _id?: string
  name: string
  description?: string
  image?: string
  count: number // Number of products in this category
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Product {
  _id?: string
  name: string
  description: string
  category: string // Category name
  price: number
  stock: number
  image: string
  images?: string[] // Additional images
  isVeg: boolean
  ingredients?: string[]
  nutritionalInfo?: {
    calories: number
    protein: number
    carbs: number
    fat: number
    fiber: number
  }
  rating?: number
  reviews?: number
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface OrderItem {
  productId: string
  name: string
  price: number
  quantity: number
  image?: string
}

export interface Order {
  _id?: string
  orderId: string // Human-readable order ID (e.g., ORD-123456)
  userId: string
  items: OrderItem[]
  subtotal: number
  deliveryFee: number
  total: number
  status: "pending" | "processing" | "out_for_delivery" | "delivered" | "cancelled"
  paymentMethod: "card" | "upi" | "wallet" | "cod"
  paymentStatus: "pending" | "completed" | "failed"
  deliveryAddress: Address
  createdAt: Date
  updatedAt: Date
}

export interface Review {
  _id?: string
  productId: string
  userId: string
  userName: string
  rating: number
  comment: string
  createdAt: Date
}
