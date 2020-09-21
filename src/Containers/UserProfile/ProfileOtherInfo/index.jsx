import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Education from "./Education";
import { Divider } from "@material-ui/core";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";
import {
  getEducation,
  getExperience,
  getSoftSkills,
  getHardSkills, getLanguages,
} from "../../../Redux/Profile/actions";
import Experience from "./Experience";
import SoftSkills from "./SoftSkills";
import HardSkills from "./HardSkills";

const ProfileOtherInfo = ({
  user,
  success,
  /* error, */
  education,
  experience,
  hardSkills,
  softSkills,
  getEducation,
  getExperience,
  getHardSkills,
  getSoftSkills,
  getLanguages,
}) => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    getEducation({ id: user.id });
    getExperience({ id: user.id });
    getSoftSkills({ id: user.id });
    getHardSkills({ id: user.id });
    getLanguages({ id: user.id })
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (success !== null) {
      enqueueSnackbar(success.message, { variant: "success" });
    }
    //eslint-disable-next-line
  }, [success]);

  return (
    <>
      <Grid item lg={9} xl={8} md={8} sm={12} xs={12}>
        <Paper className="rightSection" elevation={0}>
          <Education educationList={education} id={user.id} />
          <Divider />
          <Experience experienceList={experience} id={user.id} />
          <Divider />
          <SoftSkills skills={softSkills} id={user.id} />
          <HardSkills skills={hardSkills} id={user.id} />
        </Paper>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => ({
  experience: state.profileData.experience,
  education: state.profileData.education,
  hardSkills: state.profileData.hardSkills,
  softSkills: state.profileData.softSkills,
  success: state.profileData.success,
  error: state.profileData.error,
});

function mapDispatchToProps(dispatch) {
  return {
    getEducation: (data) => dispatch(getEducation(data)),
    getExperience: (data) => dispatch(getExperience(data)),
    getHardSkills: (data) => dispatch(getHardSkills(data)),
    getSoftSkills: (data) => dispatch(getSoftSkills(data)),
    getLanguages: (data) => dispatch(getLanguages(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileOtherInfo);
