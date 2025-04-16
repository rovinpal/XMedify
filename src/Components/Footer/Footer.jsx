import {
    Box,
    Container,
    Grid,
    Stack,
    Typography,
  } from "@mui/material";
  import Logo from "../../Assets/MedifyLogo.png";
  import Facebook from "../../Assets/Facebook.png";
  import Pinterest from "../../Assets/Pinterest.png";
  import Twitter from "../../Assets/Twitter.png";
  import Youtube from "../../Assets/Youtube.png";
  import FooterLink from "./FooterLink";
  
  export default function Footer() {
    return (
      <Box bgcolor="#1b3c74" pb={3} pt={6}>
        <Container maxWidth="xl">
          <Box display="flex" justifyContent="space-evenly" width="80vw">
            <Grid container spacing={15} justifyContent="flex-start" maxWidth="md">
                <Grid item xs={12} md={6}>
                <Stack alignItems="flex-start" justifyContent="space-between" height={1}>
                    <Box src={Logo} height={36} alt="Medify" component="img" mb={2} />
                    <Stack direction="row" spacing={1.5}>
                    <Box component="img" src={Facebook} height={36} />
                    <Box component="img" src={Twitter} height={36} />
                    <Box component="img" src={Youtube} height={36} />
                    <Box component="img" src={Pinterest} height={36} />
                    </Stack>
                </Stack>
                </Grid>

                <Grid item xs={12} md={2}>
                <Stack spacing={2}>
                    <FooterLink>About Us</FooterLink>
                    <FooterLink>Our Pricing</FooterLink>
                    <FooterLink>Our Gallery</FooterLink>
                    <FooterLink>Appointment</FooterLink>
                    <FooterLink>Privacy Policy</FooterLink>
                </Stack>
                </Grid>

                <Grid item xs={12} md={2}>
                <Stack spacing={2}>
                    <FooterLink>Orthology</FooterLink>
                    <FooterLink>Neurology</FooterLink>
                    <FooterLink>Dental Care</FooterLink>
                    <FooterLink>Opthalmology</FooterLink>
                    <FooterLink>Cardiology</FooterLink>
                </Stack>
                </Grid>

                <Grid item xs={12} md={2}>
                <Stack spacing={2}>
                    <FooterLink>About Us</FooterLink>
                    <FooterLink>Our Pricing</FooterLink>
                    <FooterLink>Our Gallery</FooterLink>
                    <FooterLink>Appointment</FooterLink>
                    <FooterLink>Privacy Policy</FooterLink>
                </Stack>
                </Grid>
            </Grid>
        </Box>

  
          <Typography
            fontWeight={300}
            color="#fff"
            fontSize={14}
            pt={3}
            mt={5}
            borderTop="1px solid rgba(255,255,255,0.1)"
          >
            Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
          </Typography>
        </Container>
      </Box>
    );
  }
  