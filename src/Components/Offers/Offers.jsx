import styles from './Offers.module.css';
import exclusive_image from '../../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className={styles.offers}>
      <div className={styles.offers_left}>
        <h2>Exclusive</h2>
        <h2>Offers For You</h2>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>Check Now</button>
      </div>

      <div className={styles.offers_right}>
        <img src={exclusive_image} alt="Exclusive offer product" />
      </div>
    </div>
  );
};

export default Offers;
