import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import banner from "../../Assets/patientcaring.png";
import tick from "../../Assets/tick-blue.png";

export default function PatientCaring() {
  return (
    <Box py={8} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container maxWidth="lg">
        <Grid display="flex" justifyContent="center" alignItems="center" gap={5}>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={banner}
              alt="Patient Caring"
              width="100%"
              sx={{ maxHeight: "1000px", objectFit: "contain" }}
            />
          </Grid>


          <Grid item xs={12} md={6}>
            <Typography
              fontWeight={600}
              color="primary.main"
              mb={1}
            >
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </Typography>

            <Typography variant="h2" fontWeight={600} color="#1B3C74" mb={2}>
              Patient <Box component="span" color="primary.main">Caring</Box>
            </Typography>

            <Typography color="#77829D" lineHeight={1.8} mb={3}>
              Our goal is to deliver quality of care in a courteous, respectful,
              and compassionate manner. We hope you will allow us to care for
              you and strive to be the first and best choice for healthcare.
            </Typography>

            <List sx={{ padding: 0 }}>
              {[
                "Stay Updated About Your Health",
                "Check Your Results Online",
                "Manage Your Appointments",
              ].map((text, idx) => (
                <ListItem disableGutters key={idx}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <Box
                      component="img"
                      src={tick}
                      alt="tick icon"
                      height={22}
                      width={22}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      fontSize: { xs: 14, md: 18 },
                      fontWeight: 500,
                      color: "#1B3C74",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
