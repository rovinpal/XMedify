import React from "react";
import { useState, useEffect } from "react";
import { FaSearch } from 'react-icons/fa';
import { GrLocation } from "react-icons/gr";
import "./LocationSearch.css";


const LocationSearch = ({ onSearch }) => {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");


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
            onSearch(data, selectedState); 
        } catch (error) {
          console.error("Error fetching search data:", error);
        }
    };





    return (
        <div
            style={{
                height: "120px",
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
                    justifyContent: "center",
                    margin: "35px 0px",
                    gap: "20px"
                }}
            >
                <div className="input-group" id="state">
                    <GrLocation className="input-icon" />
                    <select
                        value={selectedState}
                        onChange={(e) => {
                            setSelectedState(e.target.value);
                            setSelectedCity(""); 
                        }}
                        style={{
                            height: "50px",
                            width: "325px",
                            backgroundColor: "#FAFBFE",
                            border: "1px solid #F0F0F0",
                            borderRadius: "8px",
                            paddingLeft: "80px"
                        }}
                    >
                        <option value="">State</option>
                        {states.map((state) => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>
                </div>

                <div className="input-group" id="city">
                    <GrLocation className="input-icon" />  
                    <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        style={{
                            height: "50px",
                            width: "550px",
                            backgroundColor: "#FAFBFE",
                            border: "1px solid #F0F0F0",
                            borderRadius: "8px",
                            paddingLeft: "80px"
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
                        type="submit"
                        onClick={handleSearch}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "20px",
                            height: "50px",
                            width: "225px",
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
        </div>
    );
};

export default LocationSearch;