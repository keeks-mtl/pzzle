import React from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import homePuzzle from "../Assets/home-banner.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Grid container mt={8}>
      {/* Left Banner */}
      <Grid item sm={3} lg={4} xl={4}>
        <Box
          className="home-banner-box"
          sx={{
            backgroundImage: `url(${homePuzzle})`,
            backgroundPosition: "99% 40%",
            xs: "none",
          }}
        ></Box>
      </Grid>
      {/* Center Content */}
      <Grid item xs={10} sm={6} lg={4} xl={4}>
        <Box
          className="home-heading-box"
          sx={{
            height: 630,
            paddingLeft: "5%",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: "12rem" }}>
            pzzle
          </Typography>
          <Grid container spacing={2} justifyContent="space-around">
            <Grid item lg={8}>
              <Typography variant="h2" sx={{ fontSize: "2rem" }}>
                Get an amazing new gameplay experience
              </Typography>
              <Typography variant="body2" mt={2}>
                We guarantee you will enjoy what pzzle has to offer. Just click
                on this button and start playing!
              </Typography>
            </Grid>
            <Grid item lg={4} mt={3}>
              {/* Play Now Button with Link */}
              <Link to="/play">
                <Button
                  variant="contained"
                  disableElevation
                  sx={{ backgroundColor: "#ea5d2d" }}
                >
                  Play Now
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      {/* Right Banner (Mirrored) */}
      <Grid item xs={12} sm={3} lg={4} xl={4}>
        <Box
          className="home-banner-box"
          sx={{
            backgroundImage: `url(${homePuzzle})`,
            backgroundPosition: "99% 40%",
            transform: "scaleX(-1)",
          }}
        ></Box>
      </Grid>
    </Grid>
  );
};

export default Home;
