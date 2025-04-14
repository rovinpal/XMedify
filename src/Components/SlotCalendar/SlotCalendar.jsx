import react from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const generateSlots = () => {
    const slots = { morning: [], afternoon: [], evening: [] };
  
    const addSlot = (hour, minute) => {
        const ampm = hour >= 12 ? "PM" : "AM";
        const displayHour = hour % 12 === 0 ? 12 : hour % 12;
        return `${displayHour}:${minute.toString().padStart(2, "0")} ${ampm}`;
    };
  
    for (let h = 10; h < 13; h++) {
        slots.morning.push(addSlot(h, 0), addSlot(h, 30));
    }
  
    for (let h = 14; h < 16; h++) {
        slots.afternoon.push(addSlot(h, 0), addSlot(h, 30));
    }
  
    for (let h = 17; h <= 19; h++) {
        slots.evening.push(addSlot(h, 0));
        if (h !== 19) slots.evening.push(addSlot(h, 30));
    }
  
    return slots;
  };
  
  const getDayInfo = (offset) => {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    const label = offset === 0 ? "Today" : offset === 1 ? "Tomorrow" : d.toLocaleDateString("en-US", { weekday: "long" });
    return { label, date: d.toLocaleDateString() };
};


const SlotCalendar = () => {
    const days = [0, 1, 2]; 
    const allSlots = generateSlots();

    return (
        <div style={{ borderTop: "1px solid #ddd", paddingTop: "16px", marginTop: "16px" }}>
      <Swiper slidesPerView={1.2} spaceBetween={12}>
        {days.map((offset) => {
          const { label, date } = getDayInfo(offset);
          const totalSlots = Object.values(allSlots).flat().length;

          return (
            <SwiperSlide key={label}>
              <div style={{ padding: "10px" }}>
                <h4 style={{ marginBottom: "4px" }}>{label} ({date})</h4>
                <p style={{ color: "#555", fontSize: "14px" }}>{totalSlots} slots available</p>

                {["morning", "afternoon", "evening"].map((period) => (
                  <div key={period} style={{ marginBottom: "12px" }}>
                    <strong style={{ display: "block", marginBottom: "6px" }}>{period.toUpperCase()}</strong>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {allSlots[period].map((time, i) => (
                        <button
                          key={i}
                          style={{
                            padding: "6px 10px",
                            border: "1px solid #ccc",
                            borderRadius: "6px",
                            backgroundColor: "#fff",
                            fontSize: "12px",
                            cursor: "pointer",
                          }}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    );
};

export default SlotCalendar;