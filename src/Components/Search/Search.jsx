import React from "react";
import { FaSearch } from 'react-icons/fa';
import { FaUserDoctor  } from "react-icons/fa6";
import { FaClinicMedical, FaHospital, FaPills, FaAmbulance } from "react-icons/fa";

import "./Search.css";

const Search = () => {

    return (
        <div
            style={{
                height: "500px",
                width: "85vw",
                border: "1px solid #F0F0F0",
                borderRadius: "15px",
                backgroundColor: "#FFFFFF",
                boxShadow: "-4px -4px 8px rgba(0, 0, 0, 0.05), 10px 10px 20px rgba(0,0,0,0.1)",
                zIndex: 10
            }}      
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "75px 50px 100px 0px",
                    gap: "150px"
                }}
            >
                <div className="input-group">
                    <FaSearch className="input-icon" />
                    <input 
                        type="search" 
                        placeholder="State"
                        style={{
                            height: "50px",
                            width: "280px",
                            backgroundColor: "#FAFBFE",
                            border: "1px solid #F0F0F0",
                            borderRadius: "8px"
                        }}
                    />
                </div>

                <div className="input-group">
                    <FaSearch className="input-icon" />  
                    <input 
                        type="search" 
                        placeholder="City"
                        style={{
                            height: "50px",
                            width: "280px",
                            backgroundColor: "#FAFBFE",
                            border: "1px solid #F0F0F0",
                            borderRadius: "8px"
                        }}
                    />
                </div>

                <div>
                    <button
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "20px",
                            height: "50px",
                            width: "130px",
                            borderRadius: "8px",
                            borderStyle: "hidden",
                            backgroundColor: "#2AA8FF",
                            color: "white",
                            fontSize: "15px"
                        }}
                    >
                        <FaSearch/>
                        Search
                    </button>
                </div>
            </div>

            <p
                style={{
                    color: "#102851",
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: "20px",
                    marginBottom: "50px",
                    letterSpacing: "0.5px",
                }}
            >
                You may be looking for 
            </p>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                }}
            >
                <button
                    className="button-search"
                >
                    <FaUserDoctor style={{fontSize: "50px", color: "#2AA8FF"}} />
                    Doctors
                </button>
                
                <button
                    className="button-search"
                >
                    <FaClinicMedical style={{fontSize: "50px", color: "#2AA8FF"}} />
                    Labs
                </button>

                <button
                    className="button-search"
                >
                    <FaHospital style={{fontSize: "50px", color: "#2AA8FF"}} />
                    Hospitals
                </button>

                <button
                    className="button-search"
                >
                    <FaPills style={{fontSize: "50px", color: "#2AA8FF"}} />
                    Medical Store
                </button>

                <button
                    className="button-search"
                >
                    <FaAmbulance style={{fontSize: "50px", color: "#2AA8FF"}} />
                    Ambulance
                </button>

            </div>
        </div>
    );
};

export default Search;