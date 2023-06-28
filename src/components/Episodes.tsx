import React from "react";
import useSWR from "swr";

import type { Episode, FilmsResponse, SortBy } from "../types";

import EpisodeDetails from "./EpisodeDetails";
import EpisodeEmpty from "./EpisodeEmpty";
import EpisodeList from "./EpisodeList";
import EpisodesContainer from "./EpisodesContainer";
import { getEpisodeDisplayTitle } from "../utils";

const getEpisodes = (
  data?: FilmsResponse,
  search?: string,
  sortBy?: SortBy,
): Episode[] | undefined => {
  let episodes = data?.results;

  if (!episodes) {
    return undefined;
  }

  if (search) {
    episodes = episodes.filter((episode) => {
      return getEpisodeDisplayTitle(episode).toUpperCase().includes(search.toUpperCase());
    });
  }

  if (sortBy === "release_date") {
    episodes = episodes.sort((a, b) => a.release_date.localeCompare(b.release_date));
  } else if (sortBy === "episode_id") {
    episodes = episodes.sort((a, b) => a.episode_id - b.episode_id);
  }

  return episodes;
};

interface Props {}

const Episodes: React.FC<Props> = () => {
  const { data, isLoading } = useSWR<FilmsResponse>("https://swapi.dev/api/films/?format=json");

  const [selectedEpisode, setSelectedEpisode] = React.useState<Episode>();

  return (
    <EpisodesContainer>
      {({ search, sortBy }) => (
        <div className="grid min-h-full divide-x-2 md:grid-cols-2">
          <EpisodeList
            episodes={getEpisodes(data, search, sortBy)}
            isLoading={isLoading}
            onClick={setSelectedEpisode}
            selectedEpisode={selectedEpisode}
          />

          {selectedEpisode ? (
            <EpisodeDetails episode={selectedEpisode} />
          ) : (
            <EpisodeEmpty isLoading={isLoading} />
          )}
        </div>
      )}
    </EpisodesContainer>
  );
};

export default Episodes;
