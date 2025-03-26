import styles from './Item.module.css'

const Item = (props) => {
  return (
    <div className={styles.item}>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className={styles.item_prices}>
        <div className={styles.item_price_new}>
            ${props.new_price}
        </div>
        <div className={styles.item_price_old}>
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
