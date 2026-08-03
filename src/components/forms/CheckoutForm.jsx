import {
  User,
  CreditCard,
  CalendarDays,
  Lock,
} from "lucide-react";

import Form from "../ui/form";
import Input from "../ui/input";
import Button from "../ui/button";

function CheckoutForm() {
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
          Checkout 💳
        </Form.Title>

        <Form.Description>
          Complete your payment securely.
        </Form.Description>
      </Form.Header>

      <Form.Body>
        <Input
          placeholder="Cardholder Name"
          startIcon={<User size={18} />}
        />

        <Input
          placeholder="Card Number"
          startIcon={<CreditCard size={18} />}
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="MM/YY"
            startIcon={<CalendarDays size={18} />}
          />

          <Input
            placeholder="CVV"
            startIcon={<Lock size={18} />}
          />
        </div>

        <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-800 dark:bg-indigo-950/30">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Total Amount
            </span>

            <span className="text-xl font-bold text-indigo-600">
              $99.00
            </span>
          </div>
        </div>
      </Form.Body>

      <Form.Actions>
        <Button className="w-full">
          Pay Now
        </Button>
      </Form.Actions>
    </Form>
  );
}

export default CheckoutForm;