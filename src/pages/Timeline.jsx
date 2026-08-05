import { useState } from "react";

import PageLayout from "../components/common/PageLayout";
import ComponentCard from "../components/common/ComponentCard";
import Button from "../components/ui/button";

import { timelineComponents } from "../data/timeline/timelineComponents";

const ITEMS_PER_LOAD = 4;

function Timeline() {
  const [visibleCount, setVisibleCount] =
    useState(ITEMS_PER_LOAD);

  const visibleTimelines =
    timelineComponents.slice(
      0,
      visibleCount
    );

  const hasMore =
    visibleCount <
    timelineComponents.length;

  const canShowLess =
    visibleCount > ITEMS_PER_LOAD;

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(
        prev + ITEMS_PER_LOAD,
        timelineComponents.length
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
      title="Timelines"
      description="Modern, responsive, and reusable timeline components built with React and Tailwind CSS."
    >
      <div className="grid gap-8">
        {visibleTimelines.map(
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
              onClick={
                handleShowLess
              }
            >
              Show Less
            </Button>
          )}

          {hasMore && (
            <Button
              variant="gradient"
              size="lg"
              onClick={
                handleLoadMore
              }
            >
              Load More (
              {visibleCount}/
              {
                timelineComponents.length
              }
              )
            </Button>
          )}
        </div>
      )}
    </PageLayout>
  );
}

export default Timeline;