import React from 'react';

const ProfileSection = (props) => {
  return(
    <div className="card card-body mb-3">
        <div className =" row">
          <div className = "col-md-3">
            <img className = "img-fluid mb-2" src={props.profile.avatar_url} alt="avatar"/>
            <a href= {props.profile.html_url} target='/' className = "btn btn-primary btn-block mb-4"> View Profile </a>
          </div>
          <div className = "col-md-9">
            <span className ="badge badge-primary">Public Repos: {props.profile.public_repos}</span>
            <span className ="badge badge-secondary">Public Gists: {props.profile.public_gists}</span>
            <span className ="badge badge-success">Followers: {props.profile.followers}</span>
            <span className ="badge badge-info">Following: {props.profile.following}</span>
            <br/>
            <br/>
            <ul className = "list-group">
              <li className=" list-group-item">Company: {props.profile.company}</li>
              <li className=" list-group-item">Website/Blog: {props.profile.blog}</li>
              <li className=" list-group-item">Location: {props.profile.location}</li>
              <li className=" list-group-item">Member Since: {props.profile.created_at}</li>
            </ul>
          </div>
      </div>
    </div>
  );
}

export default ProfileSection;
