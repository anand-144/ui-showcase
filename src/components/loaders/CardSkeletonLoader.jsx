function CardSkeletonLoader() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="animate-pulse rounded-2xl border p-5"
        >
          <div className="mb-5 h-44 rounded-xl bg-gray-200 dark:bg-gray-700" />

          <div className="mb-3 h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />

          <div className="mb-2 h-4 rounded bg-gray-200 dark:bg-gray-700" />

          <div className="mb-5 h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />

          <div className="h-10 w-32 rounded-lg bg-gray-200 dark:bg-gray-700" />
        </div>
      ))}
    </div>
  );
}

export default CardSkeletonLoader;