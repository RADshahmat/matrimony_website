import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from '../Axios/axios_instance';
import Header from '../components/header'; 
import Footer from '../components/footer'; 
import BioDataPage1 from '../components/Bio_data/page1';
import BioDataPage2 from '../components/Bio_data/page2';
import BioDataPage3 from '../components/Bio_data/page3';
import styles from '../styles/Bio_dataStyle/cvpreview.module.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function CVpreview() {
    const { id } = useParams(); // Get the ID from the URL
    const [userData, setUserData] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(`/users/${id}`);
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [id]);

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
        // Temporarily render all pages to the DOM
        setCurrentIndex(0); // Set to the first page index for rendering
        const doc = new jsPDF("portrait", "mm", "a4");

        for (let i = 0; i < pages.length; i++) {
            setCurrentIndex(i); // Show each page one by one
            await new Promise(resolve => setTimeout(resolve, 500)); // Wait for the page to render

            const pageElement = document.getElementById(`cv-page-${i + 1}`);
            if (!pageElement) continue;

            const canvas = await html2canvas(pageElement, { scale: 2 });
            const imgData = canvas.toDataURL('image/png');
            let imgWidth = 210; // A4 width in mm
            const pageHeight = 297; // A4 height in mm
            let imgHeight = (canvas.height * imgWidth) / canvas.width;

            if (imgHeight > pageHeight) {
                const ratio = pageHeight / imgHeight;
                imgWidth *= ratio;
                imgHeight = pageHeight;
            }

            if (i > 0) doc.addPage(); // Add new page after the first one
            doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        }

        // Save the PDF
        doc.save('cv-preview.pdf');

        // Restore the currentIndex back to original position
        setCurrentIndex(0);
    };

    return (
        <div>
            <Header />
            <div className={styles.CVpreview}>
                <p className={styles.pagetitle}>Preview Your CV</p>
                <div className={styles.pagecontainer} style={{flexWrap:'wrap'}}>
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
