import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Education from "./Education";
import { Divider } from "@material-ui/core";
import Experience from "./Experience";
import SoftSkills from "./SoftSkills";
import HardSkills from "./HardSkills";

const ProfileOtherInfo = ({ user }) => {
  return (
    <>
      <Grid item lg={9} xl={4} md={8} sm={12} xs={12}>
        <Paper className="rightSection" elevation={0}>
          <Education educationList={user.education} />
          <Divider />
          <Experience experienceList={user.experience} />
          <Divider />
          <SoftSkills skills={user.softSkills} />
          <HardSkills skills={user.hardSkills} />
        </Paper>
      </Grid>
    </>
  );
};

export default ProfileOtherInfo;
