import { Box, Stack, Typography } from "@mui/material";
import featured from "../../Assets/blog.png";
import person from "../../Assets/person.png";

export default function BlogCard() {
  return (
    <Box
      border="1px solid rgba(0,0,0,0.1)"
      borderRadius={2}
      overflow="hidden"
      sx={{ transition: "0.3s", "&:hover": { boxShadow: 4 } }}
      maxWidth={500}
    >
      <Box
        component="img"
        src={featured}
        alt="Blog Thumbnail"
        width="100%"
        height="auto"
      />
      <Box p={2}>
        <Typography
          color="#77829D"
          fontWeight={500}
          mb={1}
          fontSize={{ xs: 12, md: 16 }}
        >
          Medical | March 31, 2022
        </Typography>

        <Typography
          component="h3"
          color="#1B3C74"
          fontSize={{ xs: 14, md: 18 }}
          fontWeight={600}
          lineHeight={1.4}
          mb={2}
        >
          6 Tips To Protect Your Mental Health When You're Sick
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Box
            component="img"
            src={person}
            alt="Author"
            height={32}
            width={32}
            borderRadius="50%"
          />
          <Typography color="#1B3C74" fontSize={{ xs: 12, md: 16 }}>
            Rebecca Lee
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
