import { useState } from "react";
import {
  Chip,
  Stack,
  Typography,
  Divider,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";

export default function TimeSlotPicker({
  availableSlots,
  details,
  handleBooking,
  selectedDate,
}) {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const CustomChip = ({ label, onClick }) => (
    <Chip
      label={label}
      color="primary"
      variant="outlined"
      sx={{
        borderRadius: "5px",
        fontSize: { xs: 10, md: 14 },
        cursor: "pointer",
        mr: { xs: 1, md: 3 },
        mt: { xs: 1, md: 0 },
      }}
      onClick={onClick}
    />
  );

  const openConfirmDialog = (slot, label) => {
    setSelectedSlot(slot);
    setSelectedLabel(label);
    setOpenDialog(true);
  };

  const handleConfirm = () => {
    const existing = JSON.parse(localStorage.getItem("bookings") || "[]");
  
    const fullBooking = {
      ...details,
      day: selectedDate.toDateString(),
      time: selectedSlot,
      period: selectedLabel,
    };
  
    const isDuplicate = existing.some(
      (b) =>
        b["Hospital Name"] === details["Hospital Name"] &&
        b.day === selectedDate.toDateString() &&
        b.time === selectedSlot
    );
  
    if (!isDuplicate) {
      localStorage.setItem("bookings", JSON.stringify([...existing, fullBooking]));
    }
  
    handleBooking?.({
      ...details,
      bookingDate: selectedDate.toISOString(),
      bookingTime: selectedSlot,
    });
  
    setOpenDialog(false);
  };
  

  const handleCancel = () => {
    setOpenDialog(false);
  };

  const storedData = localStorage.getItem("booking");
  if (storedData) {
    const bookingData = JSON.parse(storedData);
    console.log(bookingData);
  } else {
    console.log("No booking data found in localStorage");
  }

  const renderSlotGroup = (label, slots) => {
    if (slots.length === 0) return null;

    return (
      <Stack
        direction="row"
        alignItems="center"
        px={{ xs: 0, md: 6 }}
        flexWrap="wrap"
        mb={1}
      >
        <Typography
          width={{ xs: 1, md: "15%" }}
          fontSize={{ xs: 14, md: 16 }}
        >
          {label}
        </Typography>
        {slots.map((slot) => (
          <CustomChip
            key={slot}
            label={slot}
            onClick={() => openConfirmDialog(slot, label)}
          />
        ))}
      </Stack>
    );
  };

  return (
    <>
      <Stack
        pt={3}
        spacing={{ xs: 2, md: 3 }}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        {renderSlotGroup("Morning", availableSlots.morning || [])}
        {renderSlotGroup("Afternoon", availableSlots.afternoon || [])}
        {renderSlotGroup("Evening", availableSlots.evening || [])}
      </Stack>

      <Dialog open={openDialog} onClose={handleCancel}>
        <DialogTitle sx={{mt: 1}}>
          Confirm booking for{" "}
          <strong>{selectedSlot}</strong> on{" "}
          <strong>{selectedDate.toDateString()}</strong>?
        </DialogTitle>
        <DialogActions sx={{p: 4}}>
          <Button onClick={handleCancel} variant="outlined">Cancel</Button>
          <Button onClick={handleConfirm} variant="contained" sx={{backgroundColor: "#2aa7ff"}}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
