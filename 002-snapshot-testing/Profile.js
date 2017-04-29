import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    props.doStuff();
  };

  return (
    <div className="profile-container">
      <h1>{props.name}</h1>
      <h2>{props.username}</h2>
      {props.bio && <p>{props.bio}</p>}
      <button onClick={handleOnClick}>Click me!</button>
    </div>
  );
};

Profile.defaultProps = {
  bio: null
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  bio: PropTypes.string,
  doStuff: PropTypes.func.isRequired
};

export default Profile;
