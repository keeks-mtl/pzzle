import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

// Importing images
import lightbulb from "../Assets/think-puzzle.png";
import moveImg from "../Assets/puzzle-move.png";
import workImg from "../Assets/working-puzzle.png";
import fitPuzzle from "../Assets/puzzle-fit.png";

const Rules = () => {
  return (
    <>
      {/* Rules Grid Container */}
      <Grid container mt={8}>
        {/* Rule 1 */}
        <Grid item xs={12} md={6} lg={3}>
          <Box
            className="rules-box"
            mx={6}
            my={4}
            sx={{
              height: "580px",
              backgroundColor: "#fbfbfb",
              borderRadius: "5%",
              display: "grid",
            }}
          >
            <img
              src={lightbulb}
              alt="Lightbulb puzzle illustration"
              style={{ height: "250px", justifySelf: "center", marginTop: "30px" }}
            />
            <Typography variant="h4" p={4}>
              Look at the puzzle and think about how the pieces might fit
            </Typography>
          </Box>
        </Grid>
        {/* Rule 2 */}
        <Grid item xs={12} md={6} lg={3}>
          <Box
            className="rules-box"
            mx={6}
            my={4}
            sx={{
              height: "580px",
              backgroundColor: "#fbfbfb",
              borderRadius: "5%",
              display: "grid",
            }}
          >
            <img
              src={moveImg}
              alt="Puzzle piece movement illustration"
              style={{ height: "250px", justifySelf: "center", marginTop: "30px" }}
            />
            <Typography variant="h4" p={4}>
              Move the puzzle pieces around to find their correct positions
            </Typography>
          </Box>
        </Grid>
        {/* Rule 3 */}
        <Grid item xs={12} md={6} lg={3}>
          <Box
            className="rules-box"
            mx={6}
            my={4}
            sx={{
              height: "580px",
              backgroundColor: "#fbfbfb",
              borderRadius: "5%",
              display: "grid",
            }}
          >
            <img
              src={workImg}
              alt="People working on a puzzle illustration"
              style={{ height: "250px", justifySelf: "center", marginTop: "30px" }}
            />
            <Typography variant="h4" p={4}>
              Once a piece is in the correct position, it can't be moved again
            </Typography>
          </Box>
        </Grid>
        {/* Rule 4 */}
        <Grid item xs={12} md={6} lg={3}>
          <Box
            className="rules-box"
            mx={6}
            my={4}
            sx={{
              height: "580px",
              backgroundColor: "#fbfbfb",
              borderRadius: "5%",
              display: "grid",
            }}
          >
            <img
              src={fitPuzzle}
              alt="Puzzle pieces fitting together illustration"
              style={{ height: "250px", justifySelf: "center", marginTop: "30px" }}
            />
            <Typography variant="h4" p={4}>
              Try to place all puzzle pieces correctly to complete the puzzle
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* Play Now Button */}
      <Grid container mt={20} justifyContent="center">
        <Grid item lg={2}>
          <Link to="/play">
            <Button
              variant="contained"
              disableElevation
              sx={{ backgroundColor: "#ea5d2d", width: "300px" }}
            >
              Play Now
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Rules;