import React from "react";
import Header from '../components/header'; 
import Footer from '../components/footer'; 
import MatchList from '../components/User/matchList';
import UserDashboard from "../components/User/userDashboard";


function MatchListPage() {

    return (
        <div>
            <Header />
                <div className="main-content">
                    <UserDashboard />
                </div>
            <Footer />
        </div>
    );
}

export default MatchListPage;
