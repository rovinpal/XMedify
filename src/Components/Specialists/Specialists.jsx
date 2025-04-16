import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SpecialistCard from "./SpecialistCard";
import img1 from "../../Assets/lesley.png";
import img2 from "../../Assets/ahmad.png";
import img3 from "../../Assets/heena.png";
import img4 from "../../Assets/ankur.png";
import img5 from "../../Assets/ahmad-stevens.png";

const Specialists = () => {
  const specialists = [
    { img: img1, title: "Dr. Lesley Hull", designation: "Medicine" },
    { img: img2, title: "Dr. Ahmad Khan", designation: "Neurologist" },
    { img: img3, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
    { img: img4, title: "Dr. Ankur Sharma", designation: "Medicine" },
    { img: img5, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
  ];

  return (
    <Box py={8} sx={{ backgroundColor: "#fff" }} id="find-doctors">
      <Box textAlign="center" mb={5}>

        <Typography
          variant="h2"
          color="#1B3C74"
          fontWeight={600}
        >
          Our Medical Specialists
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          position: "relative",
          "& .swiper-pagination": {
            marginTop: "30px",
            position: "relative",
          },
        }}
      >
        <Swiper
          slidesPerView={4}
          spaceBetween={2}
          // centeredSlides={true}
          loop

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            767: { slidesPerView: 4 }
          }}
        >
          {specialists.map((doc, idx) => (
            <SwiperSlide key={idx}>
              <Box px={2}>
                <SpecialistCard
                  img={doc.img}
                  title={doc.title}
                  designation={doc.designation}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Specialists;
