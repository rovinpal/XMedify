import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  Divider,
  Chip
} from "@mui/material";
import { format, isValid } from "date-fns";
import HospitalIcon from "../../Assets/HospitalIcon.png";
import RatingIcon from "../../Assets/RatingIcon.png";
import DentalImage from "../../Assets/DentalBannerImage.png";
import Calendar from "../SlotCalendar/SlotCalendar";

const MedicalCenterCard = ({ data, index, availableSlots, handleBooking, booking }) => {
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
            flexDirection: "column",
            width: "60%",
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            alignItems="center"
          >
            <Box
              component="img"
              src={HospitalIcon}
              alt="Hospital"
              sx={{
                width: { xs: 80, md: 120 },
                height: "auto",
                flexShrink: 0,
              }}
            />

            <Box flex={1}>
              <Typography
                variant="h6"
                component="h3"
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
                  maxWidth: { xs: "100%", md: "350px" },
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
              justifyContent={booking ? "flex-start" : "flex-end"}
              minWidth="23%"
              spacing={1.5}
              mt={{ xs: 2, md: 0 }}
              alignItems="center"
            >
              {!booking && (
                <>
                  <Typography
                    textAlign="center"
                    color="primary.green"
                    fontSize={14}
                    fontWeight={500}
                  >
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
                    {showCalendar ? "Hide Booking Calendar" : "Book FREE Center Visit"}
                  </Button>
                </>
              )}

              {booking && (
                <Stack direction="row" spacing={1}>
                  <Chip
                    label={data.time || "N/A"}
                    variant="outlined"
                    color="primary"
                    sx={{
                      borderRadius: 1,
                      fontSize: 14,
                    }}
                  />
                  <Chip
                    label={
                      data.day && isValid(new Date(data.day)) 
                        ? format(new Date(data.day), "dd MMMM yyyy") 
                        : "Invalid date"
                    }
                    variant="outlined"
                    color="success"
                    sx={{
                      borderRadius: 1,
                      fontSize: 14,
                    }}
                  />
                </Stack>
              )}
            </Stack>
          </Stack>

          {showCalendar && (
            <Box mt={3} width="100%">
              <Calendar
                details={data}
                availableSlots={availableSlots || { morning: [], afternoon: [], evening: [] }}
                handleBooking={handleBooking}
              />
            </Box>
          )}
        </Box>

        {index === 0 && (
          <Box
            sx={{
              width: "30%",
              height: "230px",
              borderRadius: "16px",
              boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.04)",
              overflow: "hidden",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#fff",
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src={DentalImage}
              alt="Dental"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default MedicalCenterCard;
