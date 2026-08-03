import { useState } from "react";
import { Mail, CircleCheck, CircleX } from "lucide-react";
import Input from "../ui/input";

function EmailInput() {
  const [email, setEmail] = useState("");

  const isValid =
    email === ""
      ? null
      : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <Input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
      startIcon={<Mail size={18} />}
      endIcon={
        email ? (
          isValid ? (
            <CircleCheck
              size={18}
              className="text-green-500"
            />
          ) : (
            <CircleX
              size={18}
              className="text-red-500"
            />
          )
        ) : null
      }
      error={email && !isValid ? "Please enter a valid email." : false}
    />
  );
}

export default EmailInput;