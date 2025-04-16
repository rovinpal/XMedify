import React from "react";
import "./HomePage.css";
import Announcement from "../../Components/AnnouncementBar/AnnouncementBar";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Search from "../../Components/Search/Search";
import Offers from "../../Components/Offers/Offers";
import Footer from "../../Components/Footer/Footer";
import DownloadApp from "../../Components/DownloadApp/DownloadApp";
import FAQs from "../../Components/FAQs/FAQs";
import OurFamilies from "../../Components/OurFamilies/OurFamilies";
import Blogs from "../../Components/Blogs/Blogs";
import PatientCaring from "../../Components/PatientCaring/PatientCaring";
import Specialists from "../../Components/Specialists/Specialists";
import Specialization from "../../Components/Specialization/Specialization";


const MedHomePage = () => {

    
    return (
        <div className="container">
            <Announcement />

            <Navbar />

            <div style={{ position: "relative" }}>
                <Hero />
    
                <div style={{ position: "absolute", bottom: "-250px", left: "50%", transform: "translateX(-50%)" }}>
                    <Search />
                </div>
            </div>

            <Offers />

            <Specialization />

            <Specialists />

            <PatientCaring />

            <Blogs />

            <OurFamilies />

            <FAQs />

            <DownloadApp />

            <Footer />

        </div>
    );
};

export default MedHomePage;