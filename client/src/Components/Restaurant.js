import React from 'react'
import styles from '../NewRootRootRoot1.module.css'

function Restaurant({restaurant}){

    const menuItems = restaurant.menus.map(m =>{
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
                    <div className={styles.text3}>Add</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>
        )
    }) 
    return(
        <div key = {restaurant.id} className={styles.flexColumn} style ={
            {background:'grey'}
        }>
            <h2>{restaurant.name}</h2>
            <h3>{restaurant.location}</h3>
            <h3>{restaurant.review}</h3>
            {menuItems}
        </div>
    )

}

export default Restaurant;