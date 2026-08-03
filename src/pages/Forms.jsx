import PageLayout from "../components/common/PageLayout";
import ComponentCard from "../components/common/ComponentCard";

import { formComponents } from "../data/formComponents";
import Button from "../components/ui/button";
import { useState } from "react";


const ITEMS_PER_LOAD = 4;

function Forms() {

    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  
    const visibleForm = formComponents.slice(0, visibleCount);
  
    const hasMore = visibleCount < formComponents.length;
    const canShowLess = visibleCount > ITEMS_PER_LOAD;

    const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + ITEMS_PER_LOAD, formComponents.length)
    );
  };

  const handleShowLess = () => {
    setVisibleCount(ITEMS_PER_LOAD);

    // Smooth scroll back to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <PageLayout
      title="Forms"
      description="Beautiful, responsive, and reusable form components built with React and Tailwind CSS."
    >
      <div className="grid gap-8">
        {visibleForm.map((item) => {
          const Component = item.component;

          return (
            <ComponentCard
              key={item.id}
              title={item.name}
              component={Component}
              usageCode={item.usageCode}
              sourceCode={item.sourceCode}
              tags={item.tags}
            >
              <Component />
            </ComponentCard>
          );
        })}
      </div>
       {(hasMore || canShowLess) && (
              <div className="mt-12 flex items-center justify-center gap-4">
                {canShowLess && (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleShowLess}
                  >
                    Show Less
                  </Button>
                )}
      
                {hasMore && (
                  <Button
                    variant="gradient"
                    size="lg"
                    onClick={handleLoadMore}
                  >
                    Load More ({visibleCount}/{formComponents.length})
                  </Button>
                )}
              </div>
            )}
    </PageLayout>
  );
}

export default Forms;