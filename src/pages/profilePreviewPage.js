import React from "react";
import Header from '../components/header'; 
import Footer from '../components/footer'; 
import ProfileView from '../components/User/profilePreview';


function ProfileViewPage() {

    return (
        <div>
            <Header />
                <div className="main-content">
                    <ProfileView />
                </div>
            <Footer />
        </div>
    );
}

export default ProfileViewPage;
