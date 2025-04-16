import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import HospitalIcon from "../../Assets/HospitalIcon.png";
import RatingIcon from "../../Assets/RatingIcon.png";
import DentalImage from "../../Assets/DentalBannerImage.png";
import Calendar from "../SlotCalendar/SlotCalendar";

const MedicalCenterCard = ({ data, index, availableSlots, handleBooking }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <Box width="100%" mb={3}>
        <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        sx={{
            width: "100%",
            mb: 0.5,
            alignItems: "stretch",
            fontFamily: "'Poppins', sans-serif",
        }}
        >
        <Box
            sx={{
            bgcolor: "#fff",
            borderRadius: "16px",
            boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.06)",
            p: { xs: 2, md: 4 },
            display: "flex",
            width: "60%",
            minHeight: "230px",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            alignItems: "center",
            }}
        >
            <Box
            component="img"
            src={HospitalIcon}
            alt="Hospital"
            sx={{
                width: { xs: 80, md: 120 },
                height: "auto",
                flexShrink: 0,
                alignSelf: { xs: "center", md: "start" },
            }}
            />

            <Box sx={{ flex: 1 }}>
            <Typography
                variant="h6"
                color="#2AA7FF"
                fontWeight={600}
                fontSize={{ xs: 18, md: 20 }}
                mb={0.5}
                textTransform="capitalize"
                lineHeight={1.3}
                noWrap
                sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    maxWidth: { xs: "100%", md: "350px" }
                }}
            >
                {data["Hospital Name"]}
            </Typography>
            <Typography
                textTransform="capitalize"
                color="#414146"
                fontSize={14}
                fontWeight={600}
                mb={0.5}
            >
                {`${data["City"]}, ${data["State"]}`}
            </Typography>
            <Typography fontSize={13} color="#414146" mb={1}>
                {data["Address"]}
            </Typography>

            <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                mb={2}
                flexWrap="wrap"
            >
                <Typography fontWeight={700} color="#02A401">
                Free
                </Typography>
                <Typography
                sx={{
                    textDecoration: "line-through",
                    color: "#787887",
                    fontWeight: 500,
                }}
                >
                ₹500
                </Typography>
                <Typography fontSize={13} color="#414146">
                Consultation fee at clinic
                </Typography>
            </Stack>

            <Divider sx={{ borderStyle: "dashed", mb: 2 }} />

            <Stack
                direction="row"
                alignItems="center"
                bgcolor="#02A401"
                py="4px"
                px={1.5}
                borderRadius="8px"
                width="fit-content"
                spacing={1}
            >
                <Box component="img" src={RatingIcon} width={16} />
                <Typography fontWeight={600} fontSize={14} color="#fff">
                {data["Hospital overall rating"] === "Not Available"
                    ? "0"
                    : data["Hospital overall rating"]}
                </Typography>
            </Stack>
            </Box>

            <Stack
            alignItems="center"
            justifyContent="center"
            spacing={1.5}
            width={{ xs: "100%", md: "180px" }}
            >
            <Typography color="#28C76F" fontWeight={600} fontSize={14}>
                Available Today
            </Typography>
            <Button
                variant="contained"
                fullWidth
                onClick={() => setShowCalendar((prev) => !prev)}
                sx={{
                textTransform: "none",
                borderRadius: "8px",
                fontWeight: 600,
                backgroundColor: "#2AA7FF",
                boxShadow: "none",
                fontSize: 14,
                py: 1.2,
                "&:hover": {
                    backgroundColor: "#1C91E6",
                },
                }}
            >
                {showCalendar ? "Hide Calendar" : "Book FREE Center Visit"}
            </Button>
            </Stack>
        </Box>

        {index === 0 && (
            <Box
            sx={{
                width: "30%",
                borderRadius: "16px",
                boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.04)",
                overflow: "hidden",
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#fff",
            }}
            >
            <Box
                component="img"
                src={DentalImage}
                alt="Dental"
                sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                }}
            />
            </Box>
        )}
        </Stack>

        {showCalendar && (
            <Box mt={2}>
                <Calendar
                    details={data}
                    availableSlots={availableSlots || { morning: [], afternoon: [], evening: [] }}
                    handleBooking={handleBooking}
                />
            </Box>
        )}
    </Box>  
  );
};

export default MedicalCenterCard;
