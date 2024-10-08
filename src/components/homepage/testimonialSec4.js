import React, { useState, useEffect, useRef, useCallback } from 'react';
import axiosInstance from '../../Axios/axios_instance'; // Import the Axios instance
import styles from '../../styles/homepageStyle/testimonialSec4.module.css';

const TestimonialCard = ({ details, name, designation, company, image }) => {
  return (
    <div className={styles.cardContent}>
      <div className={styles.box1} />
      <div className={styles.box2} />
      <div className={styles.box3} />
      <img src={image} alt={`${name} - ${designation} at ${company}`} className={styles.authorImage} />
      <div className={styles.testimonialText}>{details}</div>
      <div>
          <h3 className={styles.authorName}>{name}</h3>
          <p className={styles.authorInfo}>{designation}, {company}</p>
      </div>
    </div>
  );
};

const TestimonialSec4 = () => {
  const [testimonials, setTestimonials] = useState([]); // State to store testimonials
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const testimonialListRef = useRef(null);
  
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axiosInstance.get('/testimonial');
        setTestimonials(response.data); // Set fetched testimonials
        console.log('Fetched Testimonials:', response.data); // Log the testimonials to the console
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials(); // Call the function to fetch data
  }, []);

  // Clone testimonials for seamless transition
  const clonedTestimonials = [...testimonials, ...testimonials.slice(0, 3)];
  const testimonialsCount = testimonials.length;

  // Handle next card
  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, []);

  // Handle previous card
  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Auto slide every 3 seconds
    return () => clearInterval(interval);
  }, [handleNext]);

  useEffect(() => {
    if (testimonialListRef.current) {
      const container = testimonialListRef.current;
      const cardWidth = container.firstChild ? container.firstChild.offsetWidth + 16 : 0; // Include margin
      container.style.transition = isTransitioning ? 'transform 0.7s ease-out' : 'none';
      container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

      // Reset to the real first card after sliding through the clone
      if (currentIndex === testimonialsCount) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(0); // Reset to the original first card
        }, 500); // Time should match the CSS transition duration
      }

      // Reset to the real last card when going back from cloned beginning
      if (currentIndex === -1) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(testimonialsCount - 1); // Jump to the last card in the original list
        }, 500); // Time should match the CSS transition duration
      }
    }
  }, [currentIndex, testimonialsCount, isTransitioning]);

  return (
    <section className={styles.testimonialSection}>
      <img src={`${process.env.PUBLIC_URL}/assets/grass_shadow.png`} alt='grass' className={styles.grass} />
      <h3 className={styles.toptitle}>Testimonial</h3>

      <div className={styles.cardlistcontainer}>
        <div className={styles.testimonialList} ref={testimonialListRef}>
          {clonedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <div className={`${styles.arrowContainer} ${styles.leftArrow}`} onClick={handlePrev}>
        <img loading="lazy" src={`${process.env.PUBLIC_URL}/assets/left_arrow.svg`} alt="Previous" />
      </div>
      {/* Right Arrow */}
      <div className={`${styles.arrowContainer} ${styles.rightArrow}`} onClick={handleNext}>
        <img loading="lazy" src={`${process.env.PUBLIC_URL}/assets/right_arrow.svg`} alt="Next" />
      </div>
    </section>
  );
};

export default TestimonialSec4;
