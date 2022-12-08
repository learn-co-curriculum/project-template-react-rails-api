import React from "react";
import clsx from "clsx";
import styles from "./Order.css";

 const Order = ({ variant = "default" }) => {
  
  
  return (
    <div
     
      className={clsx(
        styles.orderPageRootRootRoot,
        { [styles.loading]: variant === "loading" },
        { [styles.error]: variant === "error" }
      )}
    >
      <div
        className={clsx(
          styles.flexRow,
          { [styles.loading]: variant === "loading" },
          { [styles.error]: variant === "error" }
        )}
      >
        <div className={styles.text1}>NyamaHaven</div>
        <img
          src={`https://file.rendit.io/n/BjxdPbbj1TZQkyFHgi93.svg`}
          className={styles.image3}
        />
      </div>
      <div
        className={clsx(
          styles.text2,
          { [styles.loading]: variant === "loading" },
          { [styles.error]: variant === "error" }
        )}
      >
        YOUR ORDER
      </div>
      <div
        className={clsx(
          styles.flexRow1,
          { [styles.loading]: variant === "loading" },
          { [styles.error]: variant === "error" }
        )}
      >
        <img
          src={`https://file.rendit.io/n/vNt5cqKYuBBjDQD0lJHV.svg`}
          className={styles.image4}
        />
        <img
          src={`https://file.rendit.io/n/24vRz4soyFlULW8AXUae.png`}
          className={styles.image1}
        />
        <div className={styles.hangerSteak}>
          Hanger Steak
          {"                   "}
          2800
        </div>
      </div>
      <div
        className={clsx(
          styles.flexRow2,
          { [styles.loading]: variant === "loading" },
          { [styles.error]: variant === "error" }
        )}
      >
        <img
          src={`https://file.rendit.io/n/Va8VEdEvsMnA0OXCFfus.svg`}
          className={styles.image5}
        />
        <img
          src={`https://file.rendit.io/n/tNvF2qMGQMPBlSYS8NCK.png`}
          className={styles.image2}
        />
        <div className={styles.ribeyeSteak}>
          Ribeye Steak
          {"                    "}
          2000
        </div>
      </div>
      <div
        className={clsx(
          styles.login,
          { [styles.loading]: variant === "loading" },
          { [styles.error]: variant === "error" }
        )}
      >
        <div className={styles.mahoganyRectangle} />
        <div className={styles.text3}>TOTAL AMOUNT 4800</div>
      </div>
      <div
        className={clsx(
          styles.text4
    
        )}
      >
        NyamaHaven | copyright 2022
      </div>
      <div
        
      />
     
    </div>
  );
};
export default Order;