import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { FaUserDoctor  } from "react-icons/fa6";
import { FaClinicMedical, FaHospital, FaPills, FaAmbulance } from "react-icons/fa";

import "./Search.css";

const Search = () => {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStates = async () => {
            try {
                const response = await fetch("https://meddata-backend.onrender.com/states");
                if (!response.ok) {
                    throw new Error("Failed to fetch states");
                }
                const data = await response.json();
                setStates(data);
            } catch (error) {
                console.error("Error fetching states:", error);
            }
        };

        fetchStates();
    }, []);


    useEffect(() => {
        const fetchCities = async () => {
            if (!selectedState) {
                setCities([]);
                return;
            }
    
            try {
                const response = await fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch cities");
                }
                const data = await response.json();
                setCities(data);
            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        };
    
        fetchCities();
    }, [selectedState]);


    const handleSearch = async () => {
        if (!selectedState || !selectedCity) return;
    
        try {
            const response = await fetch(
                `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch search data");
            }
    
            const data = await response.json();
            navigate("/bookings", {
                state: {
                    results: data,
                    state: selectedState,
                    city: selectedCity
                }
            });
            // onSearch(data, selectedState); 
        } catch (error) {
          console.error("Error fetching search data:", error);
        }
    };





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
                    <select
                        value={selectedState}
                        onChange={(e) => {
                            setSelectedState(e.target.value);
                            setSelectedCity(""); 
                        }}
                        style={{
                            height: "50px",
                            width: "280px",
                            backgroundColor: "#FAFBFE",
                            border: "1px solid #F0F0F0",
                            borderRadius: "8px",
                            paddingLeft: "60px"
                        }}
                    >
                        <option value="">State</option>
                        {states.map((state) => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>
                </div>

                <div className="input-group">
                    <FaSearch className="input-icon" />  
                    <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        style={{
                            height: "50px",
                            width: "280px",
                            backgroundColor: "#FAFBFE",
                            border: "1px solid #F0F0F0",
                            borderRadius: "8px",
                            paddingLeft: "60px"
                        }}
                    >
                        <option value="">City</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <button
                        onClick={handleSearch}
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