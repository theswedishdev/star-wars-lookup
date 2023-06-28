import React from "react";
import cc from "classcat";

import type { Episode } from "../types";
import { getEpisodeDisplayTitle } from "../utils";
import { getAverageRating, useOmdbRequest } from "../api/omdb";
import Skeleton from "./Skeleton";
import StarRating from "./StarRating";

interface Props {
  episode: Episode;
  onClick: (episode: Episode) => unknown;
  selected: boolean;
}

const EpisodeListItem: React.FC<Props> = (props) => {
  const { episode, onClick, selected } = props;

  const { data: omdbData, isLoading: omdbIsLoading } = useOmdbRequest(episode);

  return (
    <li>
      <button
        className={cc([
          "my-2 flex w-full justify-between gap-x-6 rounded px-2 py-4 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-600",
          {
            "bg-indigo-100": selected,
          },
        ])}
        onClick={() => onClick(episode)}
        aria-selected={selected}
      >
        <div className="flex gap-x-4">
          <div className="min-w-0 flex-auto text-left">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {getEpisodeDisplayTitle(episode)}
            </p>

            {omdbIsLoading && <Skeleton className="h-4" />}
            {omdbData && <StarRating rating={getAverageRating(omdbData)} />}

            <p className="mt-1 text-xs leading-5 text-gray-500">Episode {episode.episode_id}</p>
          </div>
        </div>
        <div className="hidden sm:flex sm:flex-col sm:items-end">
          <p className="text-sm leading-6 text-gray-900">{episode.release_date}</p>
        </div>
      </button>
    </li>
  );
};

export default EpisodeListItem;
