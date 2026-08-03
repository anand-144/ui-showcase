import { Lock } from "lucide-react";
import Input from "../ui/input";

function DisabledInput() {
  return (
    <Input
      disabled
      value="You can't edit this field"
      startIcon={<Lock size={18} />}
    />
  );
}

export default DisabledInput;