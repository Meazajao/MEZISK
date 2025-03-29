import React, { useContext } from 'react'
import styles from './CSS/ShopCategory.module.css'
import { ShopContex } from '../Contex/ShopContex'
import dropdown_icon from '../Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
    const {all_products} = useContext(ShopContex)
  return (
    <div className={styles.shop_category}>
      <img src={props.banner} alt="" />
      <div className={styles.shopcategory_indexSort}>
        <p>
            <span>Showing 1-12</span> out of 3 products
        </p>
        <div className={styles.shopcategory_sort}>
            Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className={styles.shopvategory_products}>
        {all_products.map((item, i) => {
            if(props.category === item.category) {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else {
                return null;
            }
            })}
      </div>
    </div>
  )
}

export default ShopCategory
