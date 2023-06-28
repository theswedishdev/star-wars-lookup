import React from "react";

import type { IntRange } from "../types";

import { StarIcon as StarOutlineIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarSolidIcon } from "@heroicons/react/24/solid";

interface Props {
  rating: IntRange<0, 10>;
}

const StarRating: React.FC<Props> = (props) => {
  const { rating } = props;

  return (
    <div className="flex">
      <p className="sr-only">{rating}/10</p>
      {new Array(10).fill(null).map((_, i) => {
        if (rating > i) {
          return <StarSolidIcon key={i} className="h-5 w-5 text-yellow-500" />;
        }

        return <StarOutlineIcon key={i} className="h-5 w-5 text-gray-400" />;
      })}
    </div>
  );
};

export default StarRating;
