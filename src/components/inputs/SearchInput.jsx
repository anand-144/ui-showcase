import { Search } from "lucide-react";
import Input from "../ui/input";

function SearchInput() {
  return (
    <Input
      startIcon={<Search size={18} />}
      placeholder="Search components..."
    />
  );
}

export default SearchInput;