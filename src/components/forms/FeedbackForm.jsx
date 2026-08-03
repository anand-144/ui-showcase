import { useState } from "react";
import {
  User,
  MessageSquare,
  Star,
} from "lucide-react";

import Form from "../ui/form";
import Input from "../ui/input";
import Button from "../ui/button";

function FeedbackForm() {
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form
      variant="card"
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg"
    >
      <Form.Header>
        <Form.Title>
          We'd Love Your Feedback ⭐
        </Form.Title>

        <Form.Description>
          Tell us about your experience.
        </Form.Description>
      </Form.Header>

      <Form.Body>
        <Input
          placeholder="Your Name"
          startIcon={<User size={18} />}
        />

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Rating
          </label>

          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  size={28}
                  className={
                    star <= rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Feedback
          </label>

          <div className="relative">
            <MessageSquare
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <textarea
              rows={5}
              placeholder="Write your feedback..."
              className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-4 outline-none transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:ring-indigo-900"
            />
          </div>
        </div>
      </Form.Body>

      <Form.Actions>
        <Button className="w-full">
          Submit Feedback
        </Button>
      </Form.Actions>
    </Form>
  );
}

export default FeedbackForm;