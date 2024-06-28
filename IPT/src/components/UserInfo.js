import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = ({ username, avatar }) => {
  return (
    <div>
      <Link to="/account">
        <img src={avatar} alt="Avatar" />
        <span>{username}</span>
      </Link>
    </div>
  );
};

export default UserInfo;
