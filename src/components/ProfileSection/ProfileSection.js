import React from 'react';

const ProfileSection = (props) => {
  return(
    <div className="card card-body mb-3">
        <div className =" row">
          <div className = "col-md-3">
            <img className = "img-fluid mb-2 rounded-circle" src={props.profile.avatar_url} alt="avatar"/>
            <a href= {props.profile.html_url} target='/' className = "btn btn-primary btn-block mb-4"> View Profile </a>
          </div>
          <div className = "col-md-9">
            <span className ="badge badge-primary">Public Repos: {props.profile.public_repos}</span>
            <span className ="badge badge-secondary ml-2">Public Gists: {props.profile.public_gists}</span>
            <span className ="badge badge-success ml-2">Followers: {props.profile.followers}</span>
            <span className ="badge badge-info ml-2">Following: {props.profile.following}</span>
            <br/>
            <br/>
            <ul className = "list-group">
              <li className=" list-group-item">Company: {props.profile.company ? props.profile.company : 'Not Available'}</li>
              <li className=" list-group-item">Website: {props.profile.blog ? props.profile.blog : 'Not Available'}</li>
              <li className=" list-group-item">Location: {props.profile.location ? props.profile.location : 'Not Available' }</li>
              <li className=" list-group-item">Member Since: {props.profile.created_at ? props.profile.created_at : 'Not Available'}</li>
            </ul>
          </div>
      </div>
    </div>
  );
}

export default ProfileSection;
