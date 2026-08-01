import { ArrowRight } from "lucide-react";

import Section from "../common/Section";

function CTASection() {
  return (
    <Section>
      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-20 text-center text-white">
        <h2 className="text-4xl font-bold">
          Ready to Build Faster?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-100">
          Browse reusable React components and build beautiful interfaces
          in minutes.
        </p>

        <button className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-600 transition hover:scale-105">
          Explore Components

          <ArrowRight size={18} />
        </button>
      </div>
    </Section>
  );
}

export default CTASection;