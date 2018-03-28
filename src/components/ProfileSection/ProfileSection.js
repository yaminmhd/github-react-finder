import React from 'react';
import ProfileImageItem from '../ProfileImageItem/ProfileImageItem';
import ProfileDetailItem from '../ProfileDetailItem/ProfileDetailItem';

const ProfileSection = (props) => {
  return(
    <div className="card card-body mb-3">
        <div className =" row">
          <div className = "col-md-3">
            <ProfileImageItem imageItem = {props.profile}/>
          </div>
          <div className = "col-md-9">
            <ProfileDetailItem detailItem = {props.profile}/>
          </div>
      </div>
    </div>
  );
}

export default ProfileSection;
