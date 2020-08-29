import React, { useEffect } from 'react';
import PageWrapper from '../../Components/PageWrapper';
import InvitationForm from '../../Components/InvitationPage/InvitationForm';
import InvitedUsers from '../../Components/InvitationPage/InvitedUsers';
import { connect } from 'react-redux';
import { getRoles, getPositions } from '../../Redux/APanel/actions';

const SendInvitation = ({ getRoles, getPositions }) => {
  useEffect(() => {
    getRoles({
    });
    getPositions({
    });
  }, [getRoles, getPositions]);

  return (
    <PageWrapper>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <InvitationForm />
        <InvitedUsers />
      </div>
    </PageWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getRoles: (data) => dispatch(getRoles(data)),
  getPositions: (data) => dispatch(getPositions(data)),
});

export default connect(null, mapDispatchToProps)(SendInvitation);
