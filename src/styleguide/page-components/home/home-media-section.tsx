import React from "react";
import Img from "@styleguide/components/img";

import css from "./index.module.scss";

const HomeMediaSection = () => (
  <div className={css.promoSection}>
    <div className={css.promoHeading}>Media Recognitions</div>
    <div className={css.mediaSection}>
      <Img
        alt="your story logo"
        src={"your_story.png"}
        className={css.mediaAsset}
      />
      <Img
        alt="your story logo"
        src={"your_story.png"}
        className={css.mediaAsset}
      />
      <Img
        alt="your story logo"
        src={"your_story.png"}
        className={css.mediaAsset}
      />
      <Img
        alt="your story logo"
        src={"your_story.png"}
        className={css.mediaAsset}
      />
    </div>
  </div>
);

export default HomeMediaSection;
