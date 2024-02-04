import React from "react";
import styles from "./menu.module.css";

import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategoriees/MenuCategories.jsx";

const getData = async (page,cat) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_URL}/api/posts?page=${page}&cat=${cat || ''}&sortBy=asc`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Menu = async ({ page, cat }) => {
  const {posts, count } =await getData(page,cat)

  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      {posts?.map((item) => (
        <MenuPosts withImage={false} item={item} key={item.id}/> // Change item._id to item.id
      ))}
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Oldest</h1>
      {posts?.map((item) => (
        <MenuPosts withImage={true} item={item} key={item.id}/> // Change item._id to item.id
      ))}
    </div>
  );
};

export default Menu;
