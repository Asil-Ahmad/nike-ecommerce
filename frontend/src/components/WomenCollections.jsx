import React, { useState } from "react";

import Transitions from "./Transitions";
import { women } from "../assets/video";
import Video from "../pages/Video";
import NikeRun from "../pages/NikeRun";
import Loader from "../constants/Loader";

const WomenCollections = () => {
  document.title = "Women's Collections";
  const [loading, setLoading] = useState(false);

  return loading ? (
    <Loader />
  ) : (
    <Transitions>
      <div>
        <Video video={women} />
        <NikeRun
          text1='Nike Pegasus 41'
          text2={`Don’t Waste Your Energy`}
          text3={`Run in Pegasus. Feel the responsive energy return of Air Zoom and all-new ReactX foam.`}
          button='Shop'
        />
      </div>
    </Transitions>
  );
};

export default WomenCollections;
