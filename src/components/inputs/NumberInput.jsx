import { useState } from "react";
import { Minus, Plus } from "lucide-react";

function NumberInput({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 1,
}) {
  const [value, setValue] = useState(defaultValue);

  const increment = () => {
    setValue((prev) => Math.min(prev + step, max));
  };

  const decrement = () => {
    setValue((prev) => Math.max(prev - step, min));
  };

  const handleChange = (e) => {
    const val = e.target.value;

    if (val === "") {
      setValue("");
      return;
    }

    const number = Number(val);

    if (!isNaN(number)) {
      setValue(Math.min(Math.max(number, min), max));
    }
  };

  return (
    <div className="flex h-11 w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
      <button
        type="button"
        onClick={decrement}
        disabled={value <= min}
        className="flex w-11 items-center justify-center border-r border-gray-300 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:hover:bg-gray-800"
      >
        <Minus size={18} />
      </button>

      <input
        type="text"
        inputMode="numeric"
        value={value}
        onChange={handleChange}
        className="flex-1 border-0 bg-transparent text-center outline-none"
      />

      <button
        type="button"
        onClick={increment}
        disabled={value >= max}
        className="flex w-11 items-center justify-center border-l border-gray-300 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:hover:bg-gray-800"
      >
        <Plus size={18} />
      </button>
    </div>
  );
}

export default NumberInput;