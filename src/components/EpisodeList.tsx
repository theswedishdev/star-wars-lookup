import React from "react";

import type { Episode } from "../types";
import EpisodeListItem from "./EpisodeListItem";
import EpisodeListItemSkeleton from "./EpisodeListItemSkeleton";

interface Props {
  episodes?: Episode[];
  isLoading: boolean;
  onClick: (episode: Episode) => unknown;
  selectedEpisode?: Episode;
}

const EpisodeList: React.FC<Props> = (props) => {
  const { episodes, isLoading, onClick, selectedEpisode } = props;

  return (
    <div className="px-4 py-4 md:min-h-screen">
      {isLoading ? (
        <div className="divide-y divide-gray-300">
          <EpisodeListItemSkeleton />
          <EpisodeListItemSkeleton />
          <EpisodeListItemSkeleton />
        </div>
      ) : (
        <ul role="list" className="divide-y divide-gray-300">
          {episodes?.map((episode) => (
            <EpisodeListItem
              key={episode.episode_id}
              episode={episode}
              onClick={onClick}
              selected={episode.episode_id === selectedEpisode?.episode_id}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default EpisodeList;
