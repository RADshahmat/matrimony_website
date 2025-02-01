import React, { useState, useEffect } from 'react';
import styles from '../styles/footer.module.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import axiosInstance from "../Axios/axios_instance"
import { toast,ToastContainer } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const [companyDetails, setCompanyDetails] = useState(null);
  const [serviceVisibility, setServiceVisibility] = useState([false, false, false, false]);
  const [linkVisibility, setLinkVisibility] = useState([false, false, false, false, false]);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    query: '',
  });

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await axiosInstance.get('/company_details');
        setCompanyDetails(response.data);
      } catch (error) {
        console.error('Error fetching company details:', error);
      }
    };
    fetchCompanyDetails();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.post('/enquire', {
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        query: formData.query,
      });

      if (response.status === 200) {
        //console.log(response.data)
        toast.success('Enquiry submitted successfully!');
        setFormData({name:'',phoneNumber:'',query:''});
      } else {
        toast.error('Something went wrong, please try again.');
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      toast.error('Failed to submit enquiry.');
    }
  };


  const toggleServiceVisibility = (index) => {
    setServiceVisibility((prev) => 
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  const toggleLinkVisibility = (index) => {
    setLinkVisibility((prev) => 
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  // Content for "Our Services"
  const serviceQuestions = [
    "What is a wedding platform?",
    "How does it simplify wedding planning?",
    "Can I link my wedding registry?",
    "Is there a cost for using it?"
  ];

  const serviceAnswers = [
    "A wedding platform is an online tool that helps couples manage all aspects of their wedding planning in one place.",
    "It simplifies wedding planning by offering features like guest list management, budget tracking, and vendor connections.",
    "Yes, most wedding platforms allow you to integrate and link your wedding registry for guests to view and purchase gifts.",
    "While many wedding platforms are free, some may offer premium features for a cost, depending on the platform."
  ];

  // Content for "Useful Links"
  const linkQuestions = [
    "Contact Us",
    "Pricing Services",
    "Our Team",
    "Blog",
    "Event Gallery"
  ];

  const linkAnswers = [
    "You can reach out to us via our contact form or call our customer service line for assistance.",
    "Our pricing services vary depending on your needs. Check out the pricing page for detailed packages.",
    "Meet the amazing team behind our wedding platform by visiting the 'Our Team' page.",
    "Explore our blog for the latest trends, tips, and inspiration on wedding planning.",
    "View our gallery of beautiful weddings hosted through our platform in the 'Event Gallery' section."
  ];

  return (
    <footer className={styles.container}>
      <div className={styles.upperfooter}>
        <div className={styles.footersection}>
          <h3 className={styles.footerTitle}>About Us</h3>
          <p>Toast father bridesmaid forever happy salad open bar open bar magic church. First aisle cheers</p>
          <div className={styles.socialLinks}>
            {companyDetails?.facebook_link && (
              <a href={companyDetails.facebook_link} className={styles.iconLink} target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
            )}
            {companyDetails?.twitter_link && (
              <a href={companyDetails.twitter_link} className={styles.iconLink} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            )}
            {companyDetails?.linkedin_link && (
              <a href={companyDetails.linkedin_link} className={styles.iconLink} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            )}
            {companyDetails?.youtube_link && (
              <a href={companyDetails.youtube_link} className={styles.iconLink} target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            )}
          </div>
        </div>

        {/* Our Services Section */}
        <div className={styles.footersection}>
          <h3 className={styles.footerTitle}>Our Services</h3>
          {serviceQuestions.map((item, index) => (
            <div key={index} className={styles.answer}>
              <p onClick={() => toggleServiceVisibility(index)}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/footerarrow.svg`}
                  alt="arrow"
                  className={`${styles.arrow} ${serviceVisibility[index] ? styles.arrowDown : ''}`}
                />
                {item}
              </p>
              {serviceVisibility[index] && <p className={styles.expandedText}>{serviceAnswers[index]}</p>}
            </div>
          ))}
        </div>

        {/* Useful Links Section */}
        <div className={styles.footersection}>
          <h3 className={styles.footerTitle}>Useful Links</h3>
          {linkQuestions.map((item, index) => (
            <div key={index} className={styles.answer}>
              <p onClick={() => toggleLinkVisibility(index)}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/footerarrow.svg`}
                  alt="arrow"
                  className={`${styles.arrow} ${linkVisibility[index] ? styles.arrowDown : ''}`}
                />
                {item}
              </p>
              {linkVisibility[index] && <p className={styles.expandedText}>{linkAnswers[index]}</p>}
            </div>
          ))}
        </div>

        {/* Enquire Section */}
        <div className={styles.formSection}>
      <h3 className={styles.footerTitle}>Enquire</h3>
      <input
        type="text"
        placeholder="First name here"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="11 Digit Phone Number"
        value={formData.phoneNumber}
        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
      />
      <textarea
        placeholder="Type your message here..."
        className={styles.messageInput}
        value={formData.query}
        onChange={(e) => setFormData({ ...formData, query: e.target.value })}
      />
      <button className={styles.sendmsgbutton} onClick={handleSubmit}>
        Send Message
      </button>
    </div>
      </div>

      <div className={styles.divider} />
      <div className={styles.footerbottom}>
        <p>&copy; 2024 Butterfly Matrimonial Ltd. All Rights Reserved.<br />A Concern of Butterfly Lighthouse.</p>
      </div>
      <ToastContainer/>
    </footer>
  );
};

export default Footer;
