import React from "react";

const RepoItem = props => {
  return (
    <div className="card ml-3 mb-3" style={{"width": '20rem'}}>
      <h5 className="card-title">{props.repo.name}</h5>
      <p className="card-text">
      {props.repo.description ? props.repo.description : 'Description not available'}
      </p>
      <a href={props.repo.html_url} className="card-link">View Repo</a>
    </div>
  );
};

export default RepoItem;
