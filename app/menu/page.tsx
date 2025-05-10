"use client"

import { useState } from "react"
import Link from "next/link"
import { Filter, Search, ShoppingBag, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data for food categories
const categories = [
  { id: 1, name: "Burgers", count: 15 },
  { id: 2, name: "Pizza", count: 15 },
  { id: 3, name: "Fried Chicken", count: 8 },
  { id: 4, name: "Tacos", count: 15 },

]

// Sample data for food items
const foodItems = [
  // Burgers
  {
    id: 1,
    name: "Classic Veg Burger",
    category: "Burgers",
    price: 99,
    rating: 4.5,
    image: "/burger10.jpeg?height=200&width=200",
    veg: true,
  },
  {
    id: 2,
    name: "Chicken Zinger",
    category: "Burgers",
    price: 99,
    rating: 4.7,
    image: "/burger6.jpg?height=200&width=200",
    veg: false,
  },
  {
    id: 3,
    name: "Cheese Burst Burger",
    category: "Burgers",
    price: 99,
    rating: 4.3,
    image: "/burger2.jpeg?height=200&width=200",
    veg: true,
  },
  {
    id: 4,
    name: "BBQ Burger",
    category: "Burgers",
    price: 99,
    rating: 4.6,
    image: "/burge3.jpeg?height=200&width=200",
    veg: false,
  },
  // Pizza
  {
    id: 5,
    name: "Margherita",
    category: "Pizza",
    price: 99,
    rating: 4.5,
    image: "/pizza1.jpeg?height=200&width=200",
    veg: true,
  },
  {
    id: 6,
    name: "Farmhouse",
    category: "Pizza",
    price: 99,
    rating: 4.8,
    image: "/pizza2.jpg?height=200&width=200",
    veg: true,
  },
  {
    id: 7,
    name: "Chicken Pepperoni",
    category: "Pizza",
    price: 99,
    rating: 4.7,
    image: "/pizza4.jpeg?height=200&width=200",
    veg: false,
  },
  {
    id: 8,
    name: "BBQ Chicken",
    category: "Pizza",
    price: 99,
    rating: 4.6,
    image: "/pizza6.jpeg?height=200&width=200",
    veg: false,
  },
  // Fried Chicken
  {
    id: 9,
    name: "Classic Fried",
    category: "Fried Chicken",
    price: 99,
    rating: 4.5,
    image: "/f2.jpeg?height=200&width=200",
    veg: false,
  },
  {
    id: 10,
    name: "Spicy Wings",
    category: "Fried Chicken",
    price: 99,
    rating: 4.7,
    image: "/f4.jpeg?height=200&width=200",
    veg: false,
  },
  // Tacos
  {
    id: 11,
    name: "Veggie Taco",
    category: "Tacos",
    price: 99,
    rating: 4.3,
    image: "/t1.jpeg?height=200&width=200",
    veg: true,
  },
  {
    id: 12,
    name: "Chicken Taco",
    category: "Tacos",
    price: 99,
    rating: 4.6,
    image: "/t3.jpeg?height=200&width=200",
    veg: false,
  },
]

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500 })
  const [dietFilter, setDietFilter] = useState("all") // "all", "veg", "non-veg"

  // Filter food items based on search, category, price, and diet
  const filteredItems = foodItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesPrice = item.price >= priceRange.min && item.price <= priceRange.max
    const matchesDiet =
      dietFilter === "all" || (dietFilter === "veg" && item.veg) || (dietFilter === "non-veg" && !item.veg)

    return matchesSearch && matchesCategory && matchesPrice && matchesDiet
  })

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Our Menu</h1>
        <p className="text-gray-600 max-w-3xl">
          Explore our wide range of delicious food items. From juicy burgers to crispy fried chicken, we have something
          for everyone.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar for desktop */}
        <div className="hidden md:block w-64 space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <div className="space-y-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                className={
                  selectedCategory === "all"
                    ? "bg-red-600 hover:bg-red-700 w-full justify-start"
                    : "w-full justify-start"
                }
                onClick={() => setSelectedCategory("all")}
              >
                All Categories
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  className={
                    selectedCategory === category.name
                      ? "bg-red-600 hover:bg-red-700 w-full justify-start"
                      : "w-full justify-start"
                  }
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {category.name}
                  <span className="ml-auto text-xs bg-gray-100 text-gray-800 rounded-full px-2 py-1">
                    {category.count}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Price Range</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>₹{priceRange.min}</span>
                <span>₹{priceRange.max}</span>
              </div>
              <input
                type="range"
                min="0"
                max="500"
                step="50"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: Number.parseInt(e.target.value) })}
                className="w-full"
              />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Dietary Preferences</h3>
            <div className="space-y-2">
              <Button
                variant={dietFilter === "all" ? "default" : "outline"}
                className={
                  dietFilter === "all" ? "bg-red-600 hover:bg-red-700 w-full justify-start" : "w-full justify-start"
                }
                onClick={() => setDietFilter("all")}
              >
                All
              </Button>
              <Button
                variant={dietFilter === "veg" ? "default" : "outline"}
                className={
                  dietFilter === "veg" ? "bg-green-600 hover:bg-green-700 w-full justify-start" : "w-full justify-start"
                }
                onClick={() => setDietFilter("veg")}
              >
                Vegetarian
              </Button>
              <Button
                variant={dietFilter === "non-veg" ? "default" : "outline"}
                className={
                  dietFilter === "non-veg" ? "bg-red-600 hover:bg-red-700 w-full justify-start" : "w-full justify-start"
                }
                onClick={() => setDietFilter("non-veg")}
              >
                Non-Vegetarian
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile filter button */}
        <div className="md:hidden mb-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>Filter menu items by category, price, and dietary preferences.</SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Categories</h3>
                  <div className="space-y-2">
                    <Button
                      variant={selectedCategory === "all" ? "default" : "outline"}
                      className={
                        selectedCategory === "all"
                          ? "bg-red-600 hover:bg-red-700 w-full justify-start"
                          : "w-full justify-start"
                      }
                      onClick={() => setSelectedCategory("all")}
                    >
                      All Categories
                    </Button>
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.name ? "default" : "outline"}
                        className={
                          selectedCategory === category.name
                            ? "bg-red-600 hover:bg-red-700 w-full justify-start"
                            : "w-full justify-start"
                        }
                        onClick={() => setSelectedCategory(category.name)}
                      >
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>₹{priceRange.min}</span>
                      <span>₹{priceRange.max}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      step="50"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: Number.parseInt(e.target.value) })}
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Dietary Preferences</h3>
                  <div className="space-y-2">
                    <Button
                      variant={dietFilter === "all" ? "default" : "outline"}
                      className={
                        dietFilter === "all"
                          ? "bg-red-600 hover:bg-red-700 w-full justify-start"
                          : "w-full justify-start"
                      }
                      onClick={() => setDietFilter("all")}
                    >
                      All
                    </Button>
                    <Button
                      variant={dietFilter === "veg" ? "default" : "outline"}
                      className={
                        dietFilter === "veg"
                          ? "bg-green-600 hover:bg-green-700 w-full justify-start"
                          : "w-full justify-start"
                      }
                      onClick={() => setDietFilter("veg")}
                    >
                      Vegetarian
                    </Button>
                    <Button
                      variant={dietFilter === "non-veg" ? "default" : "outline"}
                      className={
                        dietFilter === "non-veg"
                          ? "bg-red-600 hover:bg-red-700 w-full justify-start"
                          : "w-full justify-start"
                      }
                      onClick={() => setDietFilter("non-veg")}
                    >
                      Non-Vegetarian
                    </Button>
                  </div>
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Apply Filters</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex-1">
          {/* Search bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search for food items..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category tabs for mobile */}
          <div className="md:hidden mb-6 overflow-x-auto">
            <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="inline-flex w-max">
                <TabsTrigger value="all">All</TabsTrigger>
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.name}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Food items grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <Link href={`/product/${item.id}`} key={item.id}>
                  <Card className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative h-48 overflow-hidden bg-orange-100">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute top-2 right-2 rounded-full bg-white px-2 py-1 text-sm font-medium text-orange-600 shadow-sm">
                        ₹{item.price}
                      </div>
                      <div className="absolute top-2 left-2 rounded-full bg-white p-1 shadow-sm">
                        <div
                          className={`h-4 w-4 rounded-full ${item.veg ? "bg-green-500" : "bg-red-500"}`}
                          title={item.veg ? "Vegetarian" : "Non-Vegetarian"}
                        ></div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm text-gray-500">{item.category}</span>
                        <div className="flex items-center">
                          <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{item.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <div className="mt-4 flex items-center justify-between">
                        <Button size="sm" variant="outline" className="rounded-full">
                          <ShoppingBag className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="mx-auto w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No items found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
