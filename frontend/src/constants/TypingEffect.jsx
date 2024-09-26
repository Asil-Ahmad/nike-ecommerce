import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const TypingEffect = ({ text2 }) => {
  const text = text2;
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, 50);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i]);

  return (
    <h1 className='uppercase font-anton lg:text-7xl text-4xl'>
      {displayedText ? displayedText : "Typing Effect"}
    </h1>
  );
};

export default TypingEffect;
