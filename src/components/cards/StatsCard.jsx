import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  Users,
  ShoppingBag,
} from "lucide-react";

import Card from "../ui/card";

const stats = [
  {
    title: "Revenue",
    value: "$58,420",
    growth: "+18%",
    icon: DollarSign,
    color: "text-emerald-500",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    title: "Users",
    value: "12,842",
    growth: "+9%",
    icon: Users,
    color: "text-indigo-500",
    bg: "bg-indigo-100 dark:bg-indigo-900/30",
  },
  {
    title: "Orders",
    value: "3,216",
    growth: "+14%",
    icon: ShoppingBag,
    color: "text-orange-500",
    bg: "bg-orange-100 dark:bg-orange-900/30",
  },
];

function StatsCard() {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <Card
        size="full"
        className="overflow-hidden"
      >
        <Card.Header>
          <div className="flex items-center justify-between">
            <div>
              <Card.Title>
                Dashboard Overview
              </Card.Title>

              <Card.Description>
                Business performance this month
              </Card.Description>
            </div>

            <div className="rounded-xl bg-indigo-100 p-3 dark:bg-indigo-900/30">
              <TrendingUp className="text-indigo-600" />
            </div>
          </div>
        </Card.Header>

        <Card.Content>
          <div className="space-y-5">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center justify-between rounded-2xl bg-gray-50 p-4 transition hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
                    >
                      <Icon
                        className={item.color}
                        size={22}
                      />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        {item.title}
                      </p>

                      <h3 className="text-xl font-bold">
                        {item.value}
                      </h3>
                    </div>
                  </div>

                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-600 dark:bg-emerald-900/30">
                    {item.growth}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Mini Chart */}
          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold">
              Monthly Growth
            </p>

            <div className="flex h-36 items-end justify-between gap-2">
              {[45, 70, 35, 90, 65, 110, 80].map(
                (height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="w-full rounded-t-xl bg-gradient-to-t from-indigo-600 to-violet-500"
                  />
                )
              )}
            </div>
          </div>
        </Card.Content>
      </Card>
    </motion.div>
  );
}

export default StatsCard;