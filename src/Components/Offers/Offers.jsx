import { Box } from "@mui/material";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import offer1 from "../../Assets/offer1.png";
import offer2 from "../../Assets/offer2.png";

const Offers = () => {
  const offers = [offer1, offer2, offer1, offer2, offer1, offer2];

  return (
    <Box py={6} mt={35}>

      <Box
        sx={{
          width: "100vw",
          position: "relative",
          left: "50%",
          marginLeft: "-50vw",
          maxWidth: '100%', overflowX: 'hidden',
          "& .swiper-pagination": {
            marginTop: "24px",
            position: "relative",
          },
        }}
      >
        <Swiper
          spaceBetween={5}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            600: { slidesPerView: 3 }
          }}
        >
          {offers.map((img, index) => (
            <SwiperSlide key={index}>
              <Box px={{ xs: 2, sm: 3, md: 4 }} >
                <Box
                  component="img"
                  src={img}
                  alt={`Offer ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.06)",
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default Offers;
