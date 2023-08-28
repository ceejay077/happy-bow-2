/** @format */

import React from "react";
import { Box, Avatar, Typography, Button } from "@mui/material";

function Card() {
  return (
    <div>
      <Box
        sx={{
          width: 350,
          height: 200,
          position: "relative",
          borderRadius: 5,
          boxShadow: "0px 2px 4px rgba(0.2, 0, 0, 0.2)",
          transition: "background-color 0.3s", // Smooth transition on hover
          ":hover": {
            boxShadow: "0px 2px 4px rgba(0.2, 0, 0, 0.4)",
          },
        }}
      >
        <Avatar
          sx={{
            width: 56,
            height: 56,
            position: "absolute",
            left: "50%",
            top: "20%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <Typography
          sx={{
            // width: 56,
            // height: 56,
            position: "absolute",
            left: "50%",
            top: "45%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Dr. Kanishka
        </Typography>
        <Typography
          variant='body2'
          sx={{
            position: "absolute",
            left: "50%",
            top: "62%",
            transform: "translate(-50%, -50%)",
            color: "grey",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adip .
        </Typography>
        <Button
          sx={{
            position: "absolute",
            left: "50%",
            top: "82%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Contact
        </Button>
      </Box>
    </div>
  );
}

export default Card;
