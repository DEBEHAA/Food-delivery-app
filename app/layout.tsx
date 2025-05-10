import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/context/cart-context"
import { AuthProvider } from "@/context/auth-context"
import { SiteHeader } from "@/components/site-header"
import { Toaster } from "@/components/ui/toaster"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "God of Burgers - Food Delivery Platform",
  description: "A modern food delivery platform with a wide variety of delicious options",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <AuthProvider>
            <CartProvider>
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <main className="flex-1">{children}</main>
                <footer className="border-t bg-gray-50">
                  <div className="container py-8 md:py-12">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                      <div>
                        <div className="flex items-center gap-2">
                        <div>
  <div className="flex items-center gap-2">
    <div className="h-10 w-10">
      <img
        src="/logo.png" // <-- update this path
        alt="God of Burgers Logo"
        className="h-full w-full object-contain rounded-full"
      />
    </div>
    <span className="text-xl font-bold">God of Burgers</span>
  </div>
  
</div>

                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                          Heavenly taste delivered to your doorstep. Experience divine flavors with our premium
                          selection.
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                          <li>
                            <a href="/menu" className="hover:text-red-600">
                              Menu
                            </a>
                          </li>
                          <li>
                            <a href="/about" className="hover:text-red-600">
                              About Us
                            </a>
                          </li>
                          <li>
                            <a href="/contact" className="hover:text-red-600">
                              Contact
                            </a>
                          </li>
                          <li>
                            <a href="/login" className="hover:text-red-600">
                              Login / Sign Up
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                          <li>Moolapalyam</li>
                          <li>Phone: +91 98765 43210</li>
                          <li>Email: info@godofburgers.com</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
                        <div className="flex space-x-4">
                          <a href="#" className="text-gray-500 hover:text-red-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-6 w-6"
                            >
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                          </a>
                          <a href="#" className="text-gray-500 hover:text-red-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-6 w-6"
                            >
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                          </a>
                          <a href="#" className="text-gray-500 hover:text-red-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-6 w-6"
                            >
                              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
                      <p>© {new Date().getFullYear()} God of Burgers. All rights reserved.</p>
                    </div>
                  </div>
                </footer>
              </div>
              <Toaster />
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
