import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import React from "react";
const Card = ({key,item}) => {
  return (

    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill/>
        </div>
        <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            11.02.2023
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link  href={``}>
          <h1>{item.title}</h1>
        </Link>
          <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde sit culpa debitis.</p> 
        <Link href={``} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  
  );
};

export default Card;