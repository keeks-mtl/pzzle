import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import lightbulb from "../Assets/think-puzzle.png";
import moveImg from "../Assets/puzzle-move.png";
import workImg from "../Assets/working-puzzle.png";
import fitPuzzle from "../Assets/puzzle-fit.png";
import { Link } from "react-router-dom";

const Rules = () => {
  return (
    <>
    <Grid container mt={8}>
      <Grid item lg={3}>
        <Box
          mx={6}
          sx={{
            border: "1px dashed grey",
            height: "580px",
            backgroundColor: "#fbfbfb",
            borderRadius: "5%",
          }}
        >
          <img src={lightbulb} alt="illustration of a lightbulb where part of it is a puzzle piece" style={{ height: "300px" }} />
          <Typography variant="h4" p={4}> Look at the puzzle and think of how you might imagine the puzzle to fit</Typography>
        </Box>
      </Grid>
      <Grid item lg={3}>
        <Box
          Box
          mx={6}
          sx={{
            border: "1px dashed grey",
            height: "580px",
            backgroundColor: "#fbfbfb",
            borderRadius: "5%",
          }}
        >
          <img src={moveImg} alt="illustration of two puzzle pieces and an arrow showing movement" style={{ height: "300px" }} />
          <Typography variant="h4" p={4}>Move the puzzle pieces around to try to find where they belong</Typography>
        </Box>
      </Grid>
      <Grid item lg={3}>
        <Box
          Box
          mx={6}
          sx={{
            border: "1px dashed grey",
            height: "580px",
            backgroundColor: "#fbfbfb",
            borderRadius: "5%",
          }}
        >
         <img src={workImg} alt="illustration of people working on a puzzle" style={{ height: "300px" }} />
         <Typography variant="h4" p={4}> Once a puzzle piece is in the correct position it will lock into place and can no longer be moved</Typography>
        </Box>
      </Grid>
      <Grid item lg={3}>
        <Box
          Box
          mx={6}
          sx={{
            border: "1px dashed grey",
            height: "580px",
            backgroundColor: "#fbfbfb",
            borderRadius: "5%",
          }}
        >
          <img src={fitPuzzle} alt="picture of puzzle pieces fitting together" style={{ height: "300px" }} />
          <Typography variant="h4" p={4}>Try to find the correct place for all the puzzle pieces to finish the puzzle</Typography>
        </Box>
      </Grid>
    </Grid>
    <Grid container mt={20}>
        <Grid item lg={12}>
            <Link to="/play"> <Button variant="contained"
                disableElevation 
                sx={{ backgroundColor: "#ea5d2d", width:"300px" }}> Play Now </Button> </Link>
        </Grid>
    </Grid>
    </>
  );
};

export default Rules;
