import LoginForm from "../../components/forms/LoginForm";
import RegisterForm from "../../components/forms/RegisterForm";
import ContactForm from "../../components/forms/ContactForm";
import Newsletter from "../../components/forms/Newsletter";
import ForgotPasswordForm from "../../components/forms/ForgotPasswordForm";
import ResetPasswordForm from "../../components/forms/ResetPasswordForm";
import FeedbackForm from "../../components/forms/FeedbackForm";
import CheckoutForm from "../../components/forms/CheckoutForm";
import ProfileForm from "../../components/forms/ProfileForm";
import MultiStepForm from "../../components/forms/MultiStepForm";

import {
  loginFormUsageCode,
  loginFormSourceCode,

  registerFormUsageCode,
  registerFormSourceCode,

  contactFormUsageCode,
  contactFormSourceCode,

  newsletterFormUsageCode,
  newsletterFormSourceCode,

  forgotPasswordFormUsageCode,
  forgotPasswordFormSourceCode,

  resetPasswordFormUsageCode,
  resetPasswordFormSourceCode,

  feedbackFormUsageCode,
  feedbackFormSourceCode,

  checkoutFormUsageCode,
  checkoutFormSourceCode,

  profileFormUsageCode,
  profileFormSourceCode,

  multiStepFormUsageCode,
  multiStepFormSourceCode,
} from "./formData";

export const formComponents = [
  {
  id: "login-form",
  category: "forms",

  name: "Login Form",

  component: LoginForm,

  props: {},

  usageCode: loginFormUsageCode,
  sourceCode: loginFormSourceCode,

  tags: ["login", "authentication"],
},

  {
    id: "register-form",
    category: "forms",
    name: "Register Form",
    component: RegisterForm,
    usageCode: registerFormUsageCode,
    sourceCode: registerFormSourceCode,
    tags: ["register", "signup", "authentication"],
  },

  {
    id: "contact-form",
    category: "forms",
    name: "Contact Form",
    component: ContactForm,
    usageCode: contactFormUsageCode,
    sourceCode: contactFormSourceCode,
    tags: ["contact", "message", "support"],
  },

  {
    id: "newsletter-form",
    category: "forms",
    name: "Newsletter Form",
    component: Newsletter,
    usageCode: newsletterFormUsageCode,
    sourceCode: newsletterFormSourceCode,
    tags: ["newsletter", "subscribe", "email"],
  },

  {
    id: "forgot-password-form",
    category: "forms",
    name: "Forgot Password",
    component: ForgotPasswordForm,
    usageCode: forgotPasswordFormUsageCode,
    sourceCode: forgotPasswordFormSourceCode,
    tags: ["password", "forgot", "reset"],
  },

  {
    id: "reset-password-form",
    category: "forms",
    name: "Reset Password",
    component: ResetPasswordForm,
    usageCode: resetPasswordFormUsageCode,
    sourceCode: resetPasswordFormSourceCode,
    tags: ["password", "reset", "security"],
  },

  {
    id: "feedback-form",
    category: "forms",
    name: "Feedback Form",
    component: FeedbackForm,
    usageCode: feedbackFormUsageCode,
    sourceCode: feedbackFormSourceCode,
    tags: ["feedback", "review", "rating"],
  },

  {
    id: "checkout-form",
    category: "forms",
    name: "Checkout Form",
    component: CheckoutForm,
    usageCode: checkoutFormUsageCode,
    sourceCode: checkoutFormSourceCode,
    tags: ["checkout", "payment", "ecommerce"],
  },

  {
    id: "profile-form",
    category: "forms",
    name: "Profile Form",
    component: ProfileForm,
    usageCode: profileFormUsageCode,
    sourceCode: profileFormSourceCode,
    tags: ["profile", "account", "user"],
  },

  {
    id: "multi-step-form",
    category: "forms",
    name: "Multi Step Form",
    component: MultiStepForm,
    usageCode: multiStepFormUsageCode,
    sourceCode: multiStepFormSourceCode,
    tags: ["wizard", "multi-step", "form"],
  },
];