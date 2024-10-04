import React from "react";
import { lineSpinner } from "ldrs";
lineSpinner.register();
const SmallLoader = () => {
  return (
 
    <l-line-spinner
      size='30'
      stroke='3'
      speed='1'
      color='black'
    ></l-line-spinner>
  );
};

export default SmallLoader;
