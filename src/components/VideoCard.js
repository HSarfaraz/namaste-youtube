import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="p-2 m-2 w-80 rounded-lg shadow-lg">
      <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg" />
      <ul>
        <li className="py-2 font-bold">{title}</li>
        <li className="">{channelTitle}</li>
        <li className="">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
