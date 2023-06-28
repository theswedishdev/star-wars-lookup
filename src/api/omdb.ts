import useSWR from "swr/immutable";

import type { Episode, IntRange, OmdbResponse } from "../types";

import { toRomanNumeral } from "../utils";

export const useOmdbRequest = (episode: Episode) => {
  const { data, isLoading } = useSWR<OmdbResponse>(
    () =>
      `https://www.omdbapi.com/?apikey=b9a5e69d&t=Star Wars: Episode ${toRomanNumeral(
        episode.episode_id,
      )} - ${episode.title}&y=${episode.release_date.substring(0, 4)}`,
  );

  return {
    data,
    isLoading,
  };
};

export const getRatingPercentage = (rating: OmdbResponse["Ratings"][number]): IntRange<0, 100> => {
  if (rating.Value.includes("%") || rating.Value.endsWith("/100")) {
    return Math.floor(parseFloat(rating.Value)) as IntRange<0, 100>;
  }

  if (rating.Value.endsWith("/10")) {
    return Math.floor(parseFloat(rating.Value) * 10) as IntRange<0, 100>;
  }

  return 0;
};

export const getAverageRating = (omdbResponse: OmdbResponse): IntRange<0, 10> => {
  return Math.floor(
    omdbResponse.Ratings.reduce((acc, rating) => {
      return acc + getRatingPercentage(rating) / 10;
    }, 0) / omdbResponse.Ratings.length,
  ) as IntRange<0, 10>;
};
