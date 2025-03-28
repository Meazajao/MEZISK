import styles from './Newsletter.module.css';

const NewsLetter = () => {
  return (
    <div className={styles.newsletter}>
      <h2>Get Exclusive Offers On Your Email</h2>
      <p>Subscribe to our newsletter and stay updated</p>
      
      <div className={styles.form}>
        <input type="email" placeholder="Your Email ID" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
