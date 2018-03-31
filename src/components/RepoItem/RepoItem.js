import React from "react";
import "./RepoItem.css";

const RepoItem = props => {
  return (
    <div className="repo-item" style={{ width: "18rem" }}>
      <h5 className="card-title ">{props.repo.name.toUpperCase()}</h5>
      <span className="badge badge-primary">
        Language: {props.repo.language}
      </span>
      <span className="badge badge-secondary ml-2">
        Fork Count: {props.repo.forks_count}
      </span>
      <span className="badge badge-success ml-2">
        Star Count: {props.repo.stargazers_count}
      </span>
      <span className="badge badge-danger ml-2">
        Issue: {props.repo.open_issues}
      </span>
      <hr/>
      <p className="card-text repo-text">
        {props.repo.description
          ? props.repo.description
          : "Description not available"}
      </p>
      <a href={props.repo.html_url} className="card-link">
        View Repo
      </a>
    </div>
  );
};

export default RepoItem;
