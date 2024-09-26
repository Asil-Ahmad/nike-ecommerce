import React, { useState } from "react";
import Transitions from "./Transitions";
import Video from "../pages/Video";
import { kids } from "../assets/video";
import NikeRun from "../pages/NikeRun";

const KidCollections = () => {
  document.title = "Kid's Collections";
  const [loading, setLoading] = useState(false);

  return loading ? (
    <Loader />
  ) : (
    <Transitions>
      <div>
        <Video video={kids} />
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

export default KidCollections;
