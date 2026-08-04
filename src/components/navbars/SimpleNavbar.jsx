import Navbar from "../ui/navbar";
import Button from "../ui/button";

function SimpleNavbar() {
  return (
    <Navbar>
      <Navbar.Logo>
        <span className="text-indigo-600">
          UI
        </span>{" "}
        Showcase
      </Navbar.Logo>

      <Navbar.Links>
        <a
          href="#"
          className="font-medium text-gray-600 transition hover:text-indigo-600 dark:text-gray-300"
        >
          Home
        </a>

        <a
          href="#"
          className="font-medium text-gray-600 transition hover:text-indigo-600 dark:text-gray-300"
        >
          Components
        </a>

        <a
          href="#"
          className="font-medium text-gray-600 transition hover:text-indigo-600 dark:text-gray-300"
        >
          Pricing
        </a>

        <a
          href="#"
          className="font-medium text-gray-600 transition hover:text-indigo-600 dark:text-gray-300"
        >
          Contact
        </a>
      </Navbar.Links>

      <Navbar.Actions>
        <Button
          variant="ghost"
          size="sm"
        >
          Login
        </Button>

        <Button size="sm">
          Get Started
        </Button>
      </Navbar.Actions>
    </Navbar>
  );
}

export default SimpleNavbar;