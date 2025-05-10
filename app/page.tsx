import Link from "next/link"
import { ChevronRight, ShoppingBag, Star, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Home() {
  // Featured categories
  const categories = [
    { id: 1, name: "Burgers", image: "/burger10.jpeg?height=200&width=200", count: 15 },
    { id: 2, name: "Pizza", image: "/pizza6.jpeg?height=200&width=200", count: 15 },
    { id: 3, name: "Fried Chicken", image: "/f5.jpeg?height=200&width=200", count: 8 },
    { id: 4, name: "Tacos", image: "/t1.jpeg?height=200&width=200", count: 15 },
    { id: 5, name: "Shawarma", image: "/s1.jpeg?height=200&width=200", count: 15 },
    { id: 6, name: "Sandwich", image: "/sa1.jpeg?height=200&width=200", count: 12 },
  ]

  // Featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Classic Veg Burger",
      category: "Burgers",
      price: 99,
      rating: 4.5,
      image: "/burger2.jpeg?height=300&width=300",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      category: "Pizza",
      price: 99,
      rating: 4.7,
      image: "/pizza1.jpeg?height=300&width=300",
    },
    {
      id: 3,
      name: "Spicy Wings",
      category: "Fried Chicken",
      price: 99,
      rating: 4.3,
      image: "/f4.jpeg?height=300&width=300",
    },
    {
      id: 4,
      name: "Chicken Shawarma Roll",
      category: "Shawarma",
      price: 99,
      rating: 4.6,
      image: "/s1.jpeg?height=300&width=300",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-orange-500 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                God of Burgers
                <span className="block text-yellow-300">Heavenly Taste Delivered</span>
              </h1>
              <div className="animate-bounce mx-auto w-fit rounded-xl bg-gradient-to-r from-fuchsia-600 via-pink-500 to-orange-400 px-6 py-3 text-center shadow-2xl">
  <span className="text-2xl font-extrabold text-white drop-shadow-md tracking-wide animate-pulse">
    🎉 Select Any Food Experience – Just ₹99!
  </span>
</div>

              <p className="max-w-[600px] text-lg text-white/90 md:text-xl">
                Experience divine flavors with our premium selection of burgers, pizzas, and more. Fast delivery, fresh
                ingredients, and taste that's out of this world.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-white text-red-600 hover:bg-white/90">
                  Order Now
                </Button>
                <Button size="lg" className="bg-white text-red-600 hover:bg-white/90">
                  View Menu
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-64 w-64 overflow-hidden rounded-full bg-white/20 p-4 md:h-80 md:w-80">
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white/10">
                  <img
                    src="burger1.jpg?height=400&width=400"
                    alt="Featured Burger"
                    className="h-56 w-56 object-cover md:h-72 md:w-72"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Food Categories</h2>
          <Link href="/menu" className="flex items-center text-orange-500 hover:underline">
            View All <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {categories.map((category) => (
              <CarouselItem key={category.id} className="md:basis-1/3 lg:basis-1/4">
                <Link href={`/menu/${category.name.toLowerCase()}`}>
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="relative h-48 bg-orange-100">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{category.name}</h3>
                        <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-800">
                          {category.count} items
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </section>

      {/* Featured Products */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center">
            <TrendingUp className="mr-2 h-6 w-6 text-orange-500" />
            <h2 className="text-3xl font-bold">Trending Items</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <Card className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden bg-orange-100">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-2 right-2 rounded-full bg-white px-2 py-1 text-sm font-medium text-orange-600 shadow-sm">
                      ₹{product.price}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm text-gray-500">{product.category}</span>
                      <div className="flex items-center">
                        <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <div className="mt-4 flex items-center justify-between">
                      <Button size="sm" variant="outline" className="rounded-full">
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Why Choose God of Burgers?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Fast Delivery</h3>
            <p className="text-gray-600">Your food delivered in 30 minutes or less, guaranteed fresh and hot.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Quality Ingredients</h3>
            <p className="text-gray-600">We use only the freshest ingredients sourced from local suppliers.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Made with Love</h3>
            <p className="text-gray-600">Every dish is prepared with passion and attention to detail.</p>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">Download Our Mobile App</h2>
              <p className="text-lg text-white/90">
                Get exclusive offers, track your orders in real-time, and earn rewards with every purchase.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-black text-white hover:bg-black/90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 h-5 w-5"
                  >
                    <path d="M11.9999 2C6.47773 2 2.00001 6.47771 2.00001 12C2.00001 17.5223 6.47773 22 11.9999 22C17.5222 22 21.9999 17.5223 21.9999 12C21.9999 6.47771 17.5222 2 11.9999 2ZM15.8844 15.8838C15.5155 16.2527 14.9165 16.2527 14.5476 15.8838L12.0001 13.3364L9.45248 15.8839C9.08359 16.2528 8.48465 16.2528 8.11576 15.8839C7.74688 15.515 7.74688 14.9161 8.11576 14.5472L10.6634 11.9998L8.11576 9.45238C7.74688 9.0835 7.74688 8.48456 8.11576 8.11568C8.48465 7.7468 9.08359 7.7468 9.45248 8.11568L12.0001 10.6631L14.5476 8.11568C14.9165 7.7468 15.5155 7.7468 15.8844 8.11568C16.2532 8.48456 16.2532 9.0835 15.8844 9.45238L13.3367 11.9998L15.8844 14.5472C16.2532 14.9161 16.2532 15.515 15.8844 15.8838Z" />
                  </svg>
                  App Store
                </Button>
                <Button size="lg" className="bg-black text-white hover:bg-black/90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 h-5 w-5"
                  >
                    <path d="M5.26908 3.40093C5.26908 3.40093 2.15692 0.279297 2.15692 7.32688C2.15692 14.3745 2.15692 16.9653 2.15692 16.9653L5.26908 13.8532V3.40093ZM7.65272 5.78457V15.3037L10.7649 12.1915V8.89671L7.65272 5.78457ZM13.1485 11.3698V15.3037L16.2607 18.4158V7.32688L13.1485 10.4391V11.3698ZM18.6443 19.3465L21.7565 16.2343V5.78457L18.6443 8.89671V19.3465Z" />
                  </svg>
                  Google Play
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/g1.jpg?height=400&width=300"
                alt="Mobile App"
                className="h-auto max-w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
