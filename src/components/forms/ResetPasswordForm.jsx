import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

import Form from "../ui/form";
import Input from "../ui/input";
import Button from "../ui/button";

function ResetPasswordForm() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

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
          Reset Password 🔑
        </Form.Title>

        <Form.Description>
          Create a new password for your account.
        </Form.Description>
      </Form.Header>

      <Form.Body>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="New Password"
          startIcon={<Lock size={18} />}
          endIcon={
            <button
              type="button"
              onClick={() =>
                setShowPassword((prev) => !prev)
              }
              className="text-gray-500 hover:text-indigo-600"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          }
        />

        <Input
          type={
            showConfirmPassword
              ? "text"
              : "password"
          }
          placeholder="Confirm Password"
          startIcon={<Lock size={18} />}
          endIcon={
            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  (prev) => !prev
                )
              }
              className="text-gray-500 hover:text-indigo-600"
            >
              {showConfirmPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          }
        />
      </Form.Body>

      <Form.Actions>
        <Button className="w-full">
          Reset Password
        </Button>
      </Form.Actions>
    </Form>
  );
}

export default ResetPasswordForm;