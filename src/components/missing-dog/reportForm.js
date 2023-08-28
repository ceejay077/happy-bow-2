/** @format */

import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
  Container,
  Box,
  TextField,
  Typography,
  Stack,
  Button,
  Divider,
} from "@mui/material";

function ReportForm() {
  return (
    <div>
      <Container>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 500,
              height: 120,
              display: "flex",
              justifyContent: "center",
              pt: 1,

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
                Let community know about your missed dog
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
              <TextField size='small' sx={{ width: 400 }} label='Location' />
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker sx={{ width: 400 }} />
                </LocalizationProvider>
              </div>

              <TextField size='small' sx={{ width: 400 }} label='Reason' />
              <TextField size='small' sx={{ width: 400 }} label='Comments' />

              <Button variant='outlined' component='label'>
                Upload image of your dog
                <input hidden accept='image/*' multiple type='file' />
              </Button>

              <Divider sx={{ m: 5 }} />
            </Stack>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default ReportForm;
