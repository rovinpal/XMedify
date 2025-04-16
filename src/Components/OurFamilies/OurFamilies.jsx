import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import banner from "../../Assets/our-families-banner.png";

const OurFamilies = () => {
  return (
    <Box pt={4} pb={4} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container maxWidth="lg">
        <Grid display="flex" justifyContent="center" alignItems="center" spacing={{ xs: 4, md: 10 }}>
          <Grid item xs={12} md={6} width="50%">
            <Typography fontWeight={600} color="#2aa7ff" mb={1}>
              CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
            </Typography>
            <Typography fontWeight={600} color="#1B3C74" variant="h2" gutterBottom>
              Our Families
            </Typography>
            <Typography color="#77829D" lineHeight={1.8}>
              We will work with you to develop individualised care plans, including management
              of chronic diseases. If we cannot assist, we can provide referrals or advice
              about the type of practitioner you require. We treat all enquiries sensitively
              and in the strictest confidence.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} width="50%">
            <Box
              component="img"
              src={banner}
              width={1}
              height="700px"
              alt="Our Families Banner"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}


export default OurFamilies;