import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard";

export default function Blogs() {
  return (
    <Box py={8} sx={{ background: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Typography
          color="#2aa7ff"
          fontWeight={600}
          textAlign="center"
          mb={1}
        >
          Blog & News
        </Typography>

        <Typography variant="h2" textAlign="center" mb={4} fontWeight={600} color="#1B3C74">
          Read Our Latest News
        </Typography>

        <Grid display="flex" justifyContent="center" alignItems="center" gap={5} >
          <Grid item xs={12} md={4}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <BlogCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
