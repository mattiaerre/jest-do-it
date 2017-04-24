import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => { // eslint-disable-line arrow-body-style
  return (
    <div className="profile-container">
      <h1>{props.username}</h1>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired
};

export default Profile;
