"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Have questions, feedback, or want to place a bulk order? We're here to help! Reach out to us using any of the
          methods below.
        </p>
      </section>

      {/* Contact Information */}
      <section className="mb-16">
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Visit Us</h3>
              <p className="text-gray-600">
                Moolapalayam 
                <br />
                Erode 638060
                <br />
                India
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Call Us</h3>
              <p className="text-gray-600">
                Contact us: +91 98765 43210
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Email Us</h3>
              <p className="text-gray-600">
                General Inquiries: info@godofburgers.com
                <br />
                Customer Support: support@godofburgers.com
                <br />
               
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Anand"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Anand@gmail.com"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Feedback"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
                rows={6}
              />
            </div>
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
        <div>
          <h2 className="mb-6 text-2xl font-bold">Our Location</h2>
          <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
            {/* This would be a Google Map in a real application */}
            <div className="h-full w-full flex flex-col items-center justify-center bg-gray-100 gap-4 p-4">
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
</div>

          </div>
          <div className="mt-4 text-gray-600">
            <p>
              <strong>Opening Hours:</strong>
            </p>
            <p>Monday - Friday: 10:00 AM - 10:00 PM</p>
            <p>Saturday - Sunday: 9:00 AM - 11:00 PM</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="mb-8 text-center text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 text-lg font-semibold">Do you offer catering services?</h3>
            <p className="text-gray-600">
              Yes, we offer catering for events of all sizes. Please contact our business inquiries line or email us for
              more information.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 text-lg font-semibold">What are your delivery areas?</h3>
            <p className="text-gray-600">
              We deliver within a 10km radius of each of our locations. You can check if your area is covered during
              checkout.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 text-lg font-semibold">How can I provide feedback about my order?</h3>
            <p className="text-gray-600">
              You can provide feedback through our app, website, or by contacting our customer service team directly.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 text-lg font-semibold">Do you have vegetarian options?</h3>
            <p className="text-gray-600">
              Yes, we have a wide range of vegetarian options across all our food categories. Look for the green dot on
              our menu items.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
