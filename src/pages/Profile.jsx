/** @format */

import React from "react";
import { useState } from "react";
import ShowProfile from "../components/profile/showProfile";
import EditProfile from "../components/profile/editProfile";
import { Button } from "@mui/material";

const Profile = () => {
  const [active, setActive] = useState("1");
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Profile page</h1>
      <nav>
        <Button
          onClick={() => setActive("1")}
          sx={{ p: 1, m: 2 }}
          variant='outlined'
        >
          your profile
        </Button>
        <Button
          onClick={() => setActive("2")}
          sx={{ p: 1, m: 2 }}
          variant='outlined'
        >
          edit profile
        </Button>
      </nav>
      <div>
        {active === "1" && <ShowProfile />}
        {active === "2" && <EditProfile />}
      </div>
    </div>
  );
};

export default Profile;
