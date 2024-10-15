import React from "react";
import Header from '../components/header'; 
import Footer from '../components/footer'; 
import MatchList from '../components/User/matchList';



function MatchListPage() {

    return (
        <div>
            <Header />
                <div className="main-content">
                    <MatchList />
                </div>
            <Footer />
        </div>
    );
}

export default MatchListPage;
