"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Minus, Plus, ShoppingBag, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"

// Sample product data
const product = {
  id: 1,
  name: "Classic Veg Burger",
  category: "Burgers",
  price: 99,
  rating: 4.5,
  reviews: 128,
  description:
    "Our signature veggie burger with fresh lettuce, tomato, onions, pickles, and our special sauce on a toasted sesame seed bun.",
  ingredients: ["Veggie patty", "Lettuce", "Tomato", "Onions", "Pickles", "Special sauce", "Sesame seed bun"],
  nutritionalInfo: {
    calories: 450,
    protein: 12,
    carbs: 48,
    fat: 22,
    fiber: 5,
  },
  veg: true,
  image: "/burger1.jpg?height=400&width=400",
  images: [
    "/burger8.jpeg?height=400&width=400",
    "/burge3.jpeg?height=400&width=400",
    "/burger4.jpeg?height=400&width=400",
  ],
  relatedProducts: [
    {
      id: 2,
      name: "Cheese Burst Burger",
      price: 99,
      rating: 4.3,
      image: "/burger2.jpeg?height=200&width=200",
      veg: true,
    },
    {
      id: 3,
      name: "BBQ Burger",
      price: 99,
      rating: 4.6,
      image: "/burger6.jpg?height=200&width=200",
      veg: false,
    },
    {
      id: 4,
      name: "Spicy Chicken Burger",
      price: 99,
      rating: 4.7,
      image: "/burger8.jpeg?height=200&width=200",
      veg: false,
    },
  ],
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { toast } = useToast()

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const addToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart`,
    })
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Link href="/menu" className="inline-flex items-center text-gray-600 hover:text-red-600">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Menu
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex gap-2 overflow-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`relative min-w-[80px] overflow-hidden rounded-md ${
                  selectedImage === index ? "ring-2 ring-red-600" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="h-20 w-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">{product.category}</span>
              <div
                className={`h-3 w-3 rounded-full ${product.veg ? "bg-green-500" : "bg-red-500"}`}
                title={product.veg ? "Vegetarian" : "Non-Vegetarian"}
              ></div>
            </div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 font-medium">{product.rating}</span>
              </div>
              <span className="text-gray-500">({product.reviews} reviews)</span>
            </div>
          </div>

          <div className="text-2xl font-bold text-red-600">₹{product.price}</div>

          <p className="text-gray-700">{product.description}</p>

          <div className="flex items-center gap-4">
            <div className="flex items-center rounded-md border">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-r-none"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <div className="w-12 text-center">{quantity}</div>
              <Button variant="ghost" size="icon" className="rounded-l-none" onClick={increaseQuantity}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button className="flex-1 bg-red-600 hover:bg-red-700" onClick={addToCart}>
              <ShoppingBag className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>

          <Tabs defaultValue="ingredients">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="nutritional">Nutritional Info</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="ingredients" className="space-y-4 pt-4">
              <ul className="list-inside list-disc space-y-2">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-700">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="nutritional" className="pt-4">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-lg bg-orange-50 p-4 text-center">
                  <div className="text-lg font-semibold text-orange-600">{product.nutritionalInfo.calories}</div>
                  <div className="text-sm text-gray-600">Calories</div>
                </div>
                <div className="rounded-lg bg-green-50 p-4 text-center">
                  <div className="text-lg font-semibold text-green-600">{product.nutritionalInfo.protein}g</div>
                  <div className="text-sm text-gray-600">Protein</div>
                </div>
                <div className="rounded-lg bg-blue-50 p-4 text-center">
                  <div className="text-lg font-semibold text-blue-600">{product.nutritionalInfo.carbs}g</div>
                  <div className="text-sm text-gray-600">Carbs</div>
                </div>
                <div className="rounded-lg bg-yellow-50 p-4 text-center">
                  <div className="text-lg font-semibold text-yellow-600">{product.nutritionalInfo.fat}g</div>
                  <div className="text-sm text-gray-600">Fat</div>
                </div>
                <div className="rounded-lg bg-purple-50 p-4 text-center">
                  <div className="text-lg font-semibold text-purple-600">{product.nutritionalInfo.fiber}g</div>
                  <div className="text-sm text-gray-600">Fiber</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                    <span className="ml-2 text-3xl font-bold">{product.rating}</span>
                  </div>
                  <div className="text-gray-500">Based on {product.reviews} reviews</div>
                </div>
                <Button variant="outline">Write a Review</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">You May Also Like</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {product.relatedProducts.map((relatedProduct) => (
            <Link href={`/product/${relatedProduct.id}`} key={relatedProduct.id}>
              <Card className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden bg-orange-100">
                  <img
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-2 right-2 rounded-full bg-white px-2 py-1 text-sm font-medium text-orange-600 shadow-sm">
                    ₹{relatedProduct.price}
                  </div>
                  <div className="absolute top-2 left-2 rounded-full bg-white p-1 shadow-sm">
                    <div
                      className={`h-4 w-4 rounded-full ${relatedProduct.veg ? "bg-green-500" : "bg-red-500"}`}
                      title={relatedProduct.veg ? "Vegetarian" : "Non-Vegetarian"}
                    ></div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-center">
                    <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{relatedProduct.rating}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{relatedProduct.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
