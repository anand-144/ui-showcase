import Input from "../ui/input";

function DefaultInput() {
  return (
    <div className="space-y-4">
      <Input
        label="Name"
        placeholder="Enter your name"
      />

      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
      />

      <Input
        label="Username"
        placeholder="@johndoe"
      />
    </div>
  );
}

export default DefaultInput;