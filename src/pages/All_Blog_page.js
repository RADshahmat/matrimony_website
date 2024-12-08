import React, { useState, useEffect } from 'react';
import Header from '../components/header'; 
import Footer from '../components/footer'; 
import { Link } from 'react-router-dom';
import axiosInstance from '../Axios/axios_instance'; 
import styles from '../styles/homepageStyle/storiesNblogsSec6.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllBlogsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: 'ease-in-out', 
      once: false, 
      mirror: true, 
      offset: 120, 
    });
  }, []);

  const [blogs, setBlogs] = useState([]);

  // Fetch blog data on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get('/blogs');
        setBlogs(response.data);
        AOS.refresh();
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogs();
  }, []);

  // Helper function to truncate text by characters
  const truncateText = (text, charLimit) => {
    if (text.length > charLimit) {
      return text.slice(0, charLimit) + '...';
    }
    return text;
  };

  return (
    <div>
                 <Header />
        <section className={styles.container}>
        <h3 className={styles.sectionTitle}>All Blogs</h3>
        <div className={styles.blogscardContainer}>
            {blogs.map((post) => (
            <article key={post.id} className={styles.card}>
                <div className={styles.cardContent}>
                <div className={styles.imageWrapper}>
                    <img src={`${post.image}`} alt={post.title} className={styles.image} />
                    <div className={styles.category}>
                    <span className={styles.categoryTag}>Wedding</span>
                    </div>
                </div>
                <div className={styles.textContent}>
                    <div className={styles.pinType}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/pin.svg`}
                        alt="pin"
                        className={styles.pin}
                    />
                    <span className={styles.pintext}>Wedding</span>
                    </div>
                    <h2 className={styles.title}>{post.title}</h2>
                    <p className={styles.excerpt}>
                    {truncateText(post.details, 100)} {/* Limit to 100 characters */}
                    </p>
                    <Link 
                    to={`/blogs/${post.id}`} 
                    state={{ blog: post }} 
                    className={styles.readMore}
                    >
                    Read More
                    </Link>
                </div>
                </div>
            </article>
            ))}
        </div>
        </section>
    <Footer />
    </div>
    
  );
};

export default AllBlogsPage;
