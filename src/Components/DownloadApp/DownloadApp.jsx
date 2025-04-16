import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import SmsForm from "./SmsForm";

import mobile from "../../Assets/mobile.jpg";
import playstore from "../../Assets/playstore.png";
import apple from "../../Assets/apple-logo.png";
import arrow from "../../Assets/down-arr.png";

export default function DownloadApp() {
  return (
    <Box sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 5}}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={5.5}>
            <Box component="img" src={mobile} width={1} height="450px" />
          </Grid>

          <Grid item xs={12} md={6.5}>
            <Box position="relative" pl={{ xs: "36px", md: "50px" }} mb={{ xs: 4, md: 0 }} color="#1b3c74">
              <Typography variant="h2" mb={2} fontWeight={600}>
                Download the
                <br />
                <Box component="span" color="#2aa7ff">Medify </Box>
                App
              </Typography>

              <Box
                component="img"
                src={arrow}
                width={{ xs: 24, md: 40 }}
                position="absolute"
                left={0}
                top={50}
              />

              <SmsForm />

              <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, md: 2 }}>
                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 1.5,
                  }}
                  size="large"
                  startIcon={<img src={playstore} alt={playstore} height={24} />}
                  variant="contained"
                  disableElevation
                >
                  Google Play
                </Button>

                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 1.5,
                  }}
                  size="large"
                  startIcon={<img src={apple} alt={apple} height={24} />}
                  variant="contained"
                  disableElevation
                >
                  App Store
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
