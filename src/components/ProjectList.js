import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{
        projects.map((pr0j) => {
            return <ProjectItem name = {pr0j.name} about = {pr0j.about} technologies = {pr0j.technologies} key = {pr0j.id}/>
        })

      }</div>
    </div>
  );
}

export default ProjectList;
