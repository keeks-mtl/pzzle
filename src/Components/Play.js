import React from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Typography, Stack, Button } from "@mui/material";
import ExtensionIcon from "@mui/icons-material/Extension";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

const Play = () => {
  return (
    <div>
      <Grid container mt={8} justifyContent="center">
        <Grid item xs={12} sm={10} md={6} lg={6}>
          <Box className="jigsaw-box">
            <JigsawPuzzle
              imageSrc="https://static.vecteezy.com/system/resources/previews/005/018/282/non_2x/colored-puzzle-pieces-in-series-vector.jpg"
              rows={3}
              columns={4}
            />
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={4} lg={3}>
          <Box
            sx={{
              backgroundColor: "#fbf8f6",
              borderRadius: "5%",
              display: "grid",
            }}
          >
            <ExtensionIcon
              sx={{
                fontSize: "15rem",
                color: "#ea5d2d",
                justifySelf: "center",
                paddingTop: "10px",
              }}
            />
            <Typography variant="h2" sx={{ textAlign: "center" }}>
              To Play:
            </Typography>
            <Typography
              variant="subtitle1"
              px={4}
              sx={{ textAlign: "left", fontSize: "1rem" }}
            >
              Move the puzzle pieces to complete the image.
            </Typography>
            <Typography
              variant="subtitle1"
              pl={4}
              py={2}
              sx={{ textAlign: "left", fontSize: "1rem" }}
            >
              Best of luck with solving!
            </Typography>
            <Link to="/rules" style={{ justifySelf: "center" }}>
              <Button
                variant="contained"
                disableElevation
                sx={{ backgroundColor: "#ea5d2d", marginBottom: "30px" }}
              >
                {" "}
                Rules{" "}
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
      ;
    </div>
  );
};

export default Play;
