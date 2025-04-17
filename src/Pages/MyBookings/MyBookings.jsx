import { useState, useEffect } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Announcement from "../../Components/AnnouncementBar/AnnouncementBar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import DownloadApp from "../../Components/DownloadApp/DownloadApp";
import MedicalCenterCard from "../../Components/MedicalCenterCard/MedicalCenterCard";
import { FaSearch } from "react-icons/fa";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const localBookings = localStorage.getItem("bookings");
    if (localBookings) {
      setBookings(JSON.parse(localBookings));
    }
  }, []);



  return (
    <>
      <Announcement />
      <Navbar />

      <Box
        sx={{
          background: "linear-gradient(90deg, #2AA7FF 1.4%, #0C8CE6 100.57%)",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          py: { xs: 4, md: 6 },
          height: "20px"
        }}
      >
        <Container>
          <Typography
            variant="h3"
            color="#fff"
            fontWeight={600}
            sx={{ fontSize: { xs: 28, md: 40 }, borderRadius: "20px"}}
            ml={-4}
          >
            My Bookings
          </Typography>
        </Container>
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          mt: "-65px",
          mb: 8,
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
                position: "absolute",
                left: "30%",
                backgroundColor: "#FFFFFF",
                borderRadius: 2,
                boxShadow:
                    "-4px -4px 8px rgba(0, 0, 0, 0.05), 10px 10px 20px rgba(0,0,0,0.1)",
                px: { xs: 2, md: 4 },
                py: 4,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: 3,
                width: "880px"
            }}
          >
            <Box
              component="select"
              sx={{
                width: { xs: "100%", md: "65%" },
                height: "50px",
                backgroundColor: "#FAFBFE",
                border: "1px solid #F0F0F0",
                borderRadius: "8px",
                pl: 2,
              }}
              defaultValue=""
            >
              <option value="">Search By Hospital</option>
            </Box>

            <Button
              variant="contained"
              size="large"
              sx={{
                height: "50px",
                width: "30%",
                px: 4,
                backgroundColor: "#2AA8FF",
                color: "#fff",
                gap: 1.5,
                borderRadius: "8px"
              }}
              endIcon={<FaSearch />}
            >
              Search
            </Button>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          background: "linear-gradient(0deg, #E7F0FF 9.01%, #FFFFFF 89.11%)",
          py: 10,
          mt: 15,
        }}
      >
        <Container sx={{ width: "90vw", margin: "0 auto" }}>
           {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <MedicalCenterCard
                key={index}
                data={booking}
                index={index}
                booking={true}
              />
            ))
          ) : (
            <Typography variant="h5" textAlign="center" fontWeight={500}>
              No bookings to show.
            </Typography>
          )}
        </Container>
      </Box>

      <DownloadApp />
      <Footer />
    </>
  );
}
