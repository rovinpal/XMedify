import { Box, Stack, Typography } from "@mui/material";

const IconCard = ({ img, title, bgColor, active = false, shadow = false}) => {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      bgcolor={active ? "rgba(42,167,255,0.08)" : bgColor}
      p={{ xs: 2, md: 3 }}
      borderRadius={2}
      border={active ? "1px solid #2AA7FF" : "0"}
      boxShadow={shadow ? "0 0 24px rgba(0,0,0,0.09)" : "none"}
      sx={{
        width: "250px",
        height: "130px",
        transition: "0.3s",
        ":hover": {
          boxShadow: shadow ? "0 8px 24px rgba(0,0,0,0.15)" : "none",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Box
        component="img"
        src={img}
        sx={{
          height: { xs: 40, md: 100 },
          width: { xs: 40, md: 100 },
        }}
        alt={title}
      />
      <Typography
        color={active ? "#2aa7ff" : "#1B3C74"}
        fontSize={{ xs: 14, md: 18 }}
        fontWeight={active ? 600 : 500}
        textAlign="center"
      >
        {title}
      </Typography>
    </Stack>
  );
}


export default IconCard;