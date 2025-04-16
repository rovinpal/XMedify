import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Announcement from "../../Components/AnnouncementBar/AnnouncementBar";
import Navbar from "../../Components/Navbar/Navbar";
import LocationSearch from "../../Components/LocationSearch/LocationSearch";
import MedicalCenterCard from "../../Components/MedicalCenterCard/MedicalCenterCard";
import Footer from "../../Components/Footer/Footer";
import "./Bookings.css";
import CheckmarkIcon from "../../Assets/CheckmarkICon.png";
import DownloadApp from "../../Components/DownloadApp/DownloadApp";
import FAQs from "../../Components/FAQs/FAQs";

const Bookings = () => {
    const location = useLocation();
    const [searchedCity, setSearchedCity] = useState("");

    const [medicalCenters, setMedicalCenters] = useState([]);

    // const handleSearchResults = (results, state) => {
    //     setMedicalCenters(results);
    //     setSearchedState(state);
    // };

    // useEffect(() => {
    //     if (locationState && locationState.results) {
    //         setMedicalCenters(locationState.results);
    //         setSearchedState(locationState.state);
    //     }
    // }, [locationState]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const state = params.get("state");
        const city = params.get("city");

        if (!state || !city) return;

        const fetchData = async () => {
            try {
                const response = await fetch(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
                const data = await response.json();
                setMedicalCenters(data);
                setSearchedCity(city); 
            } catch (error) {
                console.error("Error fetching search data:", error);
            }
        };

        fetchData();
    }, [location.search]);

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
                <LocationSearch />
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
                        <h1 style={{marginBottom: "-35px"}}>{medicalCenters.length} medical centers available in {searchedCity}</h1>
                        
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
            
            <FAQs />
            <DownloadApp />
            <Footer />
        </div>
    );
};

export default Bookings;