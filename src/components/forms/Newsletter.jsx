import { Mail, Send } from "lucide-react";

import Form from "../ui/form";
import Input from "../ui/input";
import Button from "../ui/button";

function NewsletterForm() {
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
          Stay Updated 📬
        </Form.Title>

        <Form.Description>
          Subscribe to our newsletter and never miss the latest updates.
        </Form.Description>
      </Form.Header>

      <Form.Body>
        <Input
          type="email"
          placeholder="Enter your email"
          startIcon={<Mail size={18} />}
        />
      </Form.Body>

      <Form.Actions>
        <Button
          className="w-full"
          rightIcon={<Send size={16} />}
        >
          Subscribe
        </Button>
      </Form.Actions>
    </Form>
  );
}

export default NewsletterForm;