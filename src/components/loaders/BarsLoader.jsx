function BarsLoader() {
  return (
    <div className="flex items-end justify-center gap-2 py-12">
      {[40, 60, 80, 60, 40].map(
        (height, index) => (
          <div
            key={index}
            className="w-3 animate-pulse rounded-full bg-indigo-600"
            style={{
              height,
              animationDelay: `${index * 0.15}s`,
            }}
          />
        )
      )}
    </div>
  );
}

export default BarsLoader;