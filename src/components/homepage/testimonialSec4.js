import React, { useState, useEffect } from 'react';
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
    imageSrc: "assets/siam.png"
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
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={styles.testimonialSection}>
        <div className={styles.shadowImageContainer}>
            <img loading="grass_shadow" src={`${process.env.PUBLIC_URL}/assets/grass_shadow.png`}  alt="Error Loading" className={styles.shadowImage} />
        </div>
        <h3 className={styles.toptitle}>Testimonial</h3>
      <div className={styles.testimonialList}>
        {isMobile ? (
          <TestimonialCard {...testimonials[currentTestimonial]} />
        ) : (
          testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))
        )}
      </div>
      {isMobile && (
        <div className={styles.mobileControls}>
          <button onClick={prevTestimonial} className={styles.controlButton}>Previous</button>
          <button onClick={nextTestimonial} className={styles.controlButton}>Next</button>
        </div>
      )}
    </section>
  );
};

export default TestimonialSec4;