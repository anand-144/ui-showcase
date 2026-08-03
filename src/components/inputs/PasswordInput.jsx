import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Input from "../ui/input";

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      type={showPassword ? "text" : "password"}
      placeholder="Enter your password"
      endIcon={
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="cursor-pointer text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      }
    />
  );
}

export default PasswordInput;