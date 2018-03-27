import React from 'react';

const ProfileSection = (props) => {
  return(
    <div className="card card-body mb-3">
        <div className =" row">
          <div className = "col-md-3">
            <img className = "img-fluid mb-2" src={props.avatar_url} alt="avatar"/>
            <a href= {props.html_url} target='/' className = "btn btn-primary btn-block mb-4"> View Profile </a>
          </div>
          <div className = "col-md-9">
            <span className ="badge badge-primary">Public Repos: {props.public_repos}</span>
            <span className ="badge badge-secondary">Public Gists: {props.public_gists}</span>
            <span className ="badge badge-success">Followers: {props.followers}</span>
            <span className ="badge badge-info">Following: {props.following}</span>
            <br/>
            <br/>
            <ul className = "list-group">
              <li className=" list-group-item">Company: {props.company}</li>
              <li className=" list-group-item">Website/Blog: {props.blog}</li>
              <li className=" list-group-item">Location: {props.location}</li>
              <li className=" list-group-item">Member Since: {props.created_at}</li>
            </ul>
          </div>
      </div>
    </div>
  );
}

export default ProfileSection;
