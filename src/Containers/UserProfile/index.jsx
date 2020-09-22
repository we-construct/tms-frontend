import React, { useEffect } from "react";
import { connect } from "react-redux";
import PageWrapper from "../../Components/PageWrapper";
import Grid from "@material-ui/core/Grid";
import ProfileInfo from "./ProfileInfo";
import ProfileOtherInfo from "./ProfileOtherInfo";
import { getProfileData } from "../../Redux/Users/actions";
import "./index.scss";

const UserProfile = ({ getProfileData, profileData, id }) => {
  useEffect(() => {
    getProfileData({
      id,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <PageWrapper>
      {profileData.length === 0 ? null : (
        <Grid container spacing={2}>
          <ProfileInfo user={profileData} />
          <ProfileOtherInfo user={profileData} />
        </Grid>
      )}
    </PageWrapper>
  );
};

const mapStateToProps = (state) => ({
  profileData: state.userData.profileData,
  id: state.userData.user.id,
});

function mapDispatchToProps(dispatch) {
  return {
    getProfileData: (data) => dispatch(getProfileData(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
