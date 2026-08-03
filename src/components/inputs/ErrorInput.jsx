import { Mail } from "lucide-react";
import Input from "../ui/input";

function ErrorInput() {
  return (
    <Input
      type="email"
      placeholder="Enter your email"
      startIcon={<Mail size={18} />}
      error="Please enter a valid email address."
    />
  );
}

export default ErrorInput;