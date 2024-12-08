import React, { useState, useEffect } from 'react';
import styles from '../../styles/UserStyle/VenusLoginStyle.module.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Axios/authContext';
import axiosInstance from '../../Axios/axios_instance';

function VenusLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isBlocked, setIsBlocked] = useState(false);
  const [timer, setTimer] = useState(0);

  const { login } = useAuth();
  const navigate = useNavigate();

  const BLOCK_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds
  const ATTEMPT_LIMIT = 5;
  const ATTEMPT_STORAGE_KEY = 'venuslogin_attempts';
  const BLOCK_STORAGE_KEY = 'venuslogin_blocked_until';

  useEffect(() => {
    const checkBlockStatus = () => {
      const blockUntil = localStorage.getItem(BLOCK_STORAGE_KEY);
      if (blockUntil) {
        const expiryTime = new Date(blockUntil).getTime();
        const currentTime = Date.now();
        if (currentTime < expiryTime) {
          setIsBlocked(true);
          setTimer(expiryTime - currentTime);
        } else {
          localStorage.removeItem(BLOCK_STORAGE_KEY);
          localStorage.removeItem(ATTEMPT_STORAGE_KEY);
        }
      }
    };

    checkBlockStatus();

    const interval = setInterval(() => {
      if (isBlocked) {
        setTimer((prev) => {
          if (prev <= 1000) {
            clearInterval(interval);
            setIsBlocked(false);
            localStorage.removeItem(BLOCK_STORAGE_KEY);
            localStorage.removeItem(ATTEMPT_STORAGE_KEY);
            return 0;
          }
          return prev - 1000;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isBlocked]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    if (isBlocked) {
      setError('You are temporarily blocked. Please try again later.');
      return;
    }

    try {
      const response = await axiosInstance.post('/user_login', {
        username: email,
        password,
      });

      const token = response.data.authorization;
      localStorage.setItem('butterfly_user_session_token', token);

      // Clear failed attempts on successful login
      localStorage.removeItem(ATTEMPT_STORAGE_KEY);
      await login();
      navigate('/userDashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');

      // Increment failed attempts
      const attempts = JSON.parse(localStorage.getItem(ATTEMPT_STORAGE_KEY)) || 0;
      const newAttempts = attempts + 1;
      localStorage.setItem(ATTEMPT_STORAGE_KEY, JSON.stringify(newAttempts));

      if (newAttempts >= ATTEMPT_LIMIT) {
        const blockUntil = new Date(Date.now() + BLOCK_DURATION).toISOString();
        localStorage.setItem(BLOCK_STORAGE_KEY, blockUntil);
        setIsBlocked(true);
        setTimer(BLOCK_DURATION);
      }
    }
  };

  // Format timer to mm:ss
  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
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
                disabled={isBlocked}
              />

              <label htmlFor="passwordInput" className={styles.inputLabel}>Password:</label>
              <input 
                type="password" 
                id="passwordInput" 
                className={styles.inputField} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Enter your password"
                disabled={isBlocked}
              />

              <button 
                type="submit" 
                className={styles.loginButton} 
                disabled={isBlocked}
              >
                {isBlocked ? `Blocked (${formatTime(timer)})` : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default VenusLogin;
