import React from 'react';
import styles from '../../styles/UserStyle/VenusLoginStyle.module.css';

function VenusLogin() {
  return (
    <main className={styles.loginContainer}>
      <section className={styles.loginCard}>
        <div className={styles.cardContent}>
          <div className={styles.imageColumn}>
            <img 
              loading="lazy" 
              src="/assets/venusloginimg.svg" 
              className={styles.loginImage} 
              alt="Venus Premium login visual"
            />
          </div>
          <div className={styles.formColumn}>
            <form className={styles.loginForm}>
              <header className={styles.formHeader}>
                <p className={styles.headerText}>Continue with your</p>
                <p className={styles.premiumText}>Venus Premium
                <img src={`${process.env.PUBLIC_URL}/assets/premium.png`} alt="Premium Icon" className={styles.premiumIcon} />
                </p>
              </header>
              <label htmlFor="emailInput" className={styles.inputLabel}>Email or Username:</label>
              <input 
                type="text" 
                id="emailInput" 
                className={styles.inputField} 
                aria-label="Enter your email or username"
              />
              <label htmlFor="passwordInput" className={styles.inputLabel}>Password:</label>
              <input 
                type="password" 
                id="passwordInput" 
                className={styles.inputField} 
                aria-label="Enter your password"
              />
              <button type="submit" className={styles.loginButton}>Login</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default VenusLogin;
