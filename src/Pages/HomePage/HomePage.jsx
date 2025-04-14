import React from "react";
import "./HomePage.css";
import Announcement from "../../Components/AnnouncementBar/AnnouncementBar";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Search from "../../Components/Search/Search";
import OfferImage from "../../Assets/OfferImage.png";
import Footer from "../../Components/Footer/Footer";

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

            <div style={{display: "flex", justifyContent: "space-evenly", margin: "325px 0px 100px 0px"}}>
                <div style={{height: "200px", width: "400px"}}>
                    <img src={OfferImage} alt="OfferImage" />
                </div>
                <div style={{height: "200px", width: "400px"}}>
                    <img src={OfferImage} alt="OfferImage" />
                </div>
                <div style={{height: "200px", width: "400px"}}>
                    <img src={OfferImage} alt="OfferImage" />
                </div>
            </div>

            <div style={{height: "100px", backgroundColor: "#2AA7FF"}}>

            </div>

            <Footer />

        </div>
    );
};

export default MedHomePage;