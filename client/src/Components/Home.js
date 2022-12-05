import React from "react";
import clsx from "clsx";
import styles from "../Home.module.css";
//import Restaurant from "./Restaurant";
import RestaurantContainer from "./RestaurantContainer";
import { Link } from "react-router-dom";


const Home = ({ variant = "default" }) => {
  return (
    
    <div
      className={clsx(
        styles.newRootRootRootRoot,
        { [styles.loading]: variant === "loading" },
        { [styles.error]: variant === "error" }
      )}
    >
      <Link to='/login'><button>Login</button></Link>
      <div
        className={clsx(
          styles.restaurantPage,
          { [styles.loading]: variant === "loading" },
          { [styles.error]: variant === "error" }
        )}
      >
        <div className={styles.flexRow}>
          <div className={styles.flexRow1}>
            <div className={styles.text1}>NyamaHaven</div>
            <img
              src={`https://file.rendit.io/n/qdg7a4Vo9D1mfiGViY9E.svg`}
              className={styles.image5}
            />
          </div>
          <div className={styles.paragraph}>
            Best Steak Experience at the heart of Nairobi
          </div>
        </div>
        <RestaurantContainer />
        

        <div className={styles.text10}>NyamaHaven | copyright 2022</div>
      </div>
      <div
        className={clsx(
          styles.loadingSpinner,
          { [styles.loading]: variant === "loading" },
          { [styles.error]: variant === "error" }
        )}
      />
      <img
        src={`https://file.rendit.io/n/VKUDdPXOQEW9F1d6KxwA.png`}
        className={clsx(styles.errorBang, {
          [styles.error]: variant === "error",
        })}
      />
    </div>
  );
};


export default Home;