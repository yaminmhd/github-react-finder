import React from "react";
import RepoItem from "../RepoItem/RepoItem";

const RepoSection = props => {
  return (
    <div className="card card-body mb-3 d-flex flex-row flex-wrap">
      {props.repos.map((repo, index) => {
        return (
          <div key={index}>
            <RepoItem repo={repo} />
          </div>
        );
      })}
    </div>
  );
};
export default RepoSection;
