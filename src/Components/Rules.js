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
      <Grid item xs={12} md={6} lg={3}>
        <Box
        className="rules-box"
          mx={6}
          my={4}
          sx={{
            height: "580px",
            backgroundColor: "#fbfbfb",
            borderRadius: "5%",
            display:"grid"
          }}
        >
          <img src={lightbulb} alt="illustration of a lightbulb where part of it is a puzzle piece" style={{ height: "250px", justifySelf:"center", marginTop:"30px" }} />
          <Typography variant="h4" p={4}> Look at the puzzle and think of how you might imagine the puzzle to fit</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Box
          Box
          mx={6}
          my={4}
          sx={{
            height: "580px",
            backgroundColor: "#fbfbfb",
            borderRadius: "5%",
            display:"grid"
          }}
          className="rules-box"
        >
          <img src={moveImg} alt="illustration of two puzzle pieces and an arrow showing movement" style={{ height: "250px", justifySelf:"center", marginTop:"30px" }} />
          <Typography variant="h4" p={4}>Move the puzzle pieces around to try to find where they belong</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Box
          Box
          mx={6}
          my={4}
          sx={{
            height: "580px",
            backgroundColor: "#fbfbfb",
            borderRadius: "5%",
            display:"grid"
          }}
          className="rules-box"
        >
         <img src={workImg} alt="illustration of people working on a puzzle" style={{ height: "250px", justifySelf:"center", marginTop:"30px" }} />
         <Typography variant="h4" p={4}> When in the correct position, the puzzle piece can no longer be moved</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Box
          Box
          mx={6}
          my={4}
          sx={{
            height: "580px",
            backgroundColor: "#fbfbfb",
            borderRadius: "5%",
            display:"grid"
          }}
          className="rules-box"
        >
          <img src={fitPuzzle} alt="picture of puzzle pieces fitting together" style={{ height: "250px", justifySelf:"center", marginTop:"30px" }} />
          <Typography variant="h4" p={4}>Try to find the correct place for all the puzzle pieces to finish the puzzle</Typography>
        </Box>
      </Grid>
    </Grid>
    <Grid container mt={20} justifyContent="center">
        <Grid item lg={2} >
            <Link to="/play"> <Button variant="contained"
                disableElevation 
                sx={{ backgroundColor: "#ea5d2d", width:"300px" }}> Play Now </Button> </Link>
        </Grid>
    </Grid>
    </>
  );
};

export default Rules;
