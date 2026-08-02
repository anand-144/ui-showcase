import { Copy } from "lucide-react";
import toast from "react-hot-toast";

import Button from "../ui/button";

function CopyButton({
  code,
  children = "Copy Code",
  className,
}) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);

      toast.success("Code copied to clipboard!", {
        duration: 2000,
        position: "top-right",
      });
    } catch (error) {
      toast.error("Failed to copy code.", {
        duration: 2000,
        position: "top-right",
      });

      console.error(error);
    }
  };

  return (
    <Button
      variant="outline"
      leftIcon={<Copy size={16} />}
      onClick={handleCopy}
      className={className}
    >
      {children}
    </Button>
  );
}

export default CopyButton;