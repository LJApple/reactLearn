import React from 'react';
import { render } from 'react-dom';

const ProfilePic = (props) => {
    return (
        <div>test11</div>
    );
  }
  
  const ProfileLink = (props) => {
    return (
        <div>test222222</div>
    );
  }
  
  const Avatar = (props) => {
    return (
      <div>
        <ProfilePic username={props.username} />
        <ProfileLink username={props.username} />
      </div>
    );
  }

  export default Avatar;