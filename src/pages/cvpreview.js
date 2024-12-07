import React, { useState, useEffect } from "react";
import { Link, useParams,useLocation } from "react-router-dom";
import axiosInstance from '../Axios/axios_instance';
import Header from '../components/header'; 
import Footer from '../components/footer'; 
import BioDataPage1 from '../components/Bio_data/page1';
import BioDataPage2 from '../components/Bio_data/page2';
import BioDataPage3 from '../components/Bio_data/page3';
import styles from '../styles/Bio_dataStyle/cvpreview.module.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FaArrowLeft } from 'react-icons/fa';

function CVpreview() {
    const location = useLocation();
    const { userId } = location.state || {};
    const [userData, setUserData] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(`/users/${userId}`);
                //console.log(response.data,"kaka plz work")
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [userId]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const pages = [
        { component: <BioDataPage1 key="page1" userData={userData} />, pageIndex: 1 },
        { component: <BioDataPage2 key="page2" userData={userData} />, pageIndex: 2 },
        { component: <BioDataPage3 key="page3" userData={userData} />, pageIndex: 3 }
    ];

    const visiblePages = isMobile
        ? pages.slice(currentIndex, currentIndex + 1) 
        : pages.slice(currentIndex, currentIndex + 2); 

    const handleNext = () => {
        if (currentIndex + (isMobile ? 1 : 2) < pages.length) {
            setCurrentIndex(currentIndex + (isMobile ? 1 : 2));
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - (isMobile ? 1 : 2));
        }
    };

    const downloadPDF = async () => {
        setCurrentIndex(0);
        const doc = new jsPDF("portrait", "mm", "a4");
    
        for (let i = 0; i < pages.length; i++) {
            setCurrentIndex(i); 
            await new Promise(resolve => setTimeout(resolve, 500)); // Wait for the page to render
    
            const pageElement = document.getElementById(`cv-page-${i + 1}`);
            if (!pageElement) continue;
    
    
            const componentElement = pageElement.querySelector('[data-component]'); 
    
            if (!componentElement) continue; 
    
            componentElement.style.transform = "scale(1)";
            componentElement.style.transformOrigin = "top center";
    
            const canvas = await html2canvas(componentElement, { scale: 2 });
            const imgData = canvas.toDataURL("image/png");
    
            let imgWidth = 210; 
            const pageHeight = 297; 
            let imgHeight = (canvas.height * imgWidth) / canvas.width;
    
            if (imgHeight > pageHeight) {
                const ratio = pageHeight / imgHeight;
                imgWidth *= ratio;
                imgHeight = pageHeight;
            }
    
            if (i > 0) doc.addPage();
            doc.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    
            componentElement.style.transform = "";
            componentElement.style.transformOrigin = "";
        }
    
        doc.save("cv-preview.pdf");
        setCurrentIndex(0); 
    };
    

    return (
        <div>
            <Header />
            <div className={styles.CVpreview}>
                <p className={styles.pagetitle}>Preview Your CV</p>
                <div className={styles.pagecontainer} >
                    {visiblePages.map(({ component, pageIndex }) => (
                        <div key={pageIndex} id={`cv-page-${pageIndex}`} className={styles.pageWrapper}>
                            {component}
                            <div className={styles.pageIndex}>Page {pageIndex}</div>
                        </div>
                    ))}
                    {currentIndex > 0 && (
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/left_arrow.svg`}
                            alt="Previous"
                            className={styles.arrowLeft}
                            onClick={handlePrev}
                        />
                    )}
                    {currentIndex + (isMobile ? 1 : 2) < pages.length && (
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/right_arrow.svg`}
                            alt="Next"
                            className={styles.arrowRight}
                            onClick={handleNext}
                        />
                    )}
                </div>
                    <div className={styles.buttonContainer}>
                    <Link to="/userdashboard" className={styles.downloadButton}>
                    <FaArrowLeft style={{ marginRight: '8px' }} /> Back to Dashboard
                        </Link>
                        <button className={styles.downloadButton} onClick={downloadPDF}>
                            Request Venus & Download
                        </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CVpreview;
