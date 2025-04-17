import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { FaUserDoctor } from "react-icons/fa6";
import { FaClinicMedical, FaHospital, FaPills, FaAmbulance } from "react-icons/fa";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

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
        if (!response.ok) throw new Error("Failed to fetch states");
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
      if (!selectedState) return setCities([]);

      try {
        const response = await fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`);
        if (!response.ok) throw new Error("Failed to fetch cities");
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, [selectedState]);

  const handleSearch = () => {
    if (!selectedState || !selectedCity) return;
    navigate(`/bookings?state=${encodeURIComponent(selectedState)}&city=${encodeURIComponent(selectedCity)}`);
  };

  return (
    <Box
      sx={{
        height: "500px",
        width: "85vw",
        border: "1px solid #F0F0F0",
        borderRadius: "15px",
        backgroundColor: "#FFFFFF",
        boxShadow: "-4px -4px 8px rgba(0, 0, 0, 0.05), 10px 10px 20px rgba(0,0,0,0.1)",
        zIndex: 10,
        px: 4,
        py: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 6,
          mt: 8,
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <FormControl fullWidth sx={{ maxWidth: 280 }} id="state">
          <InputLabel>State</InputLabel>
          <Select
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedCity("");
            }}
            label="State"
          >
            {states.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ maxWidth: 280 }} id="city">
          <InputLabel>City</InputLabel>
          <Select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            label="City"
          >
            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            height: "55px",
            px: 4,
            backgroundColor: "#2AA8FF",
            color: "#fff",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontWeight: 600,
            whiteSpace: "nowrap"
          }}
          endIcon={<FaSearch />}
          type="submit"
        >
          Search
        </Button>
      </Box>

      <Typography
        sx={{
          color: "#102851",
          textAlign: "center",
          fontWeight: 700,
          fontSize: "20px",
          mb: 5,
          letterSpacing: "0.5px",
        }}
      >
        You may be looking for
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <button className="button-search">
          <FaUserDoctor style={{ fontSize: "50px", color: "#2AA8FF" }} />
          Doctors
        </button>

        <button className="button-search">
          <FaClinicMedical style={{ fontSize: "50px", color: "#2AA8FF" }} />
          Labs
        </button>

        <button className="button-search">
          <FaHospital style={{ fontSize: "50px", color: "#2AA8FF" }} />
          Hospitals
        </button>

        <button className="button-search">
          <FaPills style={{ fontSize: "50px", color: "#2AA8FF" }} />
          Medical Store
        </button>

        <button className="button-search">
          <FaAmbulance style={{ fontSize: "50px", color: "#2AA8FF" }} />
          Ambulance
        </button>
      </Box>
    </Box>
  );
};

export default Search;
