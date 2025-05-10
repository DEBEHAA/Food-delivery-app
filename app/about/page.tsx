import Image from "next/image"
import Link from "next/link"
import { Award, Clock, Leaf, ThumbsUp, Utensils } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">About God of Burgers</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          We're on a mission to serve heavenly taste with divine quality. Our story is one of passion, flavor, and the
          pursuit of the perfect burger.
        </p>
      </section>

      {/* Our Story */}
      <section className="mb-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                God of Burgers was founded in 2024 by a group of food enthusiasts who believed that a burger should be
                more than just fast food – it should be an experience.
              </p>
              <p>
                What started as a small food truck has now grown into multiple locations across the country, but our
                commitment to quality ingredients and exceptional taste remains unchanged.
              </p>
              <p>
                We source our ingredients from local farmers and suppliers, ensuring that every bite is fresh and
                flavorful. Our chefs craft each burger with care, creating divine combinations that keep our customers
                coming back for more.
              </p>
            </div>
            <Button className="mt-6 bg-red-600 hover:bg-red-700">Learn More</Button>
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/burger1.jpg?height=400&width=600"
              alt="Our Story"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-16 bg-gray-50 py-16 -mx-4 px-4">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Values</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Fresh Ingredients</h3>
                <p className="text-gray-600">
                  We source only the freshest ingredients from local suppliers to ensure quality and flavor in every
                  bite.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <Utensils className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Culinary Excellence</h3>
                <p className="text-gray-600">
                  Our chefs are trained to create perfect flavor combinations that elevate the humble burger to divine
                  status.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Quick Service</h3>
                <p className="text-gray-600">
                  We value your time and strive to provide quick service without compromising on quality or taste.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <ThumbsUp className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We continuously improve based on customer feedback and preferences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-16">
        <h2 className="mb-12 text-center text-3xl font-bold">Meet Our Team</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
              <Image
                src="/shop.jpg?height=160&width=160"
                alt="Chef John"
                width={160}
                height={160}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mb-1 text-xl font-semibold">Murugan</h3>
            <p className="mb-3 text-red-600">Founder&CEO</p>
            <p className="text-gray-600">
              With over 5 years of culinary experience, Chef John brings creativity and expertise to our kitchen.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
              <Image
                src="/manger.jpeg?height=160&width=160"
                alt="Sarah Smith"
                width={160}
                height={160}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mb-1 text-xl font-semibold">Kalaiselvi</h3>
            <p className="mb-3 text-red-600">Operations Manager</p>
            <p className="text-gray-600">
              kalaiselvi ensures that everything runs smoothly, from kitchen operations to customer service.
            </p>
          </div>
         
        </div>
      </section>

      

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="mb-6 text-3xl font-bold">Join Us for a Heavenly Experience</h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-600">
          Come visit us and experience the divine taste of our burgers and other delicious offerings. We promise a
          culinary experience that will keep you coming back for more.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/menu">
            <Button className="bg-red-600 hover:bg-red-700">View Our Menu</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
