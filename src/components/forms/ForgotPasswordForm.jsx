import { Mail, ArrowLeft } from "lucide-react";

import Form from "../ui/form";
import Input from "../ui/input";
import Button from "../ui/button";

function ForgotPasswordForm() {
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
          Forgot Password 🔒
        </Form.Title>

        <Form.Description>
          Enter your email address and we'll send you a password reset link.
        </Form.Description>
      </Form.Header>

      <Form.Body>
        <Input
          type="email"
          placeholder="Email Address"
          startIcon={<Mail size={18} />}
        />
      </Form.Body>

      <Form.Actions className="flex-col gap-4">
        <Button className="w-full">
          Send Reset Link
        </Button>

        <button
          type="button"
          className="flex items-center gap-2 text-sm font-medium text-indigo-600 transition hover:underline"
        >
          <ArrowLeft size={16} />
          Back to Login
        </button>
      </Form.Actions>
    </Form>
  );
}

export default ForgotPasswordForm;