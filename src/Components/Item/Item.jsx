import styles from './Item.module.css';

const Item = ({ image, name, new_price, old_price }) => {
  return (
    <div className={styles.item}>
      <img src={image} alt={name} />
      <p>{name}</p>
      
      <div className={styles.item_prices}>
        <div className={styles.item_price_new}>
          ${new_price}
        </div>
        <div className={styles.item_price_old}>
          ${old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
