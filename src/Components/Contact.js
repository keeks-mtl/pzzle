import React from "react";
import { Grid, Box, TextField, Typography, FormControl, Button } from "@mui/material";
import puzzleQ from "../Assets/puzzle-question.png";

const Contact = () => {
  return (
    <>
      <Grid container justifyContent="center" mt={8}>
        <Grid item sm={5} lg={3}>
          <Box
            p={5}
            sx={{
              height: "540px",
              backgroundColor: "#fbf8f6",
              borderTopLeftRadius: "5%",
              borderBottomLeftRadius: "5%",
              textAlign: "left",
            }}
          >
            <Typography variant="h3">Contact Us</Typography>
            <Typography variant="subtitle2" sx={{ mt: 2, mb: 2 }}>
              We're here to help! Send us your query via the form below or send
              us an email at{" "}
              <a href="mailto:helpdesk@pzzle.com">helpdesk@pzzle.com</a> for any
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
                rows={7}
                maxRows={7}
                sx={{  resize: "none" }}
              ></TextField>
              <Button    variant="contained"
                disableElevation
                sx={{ backgroundColor: "#ea5d2d" }}> Submit </Button>
            </FormControl>
          </Box>
        </Grid>
        <Grid item sm={5} lg={3}>
          <Box
            sx={{
              height: "620px",
              backgroundColor: "#ea5d2d",
              borderTopRightRadius: "5%",
              borderBottomRightRadius: "5%",
            }}
          >
            <img
              src={puzzleQ}
              alt="illustration of people working on a puzzle"
              style={{ height: "50%", margin: "auto", position:"relative", top:"20%" }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
