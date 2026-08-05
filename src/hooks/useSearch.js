import { useEffect, useMemo, useState } from "react";

import { searchData } from "../data/searchData";
import {
  filterSearch,
  sortResults,
} from "../utils/searchHelpers";

export default function useSearch() {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] =
    useState(-1);

  /* -------------------------------------------------------------------------- */
  /*                              Filter Results                                */
  /* -------------------------------------------------------------------------- */

const results = useMemo(() => {
  return sortResults(
    filterSearch(searchData, query)
  );
}, [query]);

  /* -------------------------------------------------------------------------- */
  /*                          Reset Selected Index                              */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    setSelectedIndex(
      results.length ? 0 : -1
    );
  }, [query, results.length]);

  /* -------------------------------------------------------------------------- */
  /*                            Keyboard Navigation                             */
  /* -------------------------------------------------------------------------- */

  const moveDown = () => {
    setSelectedIndex((prev) =>
      prev < results.length - 1
        ? prev + 1
        : 0
    );
  };

  const moveUp = () => {
    setSelectedIndex((prev) =>
      prev > 0
        ? prev - 1
        : results.length - 1
    );
  };

  /* -------------------------------------------------------------------------- */
  /*                                 Helpers                                    */
  /* -------------------------------------------------------------------------- */

  const clearSearch = () => {
    setQuery("");
    setSelectedIndex(-1);
  };

  return {
    query,
    setQuery,

    results,

    selectedIndex,

    moveDown,
    moveUp,

    clearSearch,
  };
}