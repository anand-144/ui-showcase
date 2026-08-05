function PageLoader() {
  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center rounded-3xl border bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600 dark:border-gray-700 dark:border-t-indigo-500" />

        <div className="absolute inset-4 animate-ping rounded-full bg-indigo-500/20" />
      </div>

      <h2 className="mt-8 text-2xl font-bold">
        Loading...
      </h2>

      <p className="mt-3 text-gray-500 dark:text-gray-400">
        Please wait while we prepare everything for you.
      </p>
    </div>
  );
}

export default PageLoader;