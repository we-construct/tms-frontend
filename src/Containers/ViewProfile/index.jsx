import React from "react";
import { connect } from "react-redux";
import PageWrapper from "../../Components/PageWrapper";
import Grid from "@material-ui/core/Grid";
import ProfileInfo from "./ProfileInfo";
import ProfileOtherInfo from "./ProfileOtherInfo";
import "../UserProfile/index.scss";

const ViewProfile = ({ user }) => {
  return (
    <PageWrapper>
      {
        user === null ? null : (
        <Grid container spacing={2}>
          <ProfileInfo user={user} />
          <ProfileOtherInfo />
        </Grid>
        )
      }
    </PageWrapper>
  );
};

const mapStateToProps = (state) => ({
  user: state.adminData.currentUser,
});

export default connect(mapStateToProps, null)(ViewProfile);
