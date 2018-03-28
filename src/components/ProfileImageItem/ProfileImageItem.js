import React from "react";

const ProfileImageItem = props => {
  return (
    <React.Fragment>
      <img
        className="img-fluid mb-2 rounded-circle"
        src={props.imageItem.avatar_url}
        alt="avatar"
      />
      <a
        href={props.imageItem.html_url}
        target="/"
        className="btn btn-primary btn-block mb-4"
      >
        View Profile
      </a>
    </React.Fragment>
  );
};

export default ProfileImageItem;
