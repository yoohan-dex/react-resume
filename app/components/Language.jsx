import React from 'react';
import Section from './Section';
import Progress from '../wheels/Progress';
const Language = (props) => {
  const section = props.section_names.language;
  const renderCertification = (certification) =>
    <Progress cert={certification} />;
  const renderDescription = (description) =>
    <dd className="language-desc-item">{description}</dd>;
  return (
    <Section section={section}>
      {props.language.certifications.map(renderCertification)}
      <dl className="language-description">
        {props.language.description.map(renderDescription)}
      </dl>
    </Section>
  );
};
export default Language;
