import {
  Menu,
  Search,
  Bell,
  Settings,
  CircleUserRound,
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
} from "lucide-react";

import Navbar from "../ui/navbar";

function DashboardNavbar() {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-xl dark:border-gray-800 dark:bg-gray-900">
      {/* Navbar */}
      <Navbar variant="elevated">
        <div className="flex items-center gap-4">
          <button className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800">
            <Menu size={20} />
          </button>

          <Navbar.Logo>
            Dashboard
          </Navbar.Logo>
        </div>

        <div className="hidden flex-1 justify-center px-8 lg:flex">
          <div className="relative w-full max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              placeholder="Search..."
              className="w-full rounded-xl border border-gray-300 bg-white py-2 pl-10 pr-4 outline-none dark:border-gray-700 dark:bg-gray-950"
            />
          </div>
        </div>

        <Navbar.Actions>
          <button className="relative rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Bell size={20} />

            <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500" />
          </button>

          <button className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Settings size={20} />
          </button>

          <button className="rounded-full">
            <CircleUserRound size={34} />
          </button>
        </Navbar.Actions>
      </Navbar>

      {/* Dashboard */}
      <div className="p-8">
        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl bg-white p-5 shadow dark:bg-gray-950">
            <div className="flex items-center justify-between">
              <p className="text-gray-500">
                Revenue
              </p>

              <DollarSign className="text-green-500" />
            </div>

            <h2 className="mt-4 text-3xl font-bold">
              $24.5K
            </h2>

            <p className="mt-2 text-sm text-green-500">
              +18% this month
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow dark:bg-gray-950">
            <div className="flex items-center justify-between">
              <p className="text-gray-500">
                Users
              </p>

              <Users className="text-blue-500" />
            </div>

            <h2 className="mt-4 text-3xl font-bold">
              12.8K
            </h2>

            <p className="mt-2 text-sm text-green-500">
              +320 today
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow dark:bg-gray-950">
            <div className="flex items-center justify-between">
              <p className="text-gray-500">
                Orders
              </p>

              <ShoppingCart className="text-orange-500" />
            </div>

            <h2 className="mt-4 text-3xl font-bold">
              845
            </h2>

            <p className="mt-2 text-sm text-green-500">
              +12% today
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow dark:bg-gray-950">
            <div className="flex items-center justify-between">
              <p className="text-gray-500">
                Growth
              </p>

              <TrendingUp className="text-indigo-500" />
            </div>

            <h2 className="mt-4 text-3xl font-bold">
              78%
            </h2>

            <p className="mt-2 text-sm text-green-500">
              Excellent
            </p>
          </div>
        </div>

        {/* Chart */}
        <div className="mt-8 rounded-3xl bg-white p-6 shadow dark:bg-gray-950">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              Revenue Analytics
            </h3>

            <span className="text-sm text-gray-500">
              Last 30 Days
            </span>
          </div>

          <div className="flex h-56 items-end justify-between gap-3">
            {[35, 55, 40, 70, 90, 60, 80, 110].map(
              (value, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t-xl bg-gradient-to-t from-indigo-600 to-violet-400"
                  style={{
                    height: `${value}%`,
                  }}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;