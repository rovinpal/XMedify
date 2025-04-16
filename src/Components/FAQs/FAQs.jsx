import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import faqBanner from "../../Assets/faqs-banner.jpg";
import CustomizedAccordions from "../Accordian/Accordian";

export default function FAQs() {
  const faqs = [
    {
      question: "Why choose our medical for your family?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Why we are different from others?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Trusted & experienced senior care & love",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How to get appointment for emergency cases?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];

  return (
    <Box py={8}>
      <Container maxWidth="xl">
        <Typography
          fontWeight={600}
          fontSize={20}
          textAlign="center"
          mb={1}
          color="#2aa7ff"
        >
          Get Your Answer
        </Typography>
        <Typography textAlign="center" variant="h2" mb={4} color="#1b3c74" fontWeight={600} mt={3}>
          Frequently Asked Questions
        </Typography>

        <Grid container alignItems="center" spacing={5} pl={15}>
          <Grid item xs={12} md={6}>
            <Box component="img" src={faqBanner} width={1} height="500px" />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box maxWidth={500} mx="auto">
              <CustomizedAccordions data={faqs} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
