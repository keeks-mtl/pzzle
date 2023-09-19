import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import puzzleIdea from "../Assets/puzzle-idea.png";

const Disclaimers = () => {
  return (
    <>
      {/* Disclaimer Section */}
      <Grid container justifyContent="center" mt={8}>
        {/* Disclaimer Text */}
        <Grid item xs={10} sm={6} lg={5} xl={3}>
          <Box
            p={5}
            sx={{
              backgroundColor: "#fbf8f6",
              textAlign: "center",
            }}
            className="disclaimer-box"
          >
            <Typography variant="h3">Disclaimer</Typography>
            <Typography variant="subtitle2" sx={{ mt: 2, mb: 2 }}>
              This site is purely for educational purposes. None of the content
              is owned by pzzle.
            </Typography>
          </Box>
        </Grid>
        {/* Disclaimer Image (visible on larger screens) */}
        <Grid
          item
          sm={6}
          lg={5}
          xl={3}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Box
            sx={{
              backgroundColor: "#fbf8f6",
              backgroundImage: `url(${puzzleIdea})`,
              backgroundPosition: "center",
            }}
            className="disclaimer-img-box"
          ></Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Disclaimers;
