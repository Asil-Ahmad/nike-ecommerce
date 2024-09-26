import React from "react";

const Footer = () => {
  return (
    <div className='container py-10'>
      <hr className='mb-10' />
      <div className='sm:grid sm:grid-cols-4 sm:grid-rows-1 flex flex-col gap-4'>
        <div>
          <h3 className='text-sm font-medium mb-10'>Resources</h3>
          <div className='text-sm text-gray-400 font-sans flex flex-col gap-4'>
            <p>Find A Store</p>
            <p>Become A Member</p>
            <p>Send Us Feedback</p>
          </div>
        </div>
        {/*  */}
        <div>
          <h3 className='text-sm font-medium mb-10'>Help</h3>
          <div className='text-sm text-gray-400 font-sans flex flex-col gap-4'>
            <p>Find A Store</p>
            <p>Become A Member</p>
            <p>Send Us Feedback</p>
            <p>Find A Store</p>
            <p>Become A Member</p>
            <p>Send Us Feedback</p>
          </div>
        </div>
        {/*  */}
        <div>
          <h3 className='text-sm font-medium mb-10'>Company</h3>
          <div className='text-sm text-gray-400 font-sans flex flex-col gap-4'>
            <p>Find A Store</p>
            <p>Become A Member</p>
            <p>Send Us Feedback</p>
          </div>
        </div>
        <div className='text-right'>
          {" "}
          <h3 className='text-sm font-medium text-gray-400 mb-10'>India</h3>
        </div>
      </div>
      {/* //!Copyright */}
      <p className="text-center mt-10 text-sm font-medium text-gray-500">© 2024 Nike, Inc. All rights reserved</p>
    </div>
  );
};

export default Footer;
