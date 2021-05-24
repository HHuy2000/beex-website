import React from "react";
import styles from "./TopBar.module.css";
import Image from "next/image";

function TopBar() {
  return (
    <div className={styles.text}>
      <Image src="/images/vercel.svg" alt="example" width={300} height={100} />
      <h1>Top bar</h1>
      <p>Hello </p>
    </div>
  );
}

export default TopBar;
