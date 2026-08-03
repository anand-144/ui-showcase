import PageLayout from "../components/common/PageLayout";
import ComponentCard from "../components/common/ComponentCard";

import { inputComponents } from "../data/inputComponents";

function Inputs() {
  return (
    <PageLayout
      title="Inputs"
      description="Modern, reusable, and responsive input components built with React and Tailwind CSS."
    >
      <div className="grid gap-8">
        {inputComponents.map((item) => (
          <ComponentCard
            key={item.id}
            title={item.name}
            component={item.component}
            usageCode={item.usageCode}
            sourceCode={item.sourceCode}
          />
        ))}
      </div>
    </PageLayout>
  );
}

export default Inputs;