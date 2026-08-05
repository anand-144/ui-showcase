import { useState } from "react";

import PageLayout from "../components/common/PageLayout";
import ComponentCard from "../components/common/ComponentCard";
import Button from "../components/ui/button";

import { tableComponents } from "../data/table/tableComponents";

const ITEMS_PER_LOAD = 4;

function Tables() {
  const [visibleCount, setVisibleCount] =
    useState(ITEMS_PER_LOAD);

  const visibleTables = tableComponents.slice(
    0,
    visibleCount
  );

  const hasMore =
    visibleCount < tableComponents.length;

  const canShowLess =
    visibleCount > ITEMS_PER_LOAD;

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(
        prev + ITEMS_PER_LOAD,
        tableComponents.length
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
      title="Tables"
      description="Modern, responsive, and reusable table components built with React and Tailwind CSS."
    >
      <div className="grid gap-8">
        {visibleTables.map((item) => (
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
              {tableComponents.length})
            </Button>
          )}
        </div>
      )}
    </PageLayout>
  );
}

export default Tables;