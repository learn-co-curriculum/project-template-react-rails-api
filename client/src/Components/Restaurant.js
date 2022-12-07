import React from "react";
import styles from "../Home.module.css";
// import { Link } from "react-router-dom";
import { useState } from "react";
function Restaurant({ restaurant }) {
  const [orderItems, setOrderItems] = useState({
    restaurant_id: "",
    menu_id: "",
    price: "",
  });

  const menuItems = restaurant.menus.map((m) => {
    const { restaurant_id, id, price } = m;
    const handleOrderItems = () => {
      setOrderItems({
        ...orderItems,
        restaurant_id: restaurant_id,
        menu_id: id,
        price: price,
      });

      fetch("http://localhost:3000/orders", {
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: new URLSearchParams(orderItems),
      });
    };
    return (
      <div key={m.id}>
        <div className={styles.flexColumn}>
          <div className={styles.whiteFlexRow3}>
            <img src={m.img} alt={m.name} className={styles.image3} />
            <div className={styles.flexColumn7}>
              <div className={styles.paragraph7}>
                {m.name}
                {
                  "                                                                            "
                }
                ksh.{m.price} per k.g
                <br />
                <div className={styles.paragraph2}>
                  {m.description}
                  <br />
                </div>
                <div className={styles.text2}>
                  <br />
                  <br />
                </div>
              </div>
              <div className={styles.login}>
                <div className={styles.mahoganyFlexColumn}>
                  <button onClick={handleOrderItems} className={styles.text3}>
                    ORDER HERE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div
      key={restaurant.id}
      className={styles.flexColumn}
      style={{ background: "grey" }}>
      <h2>{restaurant.name}</h2>
      <h3>{restaurant.location}</h3>
      <h3>{restaurant.review}</h3>
      {menuItems}
    </div>
  );
}

export default Restaurant;
