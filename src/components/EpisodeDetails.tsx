import React from "react";

import type { Episode } from "../types";
import { getEpisodeDisplayTitle } from "../utils";
import { getAverageRating, getRatingPercentage, useOmdbRequest } from "../api/omdb";
import StarRating from "./StarRating";
import ProviderRating from "./ProviderRating";

interface Props {
  episode: Episode;
}

const EpisodeDetails: React.FC<Props> = (props) => {
  const { episode } = props;

  const { data, isLoading } = useOmdbRequest(episode);

  if (isLoading) {
    return null;
    // return <p>Loading...</p>;
  }

  return (
    <div className="bg-gray-50 px-4 py-4">
      <article className="prose">
        <h1>{getEpisodeDisplayTitle(episode)}</h1>

        <div className="grid grid-cols-4 gap-x-2">
          {data?.Poster && <img src={data.Poster} draggable="false" />}
          <p className="col-span-3">{episode.opening_crawl}</p>
        </div>

        <p>Directed by: {episode.director}</p>

        {data && (
          <div className="flex items-center">
            <p>Average rating:</p>
            <StarRating rating={getAverageRating(data)} />
          </div>
        )}

        {data && (
          <div className="flex gap-2" key="rating">
            {data.Ratings.map((rating) => (
              <ProviderRating key={rating.Source} rating={rating} />
            ))}
          </div>
        )}
      </article>
    </div>
  );
};

export default EpisodeDetails;
