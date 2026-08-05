const createCode = (name) => `
import ${name} from "@/components/forms/${name}";

export default function Example() {
  return <${name} />;
}
`;

/* -------------------------------------------------------------------------- */
/*                                 Usage Code                                 */
/* -------------------------------------------------------------------------- */

export const loginFormUsageCode = createCode("LoginForm");
export const registerFormUsageCode = createCode("RegisterForm");
export const contactFormUsageCode = createCode("ContactForm");
export const newsletterFormUsageCode = createCode("NewsletterForm");
export const forgotPasswordFormUsageCode = createCode("ForgotPasswordForm");
export const resetPasswordFormUsageCode = createCode("ResetPasswordForm");
export const feedbackFormUsageCode = createCode("FeedbackForm");
export const checkoutFormUsageCode = createCode("CheckoutForm");
export const profileFormUsageCode = createCode("ProfileForm");
export const multiStepFormUsageCode = createCode("MultiStepForm");

/* -------------------------------------------------------------------------- */
/*                                Source Code                                 */
/* -------------------------------------------------------------------------- */

import loginFormRaw from "../../components/forms/LoginForm.jsx?raw";
import registerFormRaw from "../../components/forms/RegisterForm.jsx?raw";
import contactFormRaw from "../../components/forms/ContactForm.jsx?raw";
import newsletterFormRaw from "../../components/forms/Newsletter.jsx?raw";
import forgotPasswordFormRaw from "../../components/forms/ForgotPasswordForm.jsx?raw";
import resetPasswordFormRaw from "../../components/forms/ResetPasswordForm.jsx?raw";
import feedbackFormRaw from "../../components/forms/FeedbackForm.jsx?raw";
import checkoutFormRaw from "../../components/forms/CheckoutForm.jsx?raw";
import profileFormRaw from "../../components/forms/ProfileForm.jsx?raw";
import multiStepFormRaw from "../../components/forms/MultiStepForm.jsx?raw";

export const loginFormSourceCode = loginFormRaw;
export const registerFormSourceCode = registerFormRaw;
export const contactFormSourceCode = contactFormRaw;
export const newsletterFormSourceCode = newsletterFormRaw;
export const forgotPasswordFormSourceCode = forgotPasswordFormRaw;
export const resetPasswordFormSourceCode = resetPasswordFormRaw;
export const feedbackFormSourceCode = feedbackFormRaw;
export const checkoutFormSourceCode = checkoutFormRaw;
export const profileFormSourceCode = profileFormRaw;
export const multiStepFormSourceCode = multiStepFormRaw;