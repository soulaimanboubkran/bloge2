import React from "react";
import styles from "./cardList.module.css";

import Image from "next/image";
import Card from "../card/Card";
import Pagination from "../pagination/Paginatin";


const getData = async (page) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};


const CardList = async ({page}) => {
  const data =await getData({page})
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
   {data?.map((item)=>(
    <Card item={item} key={item._id}/>
))}
       
      
    
      </div>
      <Pagination/>
    </div>
  );
};

export default CardList;