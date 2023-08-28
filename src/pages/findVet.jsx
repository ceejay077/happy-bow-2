/** @format */

import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import FindVet from "../components/find-vet/findVet";
import VetResults from "../components/find-vet/vetResults";

const VetFind = () => {
  const [active, setActive] = useState("1");

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <div>{active === "1" && <FindVet />}</div>
        <div>
          {active === "1" && (
            <Button
              variant='contained'
              color='success'
              onClick={() => setActive("2")}
              sx={{ mt: 2, width: 400 }}
            >
              Find
            </Button>
          )}
        </div>
        <div>{active === "2" && <VetResults />}</div>
      </div>
    </div>
  );
};

export default VetFind;
