import React from 'react';
import Section from './Section';
import ProjectItem from './ProjectItem';
const Project = (props) => {
  const section = props.section_names.project;
  const renderProjectItem = (project) =>
    <ProjectItem project={project} />;
  return (
    <Section iteminitem section={section}>
      {props.projects.map(renderProjectItem)}
    </Section>
  );
};

export default Project;
