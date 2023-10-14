import React from "react";
import { IMG_CDN } from "../utils/constants";

const VideoCard = ({ posterPath, movieTitle, vote }) => {
  return (
    <div className="w-36 md:w-48 pr-4 hover:scale-110 transition duration-500">
      <img alt="movie card" className="" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default VideoCard;
