import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import type { SortBy } from "../types";

interface ChildrenArgs {
  search: string;
  sortBy: SortBy;
}

interface Props {
  children: (args: ChildrenArgs) => React.ReactNode;
}

const EpisodesContainer: React.FC<Props> = (props) => {
  const { children } = props;

  const [search, setSearch] = React.useState<string>("");
  const [sortBy, setSortBy] = React.useState<SortBy>("release_date");

  return (
    <div>
      <div className="flex items-center gap-4 border-b-2 border-gray-200 bg-gray-100 p-4 ">
        <select
          className="h-full rounded-md border-0 py-2 pl-2 pr-7 text-gray-500 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={sortBy}
          onChange={(event) => setSortBy(event.target.value as SortBy)}
        >
          <option value="" disabled>
            Sort by...
          </option>
          <option value="release_date">Release date</option>
          <option value="episode_id">Episode number</option>
        </select>

        <div className="relative w-full rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pr-2">
            <MagnifyingGlassIcon className="h-full w-full p-3 text-gray-500" />
          </div>
          <input
            type="search"
            name="search"
            id="search"
            className="block w-full rounded-md border-0 py-2 pl-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Type to search..."
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>
      <div>{children({ search, sortBy })}</div>
    </div>
  );
};

export default EpisodesContainer;
