function PulseLoader() {
  return (
    <div className="flex items-center justify-center gap-4 py-12">
      <div className="h-5 w-5 animate-pulse rounded-full bg-indigo-600" />

      <div className="h-5 w-5 animate-pulse rounded-full bg-indigo-600 delay-150" />

      <div className="h-5 w-5 animate-pulse rounded-full bg-indigo-600 delay-300" />
    </div>
  );
}

export default PulseLoader;