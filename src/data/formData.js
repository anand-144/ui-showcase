/* -------------------------------------------------------------------------- */
/*                               Login Form                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                               Login Form                                   */
/* -------------------------------------------------------------------------- */

export const loginFormUsageCode = `
import LoginForm from "@/components/forms/LoginForm";

export default function Example() {
  return <LoginForm />;
}
`;

export const loginFormSourceCode = `
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

import Form from "@/components/ui/form";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form
      variant="card"
      onSubmit={handleSubmit}
      className="mx-auto max-w-md"
    >
      <Form.Header>
        <Form.Title>
          Welcome Back 👋
        </Form.Title>

        <Form.Description>
          Login to your account to continue.
        </Form.Description>
      </Form.Header>

      <Form.Body>
        <Input
          type="email"
          placeholder="Email Address"
          startIcon={<Mail size={18} />}
        />

        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          startIcon={<Lock size={18} />}
          endIcon={
            <button
              type="button"
              onClick={() =>
                setShowPassword((prev) => !prev)
              }
              className="text-gray-500 transition hover:text-indigo-600"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          }
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />

            <span>Remember me</span>
          </label>

          <button
            type="button"
            className="font-medium text-indigo-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>
      </Form.Body>

      <Form.Actions className="flex-col gap-4">
        <Button className="w-full">
          Login
        </Button>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Don't have an account?{" "}
          <button
            type="button"
            className="font-semibold text-indigo-600 hover:underline"
          >
            Sign Up
          </button>
        </p>
      </Form.Actions>
    </Form>
  );
}
`;

/* -------------------------------------------------------------------------- */
/*                             Register Form                                  */
/* -------------------------------------------------------------------------- */

export const registerFormUsageCode = `
import RegisterForm from "@/components/forms/RegisterForm";

export default function Example() {
  return <RegisterForm />;
}
`;

export const registerFormSourceCode = `
import RegisterForm from "@/components/forms/RegisterForm";

export default function Example() {
  return <RegisterForm />;
}
`;

/* -------------------------------------------------------------------------- */
/*                              Contact Form                                  */
/* -------------------------------------------------------------------------- */

export const contactFormUsageCode = `
import ContactForm from "@/components/forms/ContactForm";

export default function Example() {
  return <ContactForm />;
}
`;

export const contactFormSourceCode = `
import ContactForm from "@/components/forms/ContactForm";

export default function Example() {
  return <ContactForm />;
}
`;

/* -------------------------------------------------------------------------- */
/*                            Newsletter Form                                 */
/* -------------------------------------------------------------------------- */

export const newsletterFormUsageCode = `
import NewsletterForm from "@/components/forms/NewsletterForm";

export default function Example() {
  return <NewsletterForm />;
}
`;

export const newsletterFormSourceCode = `
import NewsletterForm from "@/components/forms/NewsletterForm";

export default function Example() {
  return <NewsletterForm />;
}
`;

/* -------------------------------------------------------------------------- */
/*                         Forgot Password Form                               */
/* -------------------------------------------------------------------------- */

export const forgotPasswordFormUsageCode = `
import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";

export default function Example() {
  return <ForgotPasswordForm />;
}
`;

export const forgotPasswordFormSourceCode = `
import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";

export default function Example() {
  return <ForgotPasswordForm />;
}
`;

/* -------------------------------------------------------------------------- */
/*                          Reset Password Form                               */
/* -------------------------------------------------------------------------- */

export const resetPasswordFormUsageCode = `
import ResetPasswordForm from "@/components/forms/ResetPasswordForm";

export default function Example() {
  return <ResetPasswordForm />;
}
`;

export const resetPasswordFormSourceCode = `
import ResetPasswordForm from "@/components/forms/ResetPasswordForm";

export default function Example() {
  return <ResetPasswordForm />;
}
`;

/* -------------------------------------------------------------------------- */
/*                            Feedback Form                                   */
/* -------------------------------------------------------------------------- */

export const feedbackFormUsageCode = `
import FeedbackForm from "@/components/forms/FeedbackForm";

export default function Example() {
  return <FeedbackForm />;
}
`;

export const feedbackFormSourceCode = `
import FeedbackForm from "@/components/forms/FeedbackForm";

export default function Example() {
  return <FeedbackForm />;
}
`;

/* -------------------------------------------------------------------------- */
/*                            Checkout Form                                   */
/* -------------------------------------------------------------------------- */

export const checkoutFormUsageCode = `
import CheckoutForm from "@/components/forms/CheckoutForm";

export default function Example() {
  return <CheckoutForm />;
}
`;

export const checkoutFormSourceCode = `
import CheckoutForm from "@/components/forms/CheckoutForm";

export default function Example() {
  return <CheckoutForm />;
}
`;

/* -------------------------------------------------------------------------- */
/*                             Profile Form                                   */
/* -------------------------------------------------------------------------- */

export const profileFormUsageCode = `
import ProfileForm from "@/components/forms/ProfileForm";

export default function Example() {
  return <ProfileForm />;
}
`;

export const profileFormSourceCode = `
import ProfileForm from "@/components/forms/ProfileForm";

export default function Example() {
  return <ProfileForm />;
}
`;

/* -------------------------------------------------------------------------- */
/*                           Multi Step Form                                  */
/* -------------------------------------------------------------------------- */

export const multiStepFormUsageCode = `
import MultiStepForm from "@/components/forms/MultiStepForm";

export default function Example() {
  return <MultiStepForm />;
}
`;

export const multiStepFormSourceCode = `
import MultiStepForm from "@/components/forms/MultiStepForm";

export default function Example() {
  return <MultiStepForm />;
}
`;