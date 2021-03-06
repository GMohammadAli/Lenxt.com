import { Grid, Typography, Button, Box, Container } from "@mui/material";
import Image from "../components/Image"
import { makeStyles } from "@mui/styles";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const useStyles = makeStyles({
  subtitle: {
    color: "#3867a8",
  },
});


function Home() {
 const classes = useStyles();
  return (
    <Box>
      <Grid
        container
        // direction="column-reverse"
      >
        <Grid item md={6} style={{ display: "flex", padding: "5rem" }}>
          <Container
            maxWidth="xs"
            style={{ justifyContent: "center", alignContent: "center" }}
          >
            <Typography
              variant="subtitle2"
              className={classes.subtitle}
              gutterBottom
            >
              Converse. Chat. Connect
            </Typography>
            <Typography variant="h4" component="h5" gutterBottom>
              Chat & discover the world with
              <Typography
                component="b"
                variant="h4"
                color="secondary"
                style={{ display: "inline", fontWeight: "600" }}
              >
                {" "}
                Lenxt
              </Typography>
            </Typography>
            <Typography variant="subtitle1" component="div" gutterBottom >
              Smart application for smart users.connect with ur close ones
              through lenxt. Getting started with computer vision. Lenxt
              provides u the speed and ease you need
            </Typography>
            <Button
              type="submit"
              color="secondary"
              href="/signUp"
              variant="contained"
              size="md"
              endIcon={<KeyboardArrowRightIcon />}
            >
              Get Started
            </Button>
          </Container>
        </Grid>
        {/* Image Section */}
        <Image src="/landing.png" />
      </Grid>
    </Box>
  );
}

export default Home;
