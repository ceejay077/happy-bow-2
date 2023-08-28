/** @format */

import React from "react";
import { Typography, Container, Button } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Reported() {
  return (
    <div>
      <div>
        <Container sx={{ width: 600 }}>
          <Typography variant='h5'>
            Sorry to here that your pet is missing. We will check this request
            and post on our community ASAP
          </Typography>
        </Container>

        <div>
          <Button variant='contained' sx={{ mt: 3, width: 400 }}>
            Done
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Reported;
