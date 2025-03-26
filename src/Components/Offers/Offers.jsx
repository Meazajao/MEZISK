import styles from './Offers.module.css'
import exclusive_imgae from '../../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className={styles.offers}>
      <div className={styles.offers_left}>
        <h2>Exclusive</h2>
        <h2>Offers For You</h2>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className={styles.offers_right}>
        <img src={exclusive_imgae} alt="" />
      </div>
    </div>
  )
}

export default Offers
