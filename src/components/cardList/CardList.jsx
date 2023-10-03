import React from "react";
import styles from "./cardList.module.css";

import Image from "next/image";
import Card from "../card/Card";



const CardList = async ({ page, cat }) => {
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
   
       <Card/>
       <Card/>
       <Card/>
       <Card/>
    
      </div>
    </div>
  );
};

export default CardList;