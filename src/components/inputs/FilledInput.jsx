import Input from "../ui/input";

function FilledInput() {
  return (
    <div className="space-y-4">
      <Input
        variant="filled"
        label="Full Name"
        placeholder="John Doe"
      />

      <Input
        variant="filled"
        label="Email"
        type="email"
        placeholder="john@example.com"
      />

      <Input
        variant="filled"
        label="Company"
        placeholder="OpenAI"
      />
    </div>
  );
}

export default FilledInput;