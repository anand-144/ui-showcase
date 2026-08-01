import ThemeToggle from "../components/common/ThemeToggle";

function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">
        UI Component Showcase
      </h1>

      <p className="text-gray-600 dark:text-gray-400">
        Build beautiful, reusable React components.
      </p>

      <ThemeToggle />
    </section>
  );
}

export default Home;