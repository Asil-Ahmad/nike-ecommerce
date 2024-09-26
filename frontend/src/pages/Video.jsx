import React from "react";


const Video = ({ video }) => {
  return (
    <div
      className='container m-auto'
      style={{
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
      <video
        className='w-full h-[60vh] object-cover bg-gray-100 select-none'
        autoPlay
        loop
        muted
        onContextMenu={(e) => e.preventDefault()} //this prevent rightclick save video
        playsInline
        src={video}
      />
    </div>
  );
};

export default Video;
