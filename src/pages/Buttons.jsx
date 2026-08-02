import PageLayout from "../components/common/PageLayout";
import ComponentCard from "../components/common/ComponentCard";

import { buttonComponents } from "../data/buttonComponents";

function Buttons() {
  return (
    <PageLayout
      title="Buttons"
      description="Modern, reusable and responsive button components built with React, Tailwind CSS and Framer Motion."
    >
      <div className="grid gap-8">
        {buttonComponents.map((item) => {
          const Component = item.component;

          return (
            <ComponentCard
              key={item.id}
              title={item.name}
              component={Component}
              props={item.props}
              code={item.code}
            />
          );
        })}
      </div>
    </PageLayout>
  );
}

export default Buttons;