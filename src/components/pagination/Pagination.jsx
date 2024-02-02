"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev,cat, hasNext }) => {
const router =useRouter()
console.log(cat)
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={()=>router.push(`?page=${page - 1}&cat=${cat || ''}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
        onClick={()=>router.push(`?page=${page + 1}&cat=${cat || ''}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;