import {
  ShieldCheck,
  LogIn,
  UserPlus,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../ui/navbar";
import Button from "../ui/button";

function AuthNavbar() {
  return (
    <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl">
      {/* Navbar */}
      <Navbar
        variant="transparent"
        className="text-white"
      >
        <Navbar.Logo>
          <span className="text-indigo-400">
            Secure
          </span>
          Auth
        </Navbar.Logo>

        <Navbar.Links>
          <a
            href="#"
            className="transition hover:text-indigo-300"
          >
            Home
          </a>

          <a
            href="#"
            className="transition hover:text-indigo-300"
          >
            Features
          </a>

          <a
            href="#"
            className="transition hover:text-indigo-300"
          >
            Pricing
          </a>

          <a
            href="#"
            className="transition hover:text-indigo-300"
          >
            Contact
          </a>
        </Navbar.Links>

        <Navbar.Actions>
          <Button
            variant="outline"
            size="sm"
            leftIcon={<LogIn size={16} />}
          >
            Login
          </Button>

          <Button
            size="sm"
            leftIcon={<UserPlus size={16} />}
          >
            Register
          </Button>
        </Navbar.Actions>
      </Navbar>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-8 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="rounded-full bg-indigo-500/20 px-4 py-2 text-sm text-indigo-300">
              🔒 Secure Authentication
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight text-white lg:text-6xl">
              Welcome Back.
              <br />
              Securely Sign In.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Fast, secure authentication with
              email, social login and two-factor
              authentication support.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                leftIcon={<LogIn size={18} />}
              >
                Login
              </Button>

              <Button
                variant="outline"
                size="lg"
                leftIcon={<UserPlus size={18} />}
              >
                Create Account
              </Button>
            </div>

            <div className="mt-10 space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={18}
                  className="text-green-400"
                />
                Secure JWT Authentication
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={18}
                  className="text-green-400"
                />
                Google & GitHub Login
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={18}
                  className="text-green-400"
                />
                Two-Factor Authentication
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl bg-white p-8 shadow-2xl dark:bg-gray-900">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40">
                <ShieldCheck size={32} />
              </div>
            </div>

            <h2 className="text-center text-2xl font-bold">
              Sign In
            </h2>

            <p className="mt-2 text-center text-gray-500">
              Access your dashboard securely.
            </p>

            <div className="mt-8 space-y-4">
              <div className="h-12 rounded-xl bg-gray-100 dark:bg-gray-800" />

              <div className="h-12 rounded-xl bg-gray-100 dark:bg-gray-800" />

              <div className="h-12 rounded-xl rounded bg-indigo-600" />
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
              New here?

              <button className="font-semibold text-indigo-600">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AuthNavbar;