/** @format */

import React from "react";
import { useState } from "react";
import ReportForm from "../components/missing-dog/reportForm";
import { Button } from "@mui/material";
import Reported from "../components/missing-dog/reported";

const MissingDog = () => {
  const [active, setActive] = useState("1");
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        {active === "1" && <ReportForm />}
        {active === "1" && (
          <Button
            variant='contained'
            sx={{ mt: 3, width: 400 }}
            onClick={() => setActive("2")}
          >
            Submit
          </Button>
        )}
        {active === "2" && <Reported />}
      </div>
    </div>
  );
};

export default MissingDog;
