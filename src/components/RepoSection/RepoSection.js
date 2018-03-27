import React from "react";

const RepoSection = props => {
  return (
    <div className="card card-body mb-3">
      <p className="lead">
        List of repositories
      </p>
      <ul className="list-group">
        {props.repos.map((repo, index) => {
          return (
            <li className="list-group-item" key={index}>
              Repo #{index}: {repo.name}
              <span className="badge badge-primary badge-pill">{repo.stargazers_count}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default RepoSection;
