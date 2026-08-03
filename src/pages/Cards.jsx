import { useState } from "react";

import PageLayout from "../components/common/PageLayout";
import ComponentCard from "../components/common/ComponentCard";
import Button from "../components/ui/button";

import { cardComponents } from "../data/cardComponents";

const ITEMS_PER_LOAD = 4;

function Cards() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const visibleCards = cardComponents.slice(0, visibleCount);

  const hasMore = visibleCount < cardComponents.length;
  const canShowLess = visibleCount > ITEMS_PER_LOAD;

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + ITEMS_PER_LOAD, cardComponents.length)
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
      title="Cards"
      description="Modern, reusable and responsive card components built with React and Tailwind CSS."
    >
      <div className="grid gap-8">
        {visibleCards.map((item) => {
          const Component = item.component;

          return (
            <ComponentCard
              key={item.id}
              title={item.name}
              component={Component}
              props={item.props}
              usageCode={item.usageCode}
              sourceCode={item.sourceCode}
            />
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
              Load More ({visibleCount}/{cardComponents.length})
            </Button>
          )}
        </div>
      )}
    </PageLayout>
  );
}

export default Cards;