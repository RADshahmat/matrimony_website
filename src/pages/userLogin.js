import React from "react";
import Header from '../components/header'; 
import Footer from '../components/footer'; 
import VenusLogin from '../components/User/VenusLogin';


function UserLoginPage() {

    return (
        <div>
            <Header />
                <div className="main-content">
                    <VenusLogin />
                </div>
            <Footer />
        </div>
    );
}

export default UserLoginPage;
