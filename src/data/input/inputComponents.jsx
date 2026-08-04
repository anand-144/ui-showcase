import DefaultInput from "../../components/inputs/DefaultInput";
import FilledInput from "../../components/inputs/FilledInput";
import OutlinedInput from "../../components/inputs/OutlinedInput";
import SearchInput from "../../components/inputs/SearchInput";
import PasswordInput from "../../components/inputs/PasswordInput";
import FloatingInput from "../../components/inputs/FloatingInput";
import OTPInput from "../../components/inputs/OTPInput";
import TextareaInput from "../../components/inputs/TextareaInput";
import NumberInput from "../../components/inputs/NumberInput";
import EmailInput from "../../components/inputs/EmailInput";
import ErrorInput from "../../components/inputs/ErrorInput";
import DisabledInput from "../../components/inputs/DisabledInput";

import {
  defaultInputUsageCode,
  defaultInputSourceCode,

  filledInputUsageCode,
  filledInputSourceCode,

  outlinedInputUsageCode,
  outlinedInputSourceCode,

  searchInputUsageCode,
  searchInputSourceCode,

  passwordInputUsageCode,
  passwordInputSourceCode,

  floatingInputUsageCode,
  floatingInputSourceCode,

  otpInputUsageCode,
  otpInputSourceCode,

  textareaInputUsageCode,
  textareaInputSourceCode,

  numberInputUsageCode,
  numberInputSourceCode,

  emailInputUsageCode,
  emailInputSourceCode,

  errorInputUsageCode,
  errorInputSourceCode,

  disabledInputUsageCode,
  disabledInputSourceCode,
} from "./inputData";

export const inputComponents = [
  {
    id: "default-input",
    category: "inputs",
    name: "Default Input",
    component: DefaultInput,
    usageCode: defaultInputUsageCode,
    sourceCode: defaultInputSourceCode,
    tags: ["input", "text", "basic"],
  },

  {
    id: "filled-input",
    category: "inputs",
    name: "Filled Input",
    component: FilledInput,
    usageCode: filledInputUsageCode,
    sourceCode: filledInputSourceCode,
    tags: ["input", "filled", "material"],
  },

  {
    id: "outlined-input",
    category: "inputs",
    name: "Outlined Input",
    component: OutlinedInput,
    usageCode: outlinedInputUsageCode,
    sourceCode: outlinedInputSourceCode,
    tags: ["input", "outline", "form"],
  },

  {
    id: "search-input",
    category: "inputs",
    name: "Search Input",
    component: SearchInput,
    usageCode: searchInputUsageCode,
    sourceCode: searchInputSourceCode,
    tags: ["search", "icon", "input"],
  },

  {
    id: "password-input",
    category: "inputs",
    name: "Password Input",
    component: PasswordInput,
    usageCode: passwordInputUsageCode,
    sourceCode: passwordInputSourceCode,
    tags: ["password", "security", "input"],
  },

  {
    id: "floating-input",
    category: "inputs",
    name: "Floating Input",
    component: FloatingInput,
    usageCode: floatingInputUsageCode,
    sourceCode: floatingInputSourceCode,
    tags: ["floating", "animated", "material"],
  },

  {
    id: "otp-input",
    category: "inputs",
    name: "OTP Input",
    component: OTPInput,
    usageCode: otpInputUsageCode,
    sourceCode: otpInputSourceCode,
    tags: ["otp", "verification", "pin"],
  },

  {
    id: "textarea-input",
    category: "inputs",
    name: "Textarea",
    component: TextareaInput,
    usageCode: textareaInputUsageCode,
    sourceCode: textareaInputSourceCode,
    tags: ["textarea", "multiline", "form"],
  },

  {
    id: "number-input",
    category: "inputs",
    name: "Number Input",
    component: NumberInput,
    usageCode: numberInputUsageCode,
    sourceCode: numberInputSourceCode,
    tags: ["number", "counter", "stepper"],
  },

  {
    id: "email-input",
    category: "inputs",
    name: "Email Input",
    component: EmailInput,
    usageCode: emailInputUsageCode,
    sourceCode: emailInputSourceCode,
    tags: ["email", "validation", "input"],
  },

  {
    id: "error-input",
    category: "inputs",
    name: "Error Input",
    component: ErrorInput,
    usageCode: errorInputUsageCode,
    sourceCode: errorInputSourceCode,
    tags: ["error", "validation", "input"],
  },

  {
    id: "disabled-input",
    category: "inputs",
    name: "Disabled Input",
    component: DisabledInput,
    usageCode: disabledInputUsageCode,
    sourceCode: disabledInputSourceCode,
    tags: ["disabled", "readonly", "state"],
  },
];