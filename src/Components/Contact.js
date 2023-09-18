import React from "react";
import { Grid, Box, TextField, Typography, FormControl, Button } from "@mui/material";
import puzzleQ from "../Assets/puzzle-question.png";

const Contact = () => {
  return (
    <>
      <Grid container justifyContent="center" mt={8}>
        <Grid item xs={12} sm={6} lg={5} xl={3}>
          <Box
            p={5}
            sx={{
              height: "540px",
              backgroundColor: "#fbf8f6",
              textAlign: "left",
            }}
            className="contact-box"
          >
            <Typography variant="h3">Contact Us</Typography>
            <Typography variant="subtitle2" sx={{ mt: 2, mb: 2 }}>
              We're here to help! Send us your query via the form below or send
              us an email at{" "}
              <a href="mailto:helpdesk@pzzle.com" className="orange-link">helpdesk@pzzle.com</a> for any
              issue your're facing
            </Typography>
            <FormControl sx={{width: "85%"}}>
              <TextField
                required
                id="name"
                label="Name"
                variant="filled"
                margin="normal"
              ></TextField>
              <TextField
                required
                id="email"
                label="Email"
                variant="filled"
                margin="normal"
              ></TextField>
              <TextField
                required
                fullWidth
                id="message"
                label="Type your message here"
                variant="filled"
                margin="normal"
                multiline
                rows={5}
                maxRows={5}
                sx={{  resize: "none" }}
              ></TextField>
              <Button    variant="contained"
                disableElevation
                sx={{ backgroundColor: "#ea5d2d" }}> Submit </Button>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={5} xl={3}>
          <Box
          className="contact-image-box"
            sx={{
              height: "620px",
              backgroundColor: "#ea5d2d",
              display:"flex"
            }}
          >
            <img
              src={puzzleQ}
              alt="illustration of people working on a puzzle"
              style={{ height: "50%", margin: "auto", position:"relative" }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
