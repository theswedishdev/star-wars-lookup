import React from "react";

import yodaImage from "../images/yoda.png";

interface Props {
  isLoading: boolean;
}

const EpisodeEmpty: React.FC<Props> = (props) => {
  const { isLoading } = props;

  if (isLoading) {
    return <div />;
  }

  return (
    <div className="container mx-auto grid place-items-center bg-gray-50 text-center">
      <div className="prose flex flex-col items-center">
        <img
          src={yodaImage}
          alt="A picture of master Yoda from the Star Wars Saga"
          className="w-1/2"
          draggable="false"
        />
        <h1>Been selected, no episode has. Hmmmmmm.</h1>
      </div>
    </div>
  );
};

export default EpisodeEmpty;
