import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Stack
} from "@mui/material";
import Announcement from "../../Components/AnnouncementBar/AnnouncementBar";
import Navbar from "../../Components/Navbar/Navbar";
import LocationSearch from "../../Components/LocationSearch/LocationSearch";
import MedicalCenterCard from "../../Components/MedicalCenterCard/MedicalCenterCard";
import Footer from "../../Components/Footer/Footer";
import DownloadApp from "../../Components/DownloadApp/DownloadApp";
import FAQs from "../../Components/FAQs/FAQs";
import CheckmarkIcon from "../../Assets/CheckmarkICon.png";

const Bookings = () => {
  const location = useLocation();
  const [searchedCity, setSearchedCity] = useState("");
  const [medicalCenters, setMedicalCenters] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const state = params.get("state");
    const city = params.get("city");

    if (!state || !city) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
        );
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
    <Box>
      <Announcement />
      <Navbar />

      <Box
        sx={{
          background: "linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          py: { xs: 4, md: 6 },
        }}
      />

      <Container sx={{ mt: -6, mb: 8, ml: 10, width: "80vw" }}>
        <LocationSearch />
      </Container>

      <Box
        sx={{
          background: "linear-gradient(0deg, #E7F0FF 9.01%, #FFFFFF 89.11%)",
          py: 8
        }}
      >
        <Container maxWidth="xl" sx={{width: "90vw", ml: "85px"}} >
          {medicalCenters.length > 0 ? (
            <Stack spacing={4}>
              <Box>
                <Typography variant="h4" component="h1" fontWeight={600} mb={1}>
                  {medicalCenters.length} medical centers available in {searchedCity.toLowerCase()}
                </Typography>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <Box
                    component="img"
                    src={CheckmarkIcon}
                    alt="Checkmark"
                    sx={{ width: 20, height: 20 }}
                  />
                  <Typography color="#787887">
                    Book appointments with minimum wait-time & verified doctor details
                  </Typography>
                </Stack>
              </Box>

              {medicalCenters.map((hospital, idx) => (
                <MedicalCenterCard key={idx} data={hospital} index={idx} />
              ))}
            </Stack>
          ) : (
            <Typography variant="h5" color="text.secondary">
              Please select a valid State and City.
            </Typography>
          )}
        </Container>
      </Box>

      <FAQs />
      <DownloadApp />
      <Footer />
    </Box>
  );
};

export default Bookings;
