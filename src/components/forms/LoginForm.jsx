import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

import Form from "../ui/form";
import Input from "../ui/input";
import Button from "../ui/button";

function LoginForm() {
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
        <Form.Title>Welcome Back 👋</Form.Title>

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
            className="font-medium text-indigo-600 transition hover:underline"
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

export default LoginForm;