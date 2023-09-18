import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Typography, Stack, Button } from "@mui/material";
import ExtensionIcon from "@mui/icons-material/Extension";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

const Play = () => {
  const [message, setMessage] = useState("Solve the pzzle!");

  const solve = () => {
    setMessage("Congratulations!!");
  };

  return (
    <div>
      <Grid container mt={8}>
        <Grid item lg={3}>
          <Box
            sx={{
              height: "620px",
              backgroundColor: "#fbfbfb",
              borderRadius: "5%",
              marginLeft: "2rem",
            }}
          >
            <ExtensionIcon sx={{ fontSize: "15rem", color: "#ea5d2d" }} />
            <Typography variant="h2" sx={{ textAlign: "center" }}>
              To Play:
            </Typography>
            <Typography
              variant="subtitle1"
              px={4}
              sx={{ textAlign: "left", fontSize: "1rem" }}
            >
              Move the puzzle pieces to complete the image. Once a puzzle piece
              is in the correct position it is locked and can no longer be
              moved.
            </Typography>
            <Typography
              variant="subtitle1"
              pl={4}
              pt={2}
              sx={{ textAlign: "left", fontSize: "1rem" }}
            >
              Best of luck with solving!
            </Typography>
            <Link to="/rules">
            <Button variant="contained"
                disableElevation
                sx={{ backgroundColor: "#ea5d2d" }}> Rules </Button>
            </Link>
            
          </Box>
        </Grid>
        <Grid item lg={6}>
          {/* <Box pt={6} sx={{ border: "1px dashed grey", height: "580px" }}> */}
          <Box
            pt={6}
            sx={{
              height: "580px",
            }}
          >
            <JigsawPuzzle
              imageSrc="https://static.vecteezy.com/system/resources/previews/005/018/282/non_2x/colored-puzzle-pieces-in-series-vector.jpg"
              rows={3}
              columns={4}
              onSolved={solve}
            />
          </Box>
        </Grid>
        {/* <Grid item lg={3}>
          <Box
            className="message-box"
            sx={{
                backgroundColor: "#fbfbfb",
              borderRadius: "5%",
              height: "620px",
              marginRight: "2rem",
            }}
          >
            <Typography className="message-text" sx={{ fontSize: "3rem" }}>
              {message}
            </Typography>
          </Box>
        </Grid> */}
      </Grid>
      ;
    </div>
  );
};

export default Play;
