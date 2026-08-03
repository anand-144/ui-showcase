import { motion } from "framer-motion";
import {
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

import Card from "../ui/card";
import Button from "../ui/button";

function ProductCard() {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <Card
        size="full"
        className="group overflow-hidden"
      >
        {/* Product Image */}
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
            alt="Sneakers"
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
          />

          {/* Discount */}
          <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
            -25%
          </span>

          {/* Wishlist */}
          <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur transition hover:bg-red-500 hover:text-white">
            <Heart size={18} />
          </button>
        </div>

        <Card.Content>
          {/* Category */}
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Running Shoes
          </p>

          {/* Title */}
          <h3 className="mt-2 text-xl font-bold">
            Nike Air Max Pulse
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
            Lightweight premium sneakers designed
            for comfort, performance and everyday
            style.
          </p>

          {/* Rating */}
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))

              }

              <span className="ml-2 text-sm text-gray-500">
                (128 Reviews)
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="mt-6 flex items-center gap-3">
            <span className="text-3xl font-bold">
              $149
            </span>

            <span className="text-lg text-gray-400 line-through">
              $199
            </span>
          </div>
        </Card.Content>

        <Card.Footer className="justify-between">
          <Button variant="outline">
            Details
          </Button>

          <Button
            variant="gradient"
            leftIcon={
              <ShoppingCart size={16} />
            }
          >
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </motion.div>
  );
}

export default ProductCard;