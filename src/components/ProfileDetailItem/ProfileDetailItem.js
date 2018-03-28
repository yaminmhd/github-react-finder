import React from "react";

const ProfileDetailItem = props => {
  return (
    <React.Fragment>
      <span className="badge badge-primary">
        Public Repos: {props.detailItem.public_repos}
      </span>
      <span className="badge badge-secondary ml-2">
        Public Gists: {props.detailItem.public_gists}
      </span>
      <span className="badge badge-success ml-2">
        Followers: {props.detailItem.followers}
      </span>
      <span className="badge badge-info ml-2">
        Following: {props.detailItem.following}
      </span>
      <br />
      <br />
      <ul className="list-group">
        <li className=" list-group-item">
          Company:
          {props.detailItem.company
            ? props.detailItem.company
            : "Not Available"}
        </li>
        <li className=" list-group-item">
          Website:
          {props.detailItem.blog ? props.detailItem.blog : "Not Available"}
        </li>
        <li className=" list-group-item">
          Location:
          {props.detailItem.location
            ? props.detailItem.location
            : "Not Available"}
        </li>
        <li className=" list-group-item">
          Member Since:
          {props.detailItem.created_at}
        </li>
      </ul>
    </React.Fragment>
  );
};

export default ProfileDetailItem;
