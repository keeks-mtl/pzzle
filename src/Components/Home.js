import React from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import puzzlePieces from "../Assets/jigsaw-puzzle-pieces.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Grid container mt={8}>
      <Grid item lg={4}>
        <Box
          sx={{
            height: 640,
            backgroundImage: `url(${puzzlePieces})`,
            backgroundPosition: "center",
          }}
        ></Box>
      </Grid>
      <Grid item lg={4}>
        <Box
          sx={{
            height: 640,
          }}
        >
          <Typography variant="h1" sx={{ fontSize: "12rem" }}>
            pzzle
          </Typography>
          <Grid container spacing={2} justifyContent="space-around">
            <Grid item lg={8}>
              <Typography variant="h2" sx={{ fontSize: "2rem" }}>
                Get an amazing new game play experience
              </Typography>
              <Typography variant="body2" mt={2}>
                We guarantee you will enjoy what pzzle has to offer. Just click
                on this button and start playing!
              </Typography>
            </Grid>
            <Grid item lg={4} mt={3}>
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
      <Grid item lg={4}>
        <Box
          sx={{
            height: 640,
            backgroundImage: `url(${puzzlePieces})`,
            backgroundPosition: "65% 60%",
          }}
        ></Box>
      </Grid>
    </Grid>
  );
};

export default Home;
