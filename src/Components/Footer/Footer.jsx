import styles from './Footer.module.css'
import footer_logo from '../../Assets/logo.png'
import instagram_icon from '../../Assets/instagram_icon.png'
import pintres_icon from '../../Assets/pintres_icon.png'
import whatsapp_icon from '../../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer-logo}>
        <img src={footer_logo} alt="" />
        <p>MEZISK</p>
      </div>
      <ul className={styles.footer-links}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={styles.footer_social_icon}>
        <div className={styles.footer_icon_container}>
            <img src={instagram_icon} alt="" />
        </div>
        <div className={styles.footer_icon_container}>
            <img src={pintres_icon} alt="" />
        </div>
        <div className={styles.footer_icon_container}>
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className={footer_copyright}>
        <hr />
        <p>Copyright @ 2025 - All Right Reserved . </p>
      </div>
    </div>
  )
}

export default Footer
