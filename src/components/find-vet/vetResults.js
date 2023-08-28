/** @format */

import React from "react";
import { Grid, Box, Container } from "@mui/material";
import Card from "./card";

function VetResults() {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: 5,
        }}
      >
        <Grid container rowSpacing={5} columnSpacing={2}>
          <Grid item xs={4}>
            <Card />
          </Grid>
          <Grid item xs={4}>
            <Card />
          </Grid>
          <Grid item xs={4}>
            <Card />
          </Grid>

          <Grid item xs={4}>
            <Card />
          </Grid>
          <Grid item xs={4}>
            <Card />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default VetResults;
