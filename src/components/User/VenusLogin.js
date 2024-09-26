import React, { useState,useEffect } from 'react';
import styles from '../../styles/UserStyle/VenusLoginStyle.module.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Axios/authContext';
import axiosInstance from '../../Axios/axios_instance';

function VenusLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
     
   }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      const response = await axiosInstance.post('/user_login', {
        username: email,
        password,
      });
  
      const token = response.data.authorization;
      localStorage.setItem('butterfly_user_session_token', token);
      
      await login(); 

      navigate('/userDashboard');
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
    }
  };

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
            <form className={styles.loginForm} onSubmit={handleSubmit}>
              <header className={styles.formHeader}>
                <p className={styles.headerText}>Continue with your</p>
                <p className={styles.premiumText}>
                  Venus Premium
                  <img src={`${process.env.PUBLIC_URL}/assets/premium.png`} alt="Premium Icon" className={styles.premiumIcon} />
                </p>
              </header>

              {/* Display error message if login fails */}
              {error && <p className={styles.errorMessage}>{error}</p>}

              <label htmlFor="emailInput" className={styles.inputLabel}>Email or Username:</label>
              <input 
                type="text" 
                id="emailInput" 
                className={styles.inputField} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Enter your email or username"
              />

              <label htmlFor="passwordInput" className={styles.inputLabel}>Password:</label>
              <input 
                type="password" 
                id="passwordInput" 
                className={styles.inputField} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
