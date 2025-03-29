import React from 'react';
import styles from './Hero.module.css';
import handIcon from '../../Assets/hand_icon.png';
import arrowIcon from '../../Assets/arrow.png';
import heroImage from '../../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_left}>
        <h2>NEW ARRIVALS ONLY</h2>

        <div className={styles.hero_text}>
          <div className={styles.hero_hand_icon}>
            <p>New</p>
            <img src={handIcon} alt="Hand icon" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>

        <button className={styles.hero_latest_btn}>
          <span>Latest Collection</span>
          <img src={arrowIcon} alt="Arrow icon" />
        </button>
      </div>

      <div className={styles.hero_right}>
        <img
          src={heroImage}
          alt="Girl with grey pants and sunglasses"
          className={styles.hero_image}
        />
      </div>
    </div>
  );
};

export default Hero;
