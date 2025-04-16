import { Box, Typography } from "@mui/material";

const SpecialistCard = ({ img, title, designation }) => {
  return (
    <Box textAlign="center">
      <Box
        component="img"
        src={img}
        alt={title}
        width={1}
        mb= {2}
        sx={{
          borderRadius: "250px 240px 4px 4px",
          boxShadow: "0 15px 55px -10px rgba(0,0,0,0.09)",
        }}
      />
      <Typography
        fontSize={{ xs: 16, md: 20 }}
        fontWeight={600}
        color="#1B3C74"
      >
        {title}
      </Typography>
      <Typography
        fontSize={{ xs: 14, md: 16 }}
        fontWeight={500}
        color="#2aa7ff"
      >
        {designation}
      </Typography>
    </Box>
  );
}

export default SpecialistCard;
