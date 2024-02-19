import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    // console.log("json.items : ", json.items);
    setVideos(json.items);
  };

  // Only render the VideoCard component if there are items in the videos array

  if (videos.length > 0) {
    return (
      <div className="flex flex-wrap">
        {videos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div>
      <Shimmer />
    </div>
  );
};

export default VideoContainer;
