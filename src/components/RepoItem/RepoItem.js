import React from "react";
import "./RepoItem.css";

const RepoItem = props => {
  return (
    <div className="repo-item" style={{ width: "18rem" }}>
      <h5 className="card-title ">{props.repo.name.toUpperCase()}</h5>
      <span className="badge badge-primary">{props.repo.language}</span>
      {/* The repetition in the following 4 spans (from lines 10-28) suggests to us that we can refactor them in a component :-) */}
      <span className="badge badge-secondary ml-2">
        <i class="fas fa-code-branch" />
        {` `}
        {props.repo.forks_count}
      </span>
      <span className="badge badge-success ml-2">
        <i class="fas fa-star" />
        {` `}
        {props.repo.stargazers_count}
      </span>
      <span className="badge badge-info ml-2">
        <i class="fas fa-eye" />
        {` `}
        {props.repo.watchers_count}
      </span>
      <span className="badge badge-danger ml-2">
        <i class="fas fa-exclamation" />
        {` `}
        {props.repo.open_issues}
      </span>
      <hr />
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
