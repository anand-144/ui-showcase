function SpinnerLoader() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600" />
    </div>
  );
}

export default SpinnerLoader;