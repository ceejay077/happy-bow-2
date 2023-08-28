/** @format */

import React from "react";
import {
  Container,
  Box,
  Avatar,
  Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";

function EditProfile() {
  return (
    <div>
      <Container
        sx={{
          borderRadius: 10,
          mb: 2,
          background: "linear-gradient(to bottom, #0074D9, #7FDBFF)",
        }}
      >
        <Box
          sx={{
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
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 4,
          }}
        >
          <Stack
            direction={"column"}
            spacing={2}
            sx={{
              textAlign: "left",
            }}
          >
            <TextField
              label='Name'
              id='outlined-start-adornment'
              sx={{ m: 1, width: "50ch" }}
              size='small'
            />
            <TextField
              label='Address'
              id='outlined-start-adornment'
              sx={{ m: 1, width: "50ch" }}
              size='small'
            />
            <TextField
              label='Phone'
              id='outlined-start-adornment'
              sx={{ m: 1, width: "50ch" }}
              size='small'
            />
            <TextField
              label='Status'
              id='outlined-start-adornment'
              sx={{ m: 1, width: "50ch" }}
              size='small'
            />
            <Button variant='contained' color='success'>
              Save
            </Button>
          </Stack>
        </Box>
      </Container>
    </div>
  );
}

export default EditProfile;
