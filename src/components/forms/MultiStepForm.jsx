import { useState } from "react";
import { User, Mail, Phone, MapPin, Lock } from "lucide-react";

import Form from "../ui/form";
import Input from "../ui/input";
import Button from "../ui/button";

function MultiStepForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

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
          Create Your Profile 🚀
        </Form.Title>

        <Form.Description>
          Complete all three steps to finish your profile.
        </Form.Description>
      </Form.Header>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-medium text-gray-500">
          <span>Step {step} of 3</span>
          <span>{Math.round((step / 3) * 100)}%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
          <div
            className="h-full rounded-full bg-indigo-600 transition-all duration-300"
            style={{
              width: `${(step / 3) * 100}%`,
            }}
          />
        </div>
      </div>

      <Form.Body>
        {step === 1 && (
          <div className="space-y-5">
            <Input
              placeholder="Full Name"
              startIcon={<User size={18} />}
            />

            <Input
              type="email"
              placeholder="Email Address"
              startIcon={<Mail size={18} />}
            />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <Input
              placeholder="Phone Number"
              startIcon={<Phone size={18} />}
            />

            <Input
              placeholder="Location"
              startIcon={<MapPin size={18} />}
            />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5">
            <Input
              type="password"
              placeholder="Password"
              startIcon={<Lock size={18} />}
            />

            <Input
              type="password"
              placeholder="Confirm Password"
              startIcon={<Lock size={18} />}
            />
          </div>
        )}
      </Form.Body>

      <Form.Actions className="justify-between">
        <Button
          variant="outline"
          type="button"
          disabled={step === 1}
          onClick={prevStep}
        >
          Previous
        </Button>

        {step < 3 ? (
          <Button
            type="button"
            onClick={nextStep}
          >
            Next
          </Button>
        ) : (
          <Button type="submit">
            Finish
          </Button>
        )}
      </Form.Actions>
    </Form>
  );
}

export default MultiStepForm;