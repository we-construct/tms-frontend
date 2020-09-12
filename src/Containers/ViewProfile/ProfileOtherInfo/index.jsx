import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Education from "./Education";
import { connect } from "react-redux";
import { Divider } from "@material-ui/core";
import { adminGetProfileData } from "../../../Redux/APanel/actions";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Experience from "./Experience";
import SoftSkills from "./SoftSkills";
import HardSkills from "./HardSkills";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const ProfileOtherInfo = ({ user, adminGetProfileData, profData }) => {
  const classes = useStyles();

  useEffect(() => {
    adminGetProfileData({ id: user.id });
    //eslint-disable-next-line
  }, []);
  
  return (
    <>
      <Grid item lg={9} xl={8} md={8} sm={12} xs={12}>
        <Paper className="rightSection" elevation={0}>
          {profData.languages === undefined &&
          profData.education === undefined &&
          profData.experience === undefined &&
          profData.softSkills === undefined &&
          profData.hardSkills === undefined ? (
            <div className={classes.root}>
              <LinearProgress color="secondary" />
            </div>
          ) : (
            <>
              <Education educationList={profData.education} />
              <Divider />
              <Experience experienceList={profData.experience} />
              <Divider />
              <SoftSkills skills={profData.softSkills} />
              <HardSkills skills={profData.hardSkills} />
            </>
          )}
        </Paper>
      </Grid>
    </>
  );
};
const mapStateToProps = (state) => ({
  profData: state.adminData.userProfile,
});

function mapDispatchToProps(dispatch) {
  return {
    adminGetProfileData: (data) => dispatch(adminGetProfileData(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileOtherInfo);
