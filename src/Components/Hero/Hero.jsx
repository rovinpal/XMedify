import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../Assets/HeroImage.png";

const Hero = () => {

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "flex-start",
                backgroundImage: "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
            }}
        >
            <div style={{maxWidth: "500px", maxHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
                <h4 style={{color: "#102851",fontSize: "32px", lineHeight: "68px", letterSpacing: "1px", marginBottom: "5px" }}>Skip the travel! Find Online</h4>
                <h1 style={{fontSize: "56px", margin: "0px"}}>
                    <span style={{color: "#000000"}}>Medical </span>
                    <span style={{color: "#2AA7FF"}}>Centers</span>
                </h1>
                <p style={{color: "#5C6169", fontSize: "20px", marginBottom: "10px"}}>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
                <Link
                    to="/bookings"
                    style={{
                        height: "50px",
                        width: "180px",
                        borderRadius: "8px",
                        backgroundColor: "#2AA8FF",
                        color: "#FFFFFF",
                        borderStyle: "hidden",
                        letterSpacing: "1px",
                        marginTop: "30px",
                        textDecoration: "none",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    Find Centers
                </Link>
            </div>
            <div>
                <img 
                    src={HeroImage} 
                    alt="Hero" 
                    style={{
                        height: "650px",
                        width: "550px"
                    }}
                />
            </div>
        </div>
    );
};

export default Hero;