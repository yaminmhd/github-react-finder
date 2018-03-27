import React from "react";

const User = props => (
  <div>
    <h4>User Details</h4>
    <h4>{props.user.name}</h4>
    <h4>{props.user.location}</h4>
  </div>
);

export default User;
