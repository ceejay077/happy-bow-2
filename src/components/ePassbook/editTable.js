/** @format */

import React from "react";
import {
  Container,
  Box,
  TextField,
  Typography,
  Stack,
  Button,
  Divider,
} from "@mui/material";

function EditTable() {
  return (
    <div>
      <Container>
        <Container
          sx={{
            //   bgcolor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            //   minHeight: "100vh",
          }}
        >
          <Box
            sx={{
              width: 500,
              height: 120,
              display: "flex",
              justifyContent: "center",
              // alignItems: "center",
              pt: 1,

              // boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                width: 450,
                height: 100,
                background: "linear-gradient(to bottom, #0074D9, #7FDBFF)",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography variant='h6' sx={{ pt: 2 }}>
                Update Your ePassbook
              </Typography>
            </Box>
          </Box>
        </Container>
        <div>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack spacing={2}>
              <TextField
                size='small'
                sx={{ width: 400 }}
                label='vaccinaction'
              />
              <TextField size='small' sx={{ width: 400 }} label='date' />
              <TextField size='small' sx={{ width: 400 }} label='vet' />
              <TextField
                size='small'
                sx={{ width: 400 }}
                label='next vaccination date'
              />
              <Divider sx={{ m: 5 }} />
              <Button variant='contained' color='success'>
                Submit
              </Button>
            </Stack>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default EditTable;
