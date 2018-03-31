import React from "react";
import RepoItem from "../RepoItem/RepoItem";
import "./RepoSection.css";

const RepoSection = props => {
  return (
    <div className="card-container">
      <div className= "repo-title">
        <h4>List of Repositories</h4>
      </div>
      <div className="repo-grid">
        {props.repos.map((repo, index) => {
          return (
            <div key={index}>
              <RepoItem repo={repo} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RepoSection;
