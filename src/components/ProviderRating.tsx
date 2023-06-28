import React from "react";

import { getRatingPercentage } from "../api/omdb";

import type { OmdbResponse } from "../types";

interface Props {
  rating: OmdbResponse["Ratings"][number];
}

const ProviderRating: React.FC<Props> = (props: Props) => {
  const { rating } = props;

  return (
    <p className="rounded-full border-2 border-indigo-600 px-2 py-1 text-xs text-indigo-600">
      {rating.Source}: {getRatingPercentage(rating)}%
    </p>
  );
};

export default ProviderRating;
