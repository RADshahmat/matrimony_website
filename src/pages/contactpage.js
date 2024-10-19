import React from "react";
import Header from '../components/header'; 
import Footer from '../components/footer'; 
import Contact from '../components/contact';



function MatchListPage() {

    return (
        <div>
            <Header />
                <div className="main-content" style={{marginTop: "100px"}}>
                    <Contact />
                </div>
            <Footer />
        </div>
    );
}

export default MatchListPage;
