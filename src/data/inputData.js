/* -------------------------------------------------------------------------- */
/*                              Default Input                                 */
/* -------------------------------------------------------------------------- */

export const defaultInputUsageCode = `
<Input
  placeholder="Enter your name"
/>
`;

export const defaultInputSourceCode = `
import Input from "@/components/ui/input";

export default function DefaultInput() {
  return (
    <Input
      placeholder="Enter your name"
    />
  );
}
`;

/* -------------------------------------------------------------------------- */
/*                               Filled Input                                 */
/* -------------------------------------------------------------------------- */

export const filledInputUsageCode = `
<Input
  variant="filled"
  placeholder="Enter your email"
/>
`;

export const filledInputSourceCode = `
import Input from "@/components/ui/input";

export default function FilledInput() {
  return (
    <Input
      variant="filled"
      placeholder="Enter your email"
    />
  );
}
`;

/* -------------------------------------------------------------------------- */
/*                              Outlined Input                                */
/* -------------------------------------------------------------------------- */

export const outlinedInputUsageCode = `
<Input
  variant="outline"
  placeholder="Username"
/>
`;

export const outlinedInputSourceCode = `
import Input from "@/components/ui/input";

export default function OutlinedInput() {
  return (
    <Input
      variant="outline"
      placeholder="Username"
    />
  );
}
`;

/* -------------------------------------------------------------------------- */
/*                               Search Input                                 */
/* -------------------------------------------------------------------------- */

export const searchInputUsageCode = `
import SearchInput from "@/components/inputs/SearchInput";

export default function Example() {
  return <SearchInput />;
}
`;

export const searchInputSourceCode = `
import { Search } from "lucide-react";
import Input from "@/components/ui/input";

export default function SearchInput() {
  return (
    <Input
      startIcon={<Search size={18} />}
      placeholder="Search components..."
    />
  );
}
`;


/* -------------------------------------------------------------------------- */
/*                              Password Input                                */
/* -------------------------------------------------------------------------- */

export const passwordInputUsageCode = `
import PasswordInput from "@/components/inputs/PasswordInput";

export default function Example() {
  return <PasswordInput />;
}
`;

export const passwordInputSourceCode = `
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Input from "@/components/ui/input";

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      type={showPassword ? "text" : "password"}
      placeholder="Enter your password"
      endIcon={
        <button
          type="button"
          onClick={() =>
            setShowPassword(!showPassword)
          }
        >
          {showPassword ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>
      }
    />
  );
}
`;

/* -------------------------------------------------------------------------- */
/*                              Floating Input                                */
/* -------------------------------------------------------------------------- */

export const floatingInputUsageCode = `
import FloatingInput from "@/components/inputs/FloatingInput";

export default function Example() {
  return <FloatingInput />;
}
`;

export const floatingInputSourceCode = `
import Input from "@/components/ui/input";

export default function FloatingInput() {
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
          pointer-events-none
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          bg-white
          px-1
          text-gray-500
          transition-all

          peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-base

          peer-focus:top-0
          peer-focus:text-xs
          peer-focus:text-indigo-600

          peer-not-placeholder-shown:top-0
          peer-not-placeholder-shown:text-xs

          dark:bg-gray-950
        "
      >
        Email Address
      </label>
    </div>
  );
}
`;

/* -------------------------------------------------------------------------- */
/*                                OTP Input                                   */
/* -------------------------------------------------------------------------- */

export const otpInputUsageCode = `
import OTPInput from "@/components/inputs/OTPInput";

export default function Example() {
  return <OTPInput />;
}
`;

export const otpInputSourceCode = `
import OTPInput from "@/components/inputs/OTPInput";

export default function Example() {
  return <OTPInput />;
}
`;

/* -------------------------------------------------------------------------- */
/*                              Textarea Input                                */
/* -------------------------------------------------------------------------- */

export const textareaInputUsageCode = `
import TextareaInput from "@/components/inputs/TextareaInput";

export default function Example() {
  return <TextareaInput />;
}
`;

export const textareaInputSourceCode = `
import { useState } from "react";

export default function TextareaInput() {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        Description
      </label>

      <textarea
        rows={4}
        value={value}
        onChange={(e) =>
          setValue(e.target.value)
        }
        placeholder="Write something..."
        className="w-full rounded-xl border px-4 py-3"
      />

      <div className="flex justify-end text-xs text-gray-500">
        {value.length}/200
      </div>
    </div>
  );
}
`;

/* -------------------------------------------------------------------------- */
/*                              Number Input                                  */
/* -------------------------------------------------------------------------- */

export const numberInputUsageCode = `
import NumberInput from "@/components/inputs/NumberInput";

export default function Example() {
  return <NumberInput />;
}
`;

export const numberInputSourceCode = `
import NumberInput from "@/components/inputs/NumberInput";

export default function Example() {
  return <NumberInput />;
}
`;

/* -------------------------------------------------------------------------- */
/*                               Email Input                                  */
/* -------------------------------------------------------------------------- */

export const emailInputUsageCode = `
import EmailInput from "@/components/inputs/EmailInput";

export default function Example() {
  return <EmailInput />;
}
`;

export const emailInputSourceCode = `
import { useState } from "react";
import {
  Mail,
  CircleCheck,
  CircleX,
} from "lucide-react";

import Input from "@/components/ui/input";

export default function EmailInput() {
  const [email, setEmail] = useState("");

  const isValid =
    email === ""
      ? null
      : /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);

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
      error={
        email && !isValid
          ? "Please enter a valid email."
          : false
      }
    />
  );
}
`;

/* -------------------------------------------------------------------------- */
/*                               Error Input                                  */
/* -------------------------------------------------------------------------- */

export const errorInputUsageCode = `
import ErrorInput from "@/components/inputs/ErrorInput";

export default function Example() {
  return <ErrorInput />;
}
`;

export const errorInputSourceCode = `
import { Mail } from "lucide-react";
import Input from "@/components/ui/input";

export default function ErrorInput() {
  return (
    <Input
      type="email"
      placeholder="Enter your email"
      startIcon={<Mail size={18} />}
      error="Please enter a valid email address."
    />
  );
}
`;

/* -------------------------------------------------------------------------- */
/*                             Disabled Input                                 */
/* -------------------------------------------------------------------------- */

export const disabledInputUsageCode = `
import DisabledInput from "@/components/inputs/DisabledInput";

export default function Example() {
  return <DisabledInput />;
}
`;

export const disabledInputSourceCode = `
import { Lock } from "lucide-react";
import Input from "@/components/ui/input";

export default function DisabledInput() {
  return (
    <Input
      disabled
      value="You can't edit this field"
      startIcon={<Lock size={18} />}
    />
  );
}
`;