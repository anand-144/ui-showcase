import Input from "../ui/input";

function FloatingInput() {
  return (
    <div className="relative">
      <Input
        id="floating-email"
        placeholder=" "
        className="peer"
      />

      <label
        htmlFor="floating-email"
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          bg-white
          px-1
          text-gray-500
          transition-all
          duration-200
          pointer-events-none

          peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-base

          peer-focus:top-0
          peer-focus:text-xs
          peer-focus:text-indigo-600

          peer-not-placeholder-shown:top-0
          peer-not-placeholder-shown:text-xs

          dark:bg-gray-950
          dark:text-gray-400
          dark:peer-focus:text-indigo-400
        "
      >
        Email Address
      </label>
    </div>
  );
}

export default FloatingInput;