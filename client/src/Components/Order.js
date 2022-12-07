import React from 'react'
import { useState } from 'react'
import styles from './Order.css'

function Order(){
    const order = {
        id: 18,
        name: " mbuzi choma",
        description: "mbuzi marinated flavorful herb and spice marinade!",
        restaurant_id: 1,
        price: 600,
        img: "https://file.rendit.io/n/g5PgsaWGTl14WWkkpaG3.png",
        created_at: "2022-12-07T05:51:28.003Z",
        updated_at: "2022-12-07T05:51:28.003Z"
    }

    const orderCard = order.map(m =>{
        const {restaurant_id, id, price} = m
        return(
            <div key = {m.id}>
                
                <div className={styles.flexColumn}>
                <div className={styles.whiteFlexRow3}>
                <img
                src={m.img}
                alt = {m.name}
                className={styles.image3}
                />
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
             <button className={styles.text3}>DELETE</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>
        )
    })

    return(
        {orderCard}
    )
 }
export default Order;