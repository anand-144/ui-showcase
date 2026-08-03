import { useState } from "react";

function TextareaInput() {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Description
      </label>

      <textarea
        rows={4}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Write something..."
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:ring-indigo-900"
      />

      <div className="flex justify-end text-xs text-gray-500">
        {value.length}/200
      </div>
    </div>
  );
}

export default TextareaInput;