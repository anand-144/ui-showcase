/* -------------------------------------------------------------------------- */
/*                             Filter Search Data                             */
/* -------------------------------------------------------------------------- */

export function filterSearch(items, query) {
  if (!query.trim()) return [];

  const search = query.toLowerCase();

  return items.filter((item) => {
    return (
      item.title
        .toLowerCase()
        .includes(search) ||
      item.category
        .toLowerCase()
        .includes(search) ||
      item.tags.some((tag) =>
        tag
          .toLowerCase()
          .includes(search)
      )
    );
  });
}

/* -------------------------------------------------------------------------- */
/*                             Highlight Match                                */
/* -------------------------------------------------------------------------- */

export function highlightText(
  text,
  query
) {
  if (!query.trim()) return text;

  const regex = new RegExp(
    `(${query})`,
    "gi"
  );

  return text.split(regex);
}

/* -------------------------------------------------------------------------- */
/*                              Sort Results                                  */
/* -------------------------------------------------------------------------- */

export function sortResults(results) {
  return [...results].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
}

/* -------------------------------------------------------------------------- */
/*                            Group By Category                               */
/* -------------------------------------------------------------------------- */

export function groupByCategory(results) {
  return results.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }

    acc[item.category].push(item);

    return acc;
  }, {});
}