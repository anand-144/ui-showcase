import {
  Search,
  Heart,
  ShoppingCart,
  User,
  ChevronDown,
  Star,
} from "lucide-react";

import Navbar from "../ui/navbar";
import Button from "../ui/button";

function EcommerceNavbar() {
  const products = [
    {
      name: "Nike Air Max",
      price: "$149",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      name: "Smart Watch",
      price: "$299",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      name: "Headphones",
      price: "$199",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
  ];

  return (
    <div className="overflow-hidden rounded-3xl bg-gray-50 shadow-xl dark:bg-gray-900">
      {/* Navbar */}
      <Navbar>
        <Navbar.Logo>
          <span className="text-indigo-600">
            Shop
          </span>
          Verse
        </Navbar.Logo>

        <Navbar.Links>
          <button className="flex items-center gap-1 hover:text-indigo-600">
            Categories
            <ChevronDown size={16} />
          </button>

          <a href="#">New Arrivals</a>
          <a href="#">Deals</a>
          <a href="#">Brands</a>
        </Navbar.Links>

        <div className="hidden lg:block">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              placeholder="Search products..."
              className="w-72 rounded-xl border border-gray-300 bg-white py-2 pl-10 pr-4 outline-none dark:border-gray-700 dark:bg-gray-950"
            />
          </div>
        </div>

        <Navbar.Actions>
          <button className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Heart size={20} />
          </button>

          <button className="relative rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
            <ShoppingCart size={20} />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
              2
            </span>
          </button>

          <button className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
            <User size={20} />
          </button>
        </Navbar.Actions>
      </Navbar>

      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-violet-600 px-10 py-16 text-white">
        <div className="max-w-3xl">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            🔥 Summer Sale
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Up to 50% Off
          </h2>

          <p className="mt-5 text-lg text-white/80">
            Discover the latest fashion,
            electronics and accessories at
            unbeatable prices.
          </p>

          <div className="mt-8 flex gap-4">
            <Button size="lg">
              Shop Now
            </Button>

            <Button
              variant="outline"
              size="lg"
            >
              Explore
            </Button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="p-8">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold">
            Featured Products
          </h3>

          <Button
            variant="ghost"
            size="sm"
          >
            View All
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-3xl bg-white shadow dark:bg-gray-950"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <div className="mb-2 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <h4 className="font-semibold">
                  {product.name}
                </h4>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xl font-bold text-indigo-600">
                    {product.price}
                  </span>

                  <Button size="sm">
                    Buy
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default EcommerceNavbar;