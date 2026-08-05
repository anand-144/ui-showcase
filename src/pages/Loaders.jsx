import { useState } from "react";

import PageLayout from "../components/common/PageLayout";
import ComponentCard from "../components/common/ComponentCard";
import Button from "../components/ui/button";

import { loaderComponents } from "../data/loaders/loaderComponents";

const ITEMS_PER_LOAD = 4;

function Loader() {
  const [visibleCount, setVisibleCount] =
    useState(ITEMS_PER_LOAD);

  const visibleLoaders =
    loaderComponents.slice(
      0,
      visibleCount
    );

  const hasMore =
    visibleCount <
    loaderComponents.length;

  const canShowLess =
    visibleCount > ITEMS_PER_LOAD;

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(
        prev + ITEMS_PER_LOAD,
        loaderComponents.length
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
      title="Loaders"
      description="Modern, responsive, and reusable loading components built with React and Tailwind CSS."
    >
      <div className="grid gap-8">
        {visibleLoaders.map((item) => (
          <ComponentCard
            key={item.id}
            title={item.name}
            component={item.component}
            props={item.props}
            usageCode={item.usageCode}
            sourceCode={item.sourceCode}
            tags={item.tags}
          />
        ))}
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
              {loaderComponents.length})
            </Button>
          )}
        </div>
      )}
    </PageLayout>
  );
}

export default Loader;