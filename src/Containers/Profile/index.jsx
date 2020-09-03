import React from "react";
import { connect } from "react-redux";
import PageWrapper from "../../Components/PageWrapper";
import Grid from "@material-ui/core/Grid";
import ProfileInfo from "./ProfileInfo";
import ProfileOtherInfo from "./ProfileOtherInfo";
import "./index.scss";

const Profile = ({ user }) => {
  return (
    <PageWrapper>
      <Grid container spacing={2}>
        <ProfileInfo user={user} />
        <ProfileOtherInfo />
      </Grid>
    </PageWrapper>
  );
};

const mapStateToProps = (state) => ({
  user: state.userData.user,
});

export default connect(mapStateToProps, null)(Profile);
