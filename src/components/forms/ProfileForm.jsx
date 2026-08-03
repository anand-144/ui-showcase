import {
  User,
  Mail,
  Phone,
  Globe,
  MapPin,
  Camera,
} from "lucide-react";

import Form from "../ui/form";
import Input from "../ui/input";
import Button from "../ui/button";

function ProfileForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form
      variant="card"
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl"
    >
      <Form.Header>
        <Form.Title>
          Edit Profile 👤
        </Form.Title>

        <Form.Description>
          Update your personal information.
        </Form.Description>
      </Form.Header>

      <Form.Body>
        {/* Avatar */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Profile"
              className="h-24 w-24 rounded-full border-4 border-indigo-100 object-cover"
            />

            <button
              type="button"
              className="absolute bottom-0 right-0 rounded-full bg-indigo-600 p-2 text-white shadow-lg transition hover:bg-indigo-700"
            >
              <Camera size={16} />
            </button>
          </div>
        </div>

        <Input
          placeholder="Full Name"
          startIcon={<User size={18} />}
        />

        <Input
          type="email"
          placeholder="Email Address"
          startIcon={<Mail size={18} />}
        />

        <Input
          placeholder="Phone Number"
          startIcon={<Phone size={18} />}
        />

        <Input
          placeholder="Website"
          startIcon={<Globe size={18} />}
        />

        <Input
          placeholder="Location"
          startIcon={<MapPin size={18} />}
        />

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Bio
          </label>

          <textarea
            rows={4}
            placeholder="Tell us about yourself..."
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:ring-indigo-900"
          />
        </div>
      </Form.Body>

      <Form.Actions>
        <Button className="w-full">
          Save Changes
        </Button>
      </Form.Actions>
    </Form>
  );
}

export default ProfileForm;