const createCode = (name) => `
import ${name} from "@/components/inputs/${name}";

export default function Example() {
  return <${name} />;
}
`;

/* -------------------------------------------------------------------------- */
/*                                 Usage Code                                 */
/* -------------------------------------------------------------------------- */

export const defaultInputUsageCode = createCode("DefaultInput");
export const filledInputUsageCode = createCode("FilledInput");
export const outlinedInputUsageCode = createCode("OutlinedInput");
export const searchInputUsageCode = createCode("SearchInput");
export const passwordInputUsageCode = createCode("PasswordInput");
export const floatingInputUsageCode = createCode("FloatingInput");
export const otpInputUsageCode = createCode("OTPInput");
export const textareaInputUsageCode = createCode("TextareaInput");
export const numberInputUsageCode = createCode("NumberInput");
export const emailInputUsageCode = createCode("EmailInput");
export const errorInputUsageCode = createCode("ErrorInput");
export const disabledInputUsageCode = createCode("DisabledInput");

/* -------------------------------------------------------------------------- */
/*                                Source Code                                 */
/* -------------------------------------------------------------------------- */

import defaultInputRaw from "../../components/inputs/DefaultInput.jsx?raw";
import filledInputRaw from "../../components/inputs/FilledInput.jsx?raw";
import outlinedInputRaw from "../../components/inputs/OutlinedInput.jsx?raw";
import searchInputRaw from "../../components/inputs/SearchInput.jsx?raw";
import passwordInputRaw from "../../components/inputs/PasswordInput.jsx?raw";
import floatingInputRaw from "../../components/inputs/FloatingInput.jsx?raw";
import otpInputRaw from "../../components/inputs/OTPInput.jsx?raw";
import textareaInputRaw from "../../components/inputs/TextareaInput.jsx?raw";
import numberInputRaw from "../../components/inputs/NumberInput.jsx?raw";
import emailInputRaw from "../../components/inputs/EmailInput.jsx?raw";
import errorInputRaw from "../../components/inputs/ErrorInput.jsx?raw";
import disabledInputRaw from "../../components/inputs/DisabledInput.jsx?raw";

export const defaultInputSourceCode = defaultInputRaw;
export const filledInputSourceCode = filledInputRaw;
export const outlinedInputSourceCode = outlinedInputRaw;
export const searchInputSourceCode = searchInputRaw;
export const passwordInputSourceCode = passwordInputRaw;
export const floatingInputSourceCode = floatingInputRaw;
export const otpInputSourceCode = otpInputRaw;
export const textareaInputSourceCode = textareaInputRaw;
export const numberInputSourceCode = numberInputRaw;
export const emailInputSourceCode = emailInputRaw;
export const errorInputSourceCode = errorInputRaw;
export const disabledInputSourceCode = disabledInputRaw;