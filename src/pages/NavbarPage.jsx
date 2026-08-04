import { useState } from "react";

import PageLayout from "../components/common/PageLayout";
import ComponentCard from "../components/common/ComponentCard";
import Button from "../components/ui/button";

import { navbarComponents } from "../data/navbar/navbarComponents";

const ITEMS_PER_LOAD = 6;

function NavbarPage() {
  const [visibleCount, setVisibleCount] =
    useState(ITEMS_PER_LOAD);

  const visibleNavbars = navbarComponents.slice(
    0,
    visibleCount
  );

  const hasMore =
    visibleCount < navbarComponents.length;

  const canShowLess =
    visibleCount > ITEMS_PER_LOAD;

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(
        prev + ITEMS_PER_LOAD,
        navbarComponents.length
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
      title="Navbars"
      description="Modern, responsive, and reusable navigation bars built with React and Tailwind CSS."
    >
      <div className="grid gap-8">
        {visibleNavbars.map((item) => (
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
              {navbarComponents.length})
            </Button>
          )}
        </div>
      )}
    </PageLayout>
  );
}

export default NavbarPage;