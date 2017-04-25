import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => { // eslint-disable-line arrow-body-style
  return (
    <div className="profile-container">
      <h1>{props.name}</h1>
      <h2>{props.username}</h2>
      {props.bio && <p>{props.bio}</p>}
    </div>
  );
};

Profile.defaultProps = {
  bio: null
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  bio: PropTypes.string
};

export default Profile;
