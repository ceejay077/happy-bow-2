/** @format */

import React from "react";
import { Container, Box, Avatar, Typography, Stack } from "@mui/material";

function ShowProfile() {
  return (
    <div>
      <Container
        sx={{
          background: "linear-gradient(to bottom, #0074D9, #7FDBFF)",
          borderRadius: 10,
          mb: 4,
        }}
      >
        <Box
          sx={{
            // width: 300,
            // height: 300,
            display: "flex",
            justifyContent: "center",
            p: 7,
          }}
        >
          <Avatar sx={{ width: 96, height: 96 }} />
        </Box>
      </Container>
      <Container
        sx={{
          borderRadius: 10,
          mb: 4,
          boxShadow: "0px 2px 4px rgba(0.1, 0.1, 0.1, 0.2)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 7,
          }}
        >
          <Stack
            direction={"column"}
            spacing={2}
            sx={{
              textAlign: "left",
            }}
          >
            <Typography variant='body1'>
              Name :{" "}
              <span style={{ color: "grey", textDecoration: "none" }}>
                Naveen Chamara
              </span>
            </Typography>
            <Typography>
              Address : <span>701/b galkanda Horampleaa</span>
            </Typography>
            <Typography>
              Phone Number : <span>0779153971</span>
            </Typography>
            <Typography>
              Status : <span>active</span>
            </Typography>
          </Stack>
        </Box>
      </Container>
    </div>
  );
}

export default ShowProfile;
