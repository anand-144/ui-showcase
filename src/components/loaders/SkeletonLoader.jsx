function SkeletonLoader() {
  return (
    <div className="mx-auto max-w-xl animate-pulse space-y-4 rounded-2xl border p-6">
      <div className="h-6 w-1/3 rounded bg-gray-200 dark:bg-gray-700" />

      <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />

      <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />

      <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-700" />

      <div className="mt-6 h-40 rounded-xl bg-gray-200 dark:bg-gray-700" />
    </div>
  );
}

export default SkeletonLoader;