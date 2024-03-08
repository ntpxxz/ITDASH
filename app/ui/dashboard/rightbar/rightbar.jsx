import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur
          </h3>
          <span className={styles.subtitle}>Take 5 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi alias
            minus, omnis laboriosam praesentium tempore quisquam repellat,
            doloribus exercitationem quidem nostrum esse minima debitis illum!
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
        <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur
          </h3>
          <span className={styles.subtitle}>Take 5 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi alias
            minus, omnis laboriosam praesentium tempore quisquam repellat,
            doloribus exercitationem quidem nostrum esse minima debitis illum!
            Nobis repudiandae vel quis magni?
          </p>
          <button className={styles.button}>
            <MdReadMore />Read
          </button>
        </div>
      </div>

    </div>
  );
};

export default Rightbar;
