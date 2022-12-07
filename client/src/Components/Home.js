import React from "react";
import clsx from "clsx";
import styles from "../Home.module.css";
//import Restaurant from "./Restaurant";
import RestaurantContainer from "./RestaurantContainer";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    
    <div
      className={clsx(
        styles.newRootRootRootRoot,
       
      )}
    >
      <div>
      <Link to='/login'><button>Login</button></Link>
      <Link to='/signUp'><button>signUp</button></Link>
      </div>
      <div
        className={clsx(
          styles.restaurantPage,
          
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
       
      />
    </div>
  );
};


export default Home;