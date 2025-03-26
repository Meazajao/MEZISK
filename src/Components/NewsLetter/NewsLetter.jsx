import styles from './NewsLetter.module.css'

const NewsLetter = () => {
  return (
    <div className={styles.newsletter}>
      <h2>Get Exclusive Offers On Your Email</h2>
      <p>Subscribe to our news letter and stay upated</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
