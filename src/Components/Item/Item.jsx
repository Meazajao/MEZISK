import styles from './Item.module.css';

const Item = ({ image, name, new_price, old_price }) => {
  return (
    <div className={styles.item}>
      <img src={image} alt={name} className={styles.image} />
      <p>{name}</p>

      <div className={styles.item_prices}>
        <span className={styles.item_price_new}>${new_price}</span>
        <span className={styles.item_price_old}>${old_price}</span>
      </div>
    </div>
  );
};

export default Item;
