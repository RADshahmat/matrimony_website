import React from 'react';
import styles from '../../styles/homepageStyle/storiesNblogsSec6.module.css';


const blogPosts = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2700a5bc1ae895e3eadedb67d4bd4266b19b0470797815dd5e579b7dab9d8e21?placeholderIfAbsent=true&apiKey=68c669943f1543b88775d643f2be81f3",
    category: "Wedding",
    title: "Common Trends in Weddings",
    excerpt: "Common Trends in Indian Weddings Home Blog January 8, 2024 Wedding Aniket Joshi Ice cream tootsie roll liquorice chocolate cake…"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a090b364480866db00ef9855847212151487346da736bd65d2473d98bb05d716?placeholderIfAbsent=true&apiKey=68c669943f1543b88775d643f2be81f3",
    category: "Wedding",
    title: "Grand Weddings in Style",
    excerpt: "Grand Indian Weddings in Style Home Blog January 8, 2024 Wedding Aniket Joshi Ice cream tootsie roll liquorice chocolate cake…"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/582075cf958e713eda5b0d59ec88085030684d53934aa97138d91d293d6ae42b?placeholderIfAbsent=true&apiKey=68c669943f1543b88775d643f2be81f3",
    category: "Wedding",
    title: "Rich Rituals of Weddings",
    excerpt: "Rich Rituals of Indian Weddings Home Blog January 8, 2024 Wedding Aniket Joshi Ice cream tootsie roll liquorice chocolate cake…"
  }
];

const BlogPostCard = ({ image, category, title, excerpt }) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.image} />
          <div className={styles.category}>
            <span className={styles.categoryTag}>{category}</span>
          </div>
        </div>
        <div className={styles.textContent}>
          <div className={styles.pinType}>
            <img src={`${process.env.PUBLIC_URL}/assets/pin.svg`} alt="pin" className={styles.pin} />
            <span className={styles.pintext}>{category}</span>
          </div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.excerpt}>{excerpt}</p>
          <a href="#" className={styles.readMore}>Read More</a>
        </div>
      </div>
    </article>
  );
};


const BlogPostsSection = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.sectionTitle}>Stories And Blogs</h3>
      <div className={styles.blogscardContainer}>
        {blogPosts.map((post, index) => (
        <BlogPostCard key={index} {...post} />
      ))}
      </div>
      
    </section>
  );
};

export default BlogPostsSection;