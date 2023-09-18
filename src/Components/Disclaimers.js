import React from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import puzzlePieces from "../Assets/jigsaw-puzzle-pieces.png";
import puzzleIdea from "../Assets/puzzle-idea.png";

const Disclaimers = () => {
  return <>
        <Grid container justifyContent="center" mt={8}>
        <Grid item sm={5} lg={3}>
          <Box
            p={5}
            sx={{
              height: "540px",
              backgroundColor: "#fbf8f6",
              borderTopLeftRadius: "5%",
              borderBottomLeftRadius: "5%",
              textAlign: "center",
            }}
          >
            <Typography variant="h3">Disclaimer</Typography>
            <Typography variant="subtitle2" sx={{ mt: 2, mb: 2 }}>
              This site is purely for educational purposes. None of the content is ownedby pzzle.
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={5} lg={3}>
          <Box
            sx={{
              height: "620px",
              backgroundColor: "#fbf8f6",
              borderTopRightRadius: "5%",
              borderBottomRightRadius: "5%",
            }}
          >
            <img
              src={puzzleIdea}
              alt="illustration of people working on a puzzle"
              style={{ height: "98%", margin: "auto", position:"relative", top:"1%"}}
            />
          </Box>
        </Grid>
      </Grid>
  </>;
};

export default Disclaimers;
