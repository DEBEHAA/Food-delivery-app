"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define the user type
type User = {
  id: number
  name: string
  email: string
  role: string
}

// Define the auth context type
type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  register: (name: string, email: string, password: string, role: string) => Promise<boolean>
}

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Create a provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check if the user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    try {
      // In a real app, you would make an API call to your backend
      // For this demo, we'll simulate a successful login

      // Simulate admin login
      if (email === "admin@example.com" && password === "admin123") {
        const adminUser = {
          id: 2,
          name: "Admin User",
          email: "admin@example.com",
          role: "admin",
        }
        setUser(adminUser)
        localStorage.setItem("user", JSON.stringify(adminUser))
        return true
      }

      // Simulate customer login
      if (email === "user@example.com" && password === "password123") {
        const customerUser = {
          id: 1,
          name: "Debehaa J",
          email: "user@example.com",
          role: "customer",
        }
        setUser(customerUser)
        localStorage.setItem("user", JSON.stringify(customerUser))
        return true
      }

      return false
    } catch (error) {
      console.error("Login error:", error)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const register = async (name: string, email: string, password: string, role: string) => {
    try {
      // In a real app, you would make an API call to your backend
      // For this demo, we'll simulate a successful registration
      const newUser = {
        id: Math.floor(Math.random() * 1000),
        name,
        email,
        role,
      }
      setUser(newUser)
      localStorage.setItem("user", JSON.stringify(newUser))
      return true
    } catch (error) {
      console.error("Registration error:", error)
      return false
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Create a hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
