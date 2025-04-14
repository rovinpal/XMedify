import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Announcement from "../../Components/AnnouncementBar/AnnouncementBar";
import Navbar from "../../Components/Navbar/Navbar";
import LocationSearch from "../../Components/LocationSearch/LocationSearch";
import MedicalCenterCard from "../../Components/MedicalCenterCard/MedicalCenterCard";
import Footer from "../../Components/Footer/Footer";
import "./Bookings.css";
import CheckmarkIcon from "../../Assets/CheckmarkICon.png";

const Bookings = () => {
    const location = useLocation();
    const locationState = location.state;

    const [medicalCenters, setMedicalCenters] = useState([]);
    const [searchedState, setSearchedState] = useState("");

    const handleSearchResults = (results, state) => {
        setMedicalCenters(results);
        setSearchedState(state);
    };

    useEffect(() => {
        if (locationState && locationState.results) {
            setMedicalCenters(locationState.results);
            setSearchedState(locationState.state);
        }
    }, [locationState]);


    return (
        <div className="container">
            <Announcement />
            <Navbar />

            <div 
                style={{
                    height: "100px", 
                    background: "linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)",
                    borderBottomRightRadius: "16px",
                    borderBottomLeftRadius: "16px",
                    position: "relative"
                }}
            ></div>

            <div
                style={{
                    position: "absolute",
                    top: "175px",
                    left: "50%",
                    transform: "translateX(-50%)"
                }}
            >
                <LocationSearch onSearch={handleSearchResults}/>
            </div>

            <div style={{ paddingTop: "120px", paddingBottom: "80px", background: "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)" }}>
                <div
                    style={{
                    width: "85vw",
                    margin: "0 auto", 
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px",
                    position: "relative"
                    }}
                >
                    {medicalCenters.length > 0 ? (
                    <>
                        <h2 style={{marginBottom: "-35px"}}>{medicalCenters.length} medical centers available in {searchedState}</h2>
                        
                        <div style={{display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: "10px"}}>
                            <img src={CheckmarkIcon} alt="CheckmarkIcon" style={{height: "20px", width: "20px"}} />
                            <p style={{marginBottom: "0px", color: "#787887"}}>Book appointments with minimum wait-time & verified doctor details</p>
                        </div>

                        {medicalCenters.map((hospital, idx) => (
                        <MedicalCenterCard key={idx} data={hospital} index={idx} />
                        ))}
                    </>
                    ) : (
                    <h3>Please Select a valid State and City.</h3>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Bookings;