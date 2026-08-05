function GradientLoader() {
  return (
    <div className="flex justify-center py-12">
      <div className="relative h-5 w-72 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <div className="absolute inset-y-0 w-1/2 animate-[gradientMove_1.5s_linear_infinite] rounded-full bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500" />
      </div>

      <style>{`
        @keyframes gradientMove {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(250%);
          }
        }
      `}</style>
    </div>
  );
}

export default GradientLoader;