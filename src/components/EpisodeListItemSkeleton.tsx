import React from "react";

import Skeleton from "./Skeleton";

interface Props {}

const EpisodeListItemSkeleton: React.FC<Props> = () => {
  return (
    <div className="flex w-full justify-between gap-x-6 rounded px-2 py-4">
      <div className="flex w-full flex-col gap-4">
        <Skeleton className="h-4 w-1/2 leading-6" />
        <Skeleton className="h-4 w-1/3 leading-6" />
        <Skeleton className="h-3 w-1/4 leading-5" />
      </div>
      <div className="hidden w-64 sm:flex sm:flex-col sm:items-end">
        <Skeleton className="h-4 leading-6" />
      </div>
    </div>
  );
};

export default EpisodeListItemSkeleton;
