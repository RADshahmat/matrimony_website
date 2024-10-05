import React, { useState, useEffect } from 'react';
import axiosInstance from '../../Axios/axios_instance'; // Import the Axios instance
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'; // React Icons for arrows
import styles from '../../styles/homepageStyle/storiesNblogsSec6.module.css';

const BlogPostsSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3); // Default to showing 3 cards

  // Adjust number of visible cards based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1); // Show 1 card on mobile
      } else {
        setCardsToShow(3); // Show 3 cards on desktop
      }
    };

    window.addEventListener('resize', updateCardsToShow);
    updateCardsToShow(); // Set initial value

    return () => {
      window.removeEventListener('resize', updateCardsToShow);
    };
  }, []);

  // Fetch blog data on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get('/blogs'); // Replace with your backend URL
        setBlogs(response.data);
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

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? blogs.length - cardsToShow : prevIndex - cardsToShow
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow >= blogs.length ? 0 : prevIndex + cardsToShow
    );
  };

  // Calculate the visible blogs based on the current index
  const visibleBlogs = blogs.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <section className={styles.container}>
      <h3 className={styles.sectionTitle}>Stories And Blogs</h3>
      <div className={styles.sliderContainer}>
        <MdArrowBackIos className={styles.arrowIcon} onClick={handlePrev} />
        <div className={styles.blogscardContainer}>
          {visibleBlogs.map((post) => (
            <article key={post.id} className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.imageWrapper}>
                  <img src={post.image} alt={post.title} className={styles.image} />
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
                    {truncateText(post.details, 100)} {/* Limit to 200 characters */}
                  </p>
                  <a href="google.com" className={styles.readMore}>
                    Read More
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <MdArrowForwardIos className={styles.arrowIcon} onClick={handleNext} />
      </div>
    </section>
  );
};

export default BlogPostsSection;
