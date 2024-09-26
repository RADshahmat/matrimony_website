import React,{useState,useEffect} from 'react';
import styles from '../../styles/homepageStyle/introSec1.module.css'; 
import { Link } from 'react-router-dom';
import axiosInstance from '../../Axios/axios_instance';

const IntroSecHome = () => {
const [intro_text,setIntroText]=useState('ytcxytcuyviugyh');

useEffect(() => {
     
}, []);

const getText=async()=>{

   // const response=await axiosInstance.get(`/get_intro_text`);
   // setIntroText(response.data.text);

}

    return (
        <div className={styles.container}>
            <img className={styles.top_cover} src={`https://backend.butterfly.hurairaconsultancy.com/uploads/landingCoverImage.webp`} alt='Cover' />

            <section className={styles.intro} >
                <div className={styles.introframe} data-aos="flip-right">
                    <div className={styles.intro_upper}>
                        <div className={styles.intro_heading}>Butterfly Matrimony</div>
                        <div className={styles.subheading_intro} >Your perfect matchmaker</div>
                    </div>                    
                    <div className={styles.matrimony_desc}>
                        Experience personalized and confidential matchmaking with Butterfly Matrimonial. Our expert consultants focus on your preferences, family structure, and personality to find your perfect soulmate. With comprehensive pre- and post-marriage counselling services, we help you build and maintain a long-lasting relationship. Start your journey to love with Butterfly Matrimonial – your perfect matchmaker!
                    </div>
                    <div className={styles.intro_footer}><span className={styles.footer_spn}>#1</span> MATRIMONY</div>
                </div>
            </section>

            <section className={styles.biodata} >
                <div className={styles.contentWrapper}>
                    <div className={styles.textColumn}>
                            <h1 className={styles.title}>
                                Effortlessly <br /> Create Your Bio-Data Today!
                            </h1>
                            <Link to={'/createCV'} className={styles.ctaButton} >Get Started</Link>
                    </div>
                    <div className={styles.imageColumn} >
                        <img
                            loading="lazy" src={`${process.env.PUBLIC_URL}/assets/biodataform.png`}
                            alt="Bio-Data Creation Illustration"
                            className={styles.bioImage}
                            
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IntroSecHome;
