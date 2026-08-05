function DotsLoader() {
  return (
    <div className="flex items-center justify-center gap-3 py-12">
      <span className="h-3 w-3 animate-bounce rounded-full bg-indigo-600 [animation-delay:-0.3s]" />

      <span className="h-3 w-3 animate-bounce rounded-full bg-indigo-600 [animation-delay:-0.15s]" />

      <span className="h-3 w-3 animate-bounce rounded-full bg-indigo-600" />
    </div>
  );
}

export default DotsLoader;