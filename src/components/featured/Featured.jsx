import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
const Featured = () => {
  return (
    <div className='relative'>
    
      <div className='flex justify-center'>
        {/* Desktop Image */}
        <div className='hidden md:block'>
          <img src="/home.png" alt="" className='w-full h-auto rounded-2xl' />
        </div>
        {/* Mobile Image (shown on screens smaller than md breakpoint) */}
        <div className='md:hidden'>
          <img src="/mobile.png" alt="" className='w-full  h-auto rounded-2xl' />
        </div>
      </div> <h1 className={styles.title}>
        <b>Tomass Blog!</b> Try to rich more people by posting in it.
      </h1>
    </div>
  );
};

export default Featured;
