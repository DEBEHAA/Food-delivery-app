# God of Burgers - Food Delivery Platform

A modern food delivery application built with Next.js, featuring customer and admin dashboards, food catalog with varieties, and secure authentication.

## Features

- **User Authentication**: Separate login for customers and admins
- **Food Categories**: 12 food categories with multiple varieties
- **Shopping Cart**: Add items, adjust quantities, and checkout
- **Order Tracking**: Real-time order status updates
- **Admin Dashboard**: Manage products, users, and view analytics
- **Responsive Design**: Works on mobile, tablet, and desktop

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **Authentication**: Custom auth with JWT
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- MongoDB Atlas account (or local MongoDB instance)

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/god-of-burgers.git
   cd god-of-burgers
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Update the MongoDB connection string and other variables

4. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### MongoDB Setup

1. Create a MongoDB Atlas account or use a local MongoDB instance
2. Create a new cluster and database
3. Get your connection string and add it to `.env.local`
4. The application will automatically create the necessary collections

### Demo Credentials

- **Admin User**:
  - Email: admin@example.com
  - Password: admin123

- **Customer User**:
  - Email: user@example.com
  - Password: password123

## Project Structure

\`\`\`
god-of-burgers/
├── app/                  # Next.js App Router
│   ├── api/              # API routes
│   ├── dashboard/        # Admin dashboard pages
│   ├── menu/             # Menu pages
│   ├── product/          # Product detail pages
│   ├── cart/             # Shopping cart
│   ├── checkout/         # Checkout process
│   ├── order-confirmation/ # Order confirmation
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── login/            # Login page
│   ├── signup/           # Signup page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable components
├── context/              # React Context providers
├── lib/                  # Utility functions and libraries
├── public/               # Static assets
└── ...                   # Config files
\`\`\`

## Image Handling

For this demo, we're using placeholder images. In a production environment, you would:

1. Store images in a cloud storage service like AWS S3, Cloudinary, or Vercel Blob
2. Upload images through the admin dashboard
3. Store image URLs in the database
4. Serve images through a CDN for better performance

To implement image uploads:

1. Add an image upload component in the admin product management page
2. Use a library like `next-connect` and `multer` for handling file uploads
3. Upload the image to your storage service
4. Save the image URL to the product in the database

## Deployment

This application can be easily deployed on Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Configure environment variables
4. Deploy

## Commands

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## MongoDB Collections

The application uses the following collections:

1. `users` - User accounts (customers and admins)
2. `categories` - Food categories
3. `products` - Food items with details
4. `orders` - Customer orders
5. `reviews` - Product reviews

## License

This project is licensed under the MIT License - see the LICENSE file for details.
\`\`\`

Let's create a MongoDB schema file for reference:
