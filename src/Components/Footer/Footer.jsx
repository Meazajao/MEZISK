import styles from './Footer.module.css';
import footerLogo from '../../Assets/logo.png';
import instagramIcon from '../../Assets/instagram_icon.png';
import pinterestIcon from '../../Assets/pinterest_icon.png';
import whatsappIcon from '../../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.logoSection}>
          <img src={footerLogo} alt="MEZISK Logo" className={styles.logoImage} />
          <p>MEZISK</p>
        </div>

        <ul className={styles.navLinks}>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className={styles.socials}>
          <img src={instagramIcon} alt="Instagram" />
          <img src={pinterestIcon} alt="Pinterest" />
          <img src={whatsappIcon} alt="WhatsApp" />
        </div>
      </div>

      <div className={styles.footerBottom}>
        <hr />
        <p>© 2025 MEZISK. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
