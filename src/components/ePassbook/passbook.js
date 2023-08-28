/** @format */

import React from "react";
import { useState } from "react";
import { Typography, Divider, Button } from "@mui/material";
import TablePassbook from "./table";
import EditTable from "./editTable";

function Passbook() {
  const [active, setActive] = useState("1");
  return (
    <div>
      <Typography variant='h4'>Your e Passbook</Typography>
      <div>
        <nav>
          <Button
            onClick={() => setActive("1")}
            sx={{ p: 1, m: 2 }}
            variant='outlined'
          >
            ePassbook
          </Button>
          <Button
            onClick={() => setActive("2")}
            sx={{ p: 1, m: 2 }}
            variant='outlined'
          >
            edit ePassbook
          </Button>
        </nav>
      </div>
      <Divider sx={{ m: 3 }} />
      <div>
        {active === "1" && <TablePassbook />}
        {active === "2" && <EditTable />}
      </div>
    </div>
  );
}

export default Passbook;
