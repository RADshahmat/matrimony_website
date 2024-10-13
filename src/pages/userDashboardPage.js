import React from "react";
import Header from '../components/header'; 
import Footer from '../components/footer'; 
import UserDashboard from '../components/User/userDashboard';
import io from "socket.io-client";

function UserDashboardPage() {

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

export default UserDashboardPage;
