import React from "react";
import { IMG_CDN } from "../utils/constants";

const VideoCard = ({ posterPath, movieTitle }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4 md:hover:w-48 h-82 opacity-100 hover:scale-110 transition duration-500">
      <img alt={movieTitle} className="" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default VideoCard;
