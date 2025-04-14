import React from "react";
import "./MyBookings.css";
import Announcement from "../../Components/AnnouncementBar/AnnouncementBar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { FaSearch } from 'react-icons/fa';



const MyBookings = () => {


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
            >
                <h1
                    style={{
                        color: "#FFFFFF",
                        display: "flex",
                        justifyContent: "flex-start",
                        marginTop:"0px",
                        paddingTop: "45px",
                        paddingLeft: "200px"
                    }}
                >
                    My Bookings
                </h1>
            </div>

            <div
                style={{
                    position: "absolute",
                    top: "175px",
                    left: "66%",
                    width: "800px",
                    height: "125px",
                    transform: "translateX(-50%)",
                    backgroundColor: "#FFFFFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                    borderRadius: "14px",
                    boxShadow: "-4px -4px 8px rgba(0, 0, 0, 0.05), 10px 10px 20px rgba(0,0,0,0.1)",
                }}
            >
                <div className="input-group" id="city">
                    <select
                        value={{}}
                        onChange={{/*(e) => setSelectedCity(e.target.value)*/}}
                        style={{
                            height: "50px",
                            width: "500px",
                            backgroundColor: "#FAFBFE",
                            border: "1px solid #F0F0F0",
                            borderRadius: "8px",
                            paddingLeft: "80px"
                        }}
                    >
                        <option value="">Search By Hospital</option>
                    </select>
                </div>

                <div>
                    <button
                        type="submit"
                        onClick={{/*handleSearch*/}}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "20px",
                            height: "50px",
                            width: "150px",
                            borderRadius: "8px",
                            borderStyle: "hidden",
                            backgroundColor: "#2AA8FF",
                            color: "white",
                            fontSize: "15px",
                            cursor: "pointer"
                        }}
                    >
                        <FaSearch/>
                        Search
                    </button>
                </div>
            </div>

            <div style={{ marginBottom: "10px", paddingTop: "120px", paddingBottom: "80px", background: "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)" }}>
            </div>


            <Footer />
        </div>
    );
};

export default MyBookings;