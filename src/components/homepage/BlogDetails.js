import React from 'react';
import Header from '../header'; 
import Footer from '../footer'; 
import { useLocation, useParams } from 'react-router-dom';
import styles from '../../styles/homepageStyle/blogDetails.module.css';

const BlogDetails = () => {
  const { state } = useLocation();
  const { id } = useParams();

  if (!state || !state.blog) {
    return <p>Blog details not found. Please go back and select a blog.</p>;
  }

  const { blog } = state;

  return (
    <div>
                <Header />
        <div className={styles.pageContainer}>
            <div className={styles.blogCard}>
                {/* Hero Section */}
                <div className={styles.heroSection}>
                <img src={blog.image} alt={blog.title} className={styles.heroImage} />
                <div className={styles.overlay}>
                    <h1 className={styles.title}>{blog.title}</h1>
                </div>
                </div>

                {/* Content Section */}
                <div className={styles.contentSection}>
                    <p className={styles.textContent}>{blog.details}</p>
                </div>

            </div>
        </div>
        <Footer />
    </div>
    
  );
};

export default BlogDetails;
