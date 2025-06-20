import styles from './CSS/LoginSignup.module.css';

const LoginSignup = () => {
  return (
    <div className={styles.loginSignup}>
      <div className={styles.loginsignup_container}>
        <h2>Sign Up</h2>
        <div className={styles.loginsignup_fields}>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Adress' />
          <input type="password" placeholder='Password' />
        </div>
        <button>
          Continue
        </button>
        <p className={styles.loginsignup_login}>Already have an account? <span>Login Here</span> </p>
        <div className={styles.loginsignup_agree}>
          <input type="checkbox" name='' id='' />
          <p>By continuing, you agree to our Terms of Use and Privacy Policy. </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
