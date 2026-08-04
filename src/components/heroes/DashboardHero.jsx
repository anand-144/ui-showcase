import {
  BarChart3,
  Users,
  TrendingUp,
} from "lucide-react";

import Button from "../ui/button";
import Hero from "../ui/hero";

function DashboardHero() {
  return (
    <Hero className="bg-slate-50 dark:bg-gray-950">
      <Hero.Content>
        <Hero.Badge>
          📊 Analytics Dashboard
        </Hero.Badge>

        <Hero.Title>
          Manage Your Business
          <span className="block text-indigo-600">
            From One Dashboard
          </span>
        </Hero.Title>

        <Hero.Description>
          Monitor sales, customers, projects and
          reports in real-time with powerful
          analytics.
        </Hero.Description>

        <Hero.Actions>
          <Button variant="gradient">
            Open Dashboard
          </Button>

          <Button variant="outline">
            View Report
          </Button>
        </Hero.Actions>
      </Hero.Content>

      <Hero.Media>
        <div className="w-full max-w-lg rounded-3xl border bg-white p-6 shadow-2xl dark:bg-gray-900">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-indigo-100 p-5 text-center dark:bg-indigo-950">
              <Users className="mx-auto mb-2" />
              <p className="text-sm">Users</p>
              <h3 className="text-xl font-bold">
                12.4K
              </h3>
            </div>

            <div className="rounded-xl bg-violet-100 p-5 text-center dark:bg-violet-950">
              <TrendingUp className="mx-auto mb-2" />
              <p className="text-sm">Revenue</p>
              <h3 className="text-xl font-bold">
                $92K
              </h3>
            </div>

            <div className="rounded-xl bg-pink-100 p-5 text-center dark:bg-pink-950">
              <BarChart3 className="mx-auto mb-2" />
              <p className="text-sm">Growth</p>
              <h3 className="text-xl font-bold">
                +38%
              </h3>
            </div>
          </div>
        </div>
      </Hero.Media>
    </Hero>
  );
}

export default DashboardHero;