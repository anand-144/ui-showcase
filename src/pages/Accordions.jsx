import { useState } from "react";

import PageLayout from "../components/common/PageLayout";
import ComponentCard from "../components/common/ComponentCard";
import Button from "../components/ui/button";

import { accordionComponents } from "../data/accordion/accordionComponents";

const ITEMS_PER_LOAD = 4;

function Accordion() {
  const [visibleCount, setVisibleCount] =
    useState(ITEMS_PER_LOAD);

  const visibleAccordions =
    accordionComponents.slice(
      0,
      visibleCount
    );

  const hasMore =
    visibleCount <
    accordionComponents.length;

  const canShowLess =
    visibleCount > ITEMS_PER_LOAD;

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(
        prev + ITEMS_PER_LOAD,
        accordionComponents.length
      )
    );
  };

  const handleShowLess = () => {
    setVisibleCount(ITEMS_PER_LOAD);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <PageLayout
      title="Accordions"
      description="Modern, responsive, and reusable accordion components built with React and Tailwind CSS."
    >
      <div className="grid gap-8">
        {visibleAccordions.map(
          (item) => (
            <ComponentCard
              key={item.id}
              title={item.name}
              component={item.component}
              props={item.props}
              usageCode={item.usageCode}
              sourceCode={item.sourceCode}
              tags={item.tags}
            />
          )
        )}
      </div>

      {(hasMore || canShowLess) && (
        <div className="mt-12 flex justify-center gap-4">
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
              Load More ({visibleCount}/
              {accordionComponents.length})
            </Button>
          )}
        </div>
      )}
    </PageLayout>
  );
}

export default Accordion;