import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from '../../styles/homepageStyle/testimonialSec4.module.css';

const testimonials = [
  {
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    name: "Name Name Name",
    designation: "Designation",
    company: "Company name",
    imageSrc: "/assets/tushi.png",
  },
  {
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    name: "Name Name Name",
    designation: "Designation",
    company: "Company name",
    imageSrc: "/assets/biddya.png"
  },
  {
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    name: "Name Name Name",
    designation: "Designation",
    company: "Company name",
    imageSrc: "/assets/siam.png"
  },
  {
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    name: "Name Name Name",
    designation: "Designation",
    company: "Company name",
    imageSrc: "/assets/biddya.png"
  },
  {
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    name: "Name Name Name",
    designation: "Designation",
    company: "Company name",
    imageSrc: "/assets/siam.png"
  }
];

const TestimonialCard = ({ content, name, designation, company, imageSrc }) => {
  return (
    <div className={styles.cardContent}>
      <img src={imageSrc} alt={`${name} - ${designation} at ${company}`} className={styles.authorImage} />
      <div className={styles.box1} />
      <div className={styles.box2} />
      <div className={styles.box3} />
      <p className={styles.testimonialText}>{content}</p>
      <h3 className={styles.authorName}>{name}</h3>
      <p className={styles.authorInfo}>{designation}, {company}</p>
    </div>
  );
};

const TestimonialSec4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialListRef = useRef(null);
  const testimonialsCount = testimonials.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsCount);
  }, [testimonialsCount]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsCount) % testimonialsCount);
  }, [testimonialsCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [handleNext]);

  useEffect(() => {
    if (testimonialListRef.current) {
      const container = testimonialListRef.current;
      const cardWidth = container.firstChild.offsetWidth + 16; // Including margin
      container.style.transition = 'transform 0.5s ease-out';
      container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  }, [currentIndex]);

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.shadowImageContainer}>
        <img loading="lazy" src={`${process.env.PUBLIC_URL}/assets/grass_shadow.png`} alt="Error Loading" className={styles.shadowImage} />
      </div>
      
      <h3 className={styles.toptitle}>Testimonial</h3>

      <div className={styles.cardlistcontainer}>
        <div className={styles.testimonialList} ref={testimonialListRef}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>

      <div className={`${styles.arrowContainer} ${styles.leftArrow}`} onClick={handlePrevious}>
        <img loading="lazy" src={`${process.env.PUBLIC_URL}/assets/left_arrow.svg`} alt="Previous" />
      </div>
      <div className={`${styles.arrowContainer} ${styles.rightArrow}`} onClick={handleNext}>
        <img loading="lazy" src={`${process.env.PUBLIC_URL}/assets/right_arrow.svg`} alt="Next" />
      </div>
    </section>
  );
};

export default TestimonialSec4;
