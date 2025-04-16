import { Box, Button, Container, Grid, Typography } from "@mui/material";
import IconCard from "../../Components/IconCard/IconCard";

import icon1 from "../../Assets/Drugstore.png";
import icon2 from "../../Assets/primary-care.png";
import icon3 from "../../Assets/cardiology.png";
import icon4 from "../../Assets/mri.png";
import icon5 from "../../Assets/blood-test.png";
import icon6 from "../../Assets/piscologist.png";
import icon7 from "../../Assets/X-Ray.png";

const Specialization = () => {
  const data = [
    { icon: icon1, title: "Dentistry" },
    { icon: icon2, title: "Primary Care" },
    { icon: icon3, title: "Cardiology" },
    { icon: icon4, title: "MRI Resonance" },
    { icon: icon5, title: "Blood Test" },
    { icon: icon6, title: "Psychologist" },
    { icon: icon1, title: "Laboratory" },
    { icon: icon7, title: "X-Ray" },
  ];

  return (
    <Box py={8} sx={{ background: "#e7f0ff" }}>
      <Container>
        <Typography
          variant="h2"
          color="#1B3C74"
          fontWeight={600}
          textAlign="center"
          mb={4}
        >
          Find by Specialisation
        </Typography>

        <Grid container width="90vw" ml={-10} spacing={{ xs: 2, sm: 3, md: 4 }} mb={5}>
          {data.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <IconCard
                img={item.icon}
                title={item.title}
                bgColor="#FFFFFF"
                shadow
              />
            </Grid>
          ))}
        </Grid>

        <Box display="flex" justifyContent="center" textAlign="center">
          <Button
            variant="contained"
            size="large"
            disableElevation
            sx={{backgroundColor: "#2aa7ff"}}
          >
            View All
          </Button>
        </Box>
      </Container>
    </Box>
  );
}


export default Specialization;