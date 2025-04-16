import DaySelector from "./DaySelect/DaySelect";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { startOfDay } from "date-fns";
import TimeSlotPicker from "./TimeSelect/TimeSelect";

export default function Calendar({ availableSlots, details, handleBooking }) {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  const morning = availableSlots?.morning || [];
  const afternoon = availableSlots?.afternoon || [];
  const evening = availableSlots?.evening || [];
  
  const totalSlots = morning.length + afternoon.length + evening.length;
  

    if (!availableSlots || !availableSlots.morning || !availableSlots.afternoon || !availableSlots.evening) {
      return <Typography>Loading slots...</Typography>; 
    }

  return (
    <Box>
      <DaySelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      />
      <TimeSlotPicker
        availableSlots={availableSlots}
        selectedDate={selectedDate}
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  );
}
