import React, { useState } from "react";

import Transitions from "./Transitions";
import { women } from "../assets/video";
import Video from "../pages/Video";
import NikeRun from "../pages/NikeRun";
import Loader from "../constants/Loader";

const WomenCollections = () => {
  document.title = "Women's Collections";
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

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
      {/* <div className='container flex justify-between'>
        <h1>LOGO</h1>
        <div className='sm:flex hidden flex-1 justify-center gap-5'>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Service</p>
        </div>
        <h1 className="relative sm:hidden flex " onClick={() => setOpen(!open)}>[---]</h1>

        {open ? (
          <div className='flex flex-col'>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
          </div>
        ) : (
          ""
        )}
      </div> */}
    </Transitions>
  );
};

export default WomenCollections;
