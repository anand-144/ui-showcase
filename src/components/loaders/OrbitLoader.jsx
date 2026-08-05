function OrbitLoader() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 rounded-full border-2 border-gray-200 dark:border-gray-700" />

        <div className="absolute inset-0 animate-spin">
          <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-indigo-600" />
        </div>

        <div className="absolute inset-3 animate-spin [animation-duration:2s] [animation-direction:reverse]">
          <div className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-violet-500" />
        </div>

        <div className="absolute inset-6 animate-spin [animation-duration:3s]">
          <div className="absolute -top-2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-pink-500" />
        </div>
      </div>
    </div>
  );
}

export default OrbitLoader;