function PageLayout({ title, description, children }) {
  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">{title}</h1>
        {description && (
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}
      </header>

      {children}
    </section>
  );
}

export default PageLayout;