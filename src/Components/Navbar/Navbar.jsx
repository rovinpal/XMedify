import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MedifyLogo from "../../Assets/MedifyLogo.png";

const Navbar = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/my-bookings");
    }

    return (
        <div
            style={{
                height: "90px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                background: "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)"
            }}
        >
            <div>
                <Link to="/">
                    <img 
                        src={MedifyLogo} 
                        alt="Medify Logo"
                        style={{
                            height: "30px",
                            width: "auto"
                        }} 
                    />
                </Link>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    gap: "60px"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        gap: "60px"
                    }}
                >
                    <Link to="/bookings" style={{color: "#102851", textDecoration: "none", fontSize: "14px", fontWeight: "400"}}>Find Doctors</Link>
                    <button
                        onClick={{}}
                        style={{
                            background: "none",
                            border: "none",
                            color: "#102851",
                            textDecoration: "none",
                            fontSize: "14px",
                            fontWeight: "400",
                            cursor: "pointer",
                            padding: 0,
                        }}
                        >
                        Hospitals
                    </button>
                    <button
                        onClick={{}}
                        style={{
                            background: "none",
                            border: "none",
                            color: "#102851",
                            textDecoration: "none",
                            fontSize: "14px",
                            fontWeight: "400",
                            cursor: "pointer",
                            padding: 0,
                        }}
                        >
                        Medicines
                    </button>
                    <button
                        onClick={{}}
                        style={{
                            background: "none",
                            border: "none",
                            color: "#102851",
                            textDecoration: "none",
                            fontSize: "14px",
                            fontWeight: "400",
                            cursor: "pointer",
                            padding: 0,
                        }}
                        >
                        Surgeries
                    </button>
                    <button
                        onClick={{}}
                        style={{
                            background: "none",
                            border: "none",
                            color: "#102851",
                            textDecoration: "none",
                            fontSize: "14px",
                            fontWeight: "400",
                            cursor: "pointer",
                            padding: 0,
                        }}
                        >
                        Software for Providers
                    </button>
                    <button
                        onClick={{}}
                        style={{
                            background: "none",
                            border: "none",
                            color: "#102851",
                            textDecoration: "none",
                            fontSize: "14px",
                            fontWeight: "400",
                            cursor: "pointer",
                            padding: 0,
                        }}
                        >
                        Facilities
                    </button>
                </div>
                <div>
                    <button 
                        onClick={handleClick} 
                        style={{
                            height: "40px", 
                            width: "130px",
                            backgroundColor: "#2AA8FF",
                            color: "#FFFFFF",
                            borderRadius: "8px",
                            borderStyle: "hidden",
                            letterSpacing: "1px",
                            cursor: "pointer"
                        }}
                    >
                        My Bookings
                    </button>
                </div>                
            </div>
        </div>
    );
};

export default Navbar;