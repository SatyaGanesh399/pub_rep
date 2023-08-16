import React from "react";
import classNames from "classnames";
import ReactPlayer from "react-player/lazy";
import HomeVideosPlayClipart from "@svg-resources/home-videos-play-clipart";

import css from "./index.module.scss";

type DashboardVideoPlayerProps = {
  videoID: string;
  className?: string;
  thumbnail?: string;
};

const DashboardVideoPlayer = ({
  videoID,
  className,
  thumbnail
}: DashboardVideoPlayerProps) => {
  return (
    <div className={classNames(css.playerWrapper, className)}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoID}&feature=youtu.be`}
        controls
        // light={`${process.env.IMAGES_PATH}/${thumbnail}`}
        // playIcon={<HomeVideosPlayClipart className={css.videoPlayBtn} />}
      />
    </div>
  );
};

export default DashboardVideoPlayer;
