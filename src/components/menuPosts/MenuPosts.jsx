import Image from "next/image";
import Link from "next/link";

import styles from "./menuPosts.module.css"
const MenuPosts = ({ withImage, item,key }) => {
  return (
    <div className={styles.items} key={key}>
      <Link href={`/posts/${item?.slug}`} className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}> 
          <Image
          src={item?.img}
          alt="Post Image"
          width={500}
          height={300}
          className={`${styles.image} rounded-full`}
        /></div>
        )}
        <div className={styles.textContainer}>
          {/* Check if catSlug is defined before accessing it */}
          <span className={`${styles.category} ${styles.travel}`}>
          {item?.catSlug}
          </span>
          <h3 className={styles.postTitle}>{item?.title}</h3>
          <div className={styles.detail}>

            <span className={styles.date}>{item?.createdAt}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
