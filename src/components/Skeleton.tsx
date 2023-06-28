import React from "react";
import cc from "classcat";

interface Props {
  className?: string;
}

const Skeleton: React.FC<Props> = (props) => {
  const { className } = props;

  return <div className={cc(["block w-full animate-pulse rounded-full bg-gray-300", className])} />;
};

export default Skeleton;
