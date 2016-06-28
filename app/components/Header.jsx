import React, { PropTypes } from 'react';
import Contact from '../wheels/Contact';

const Header = (props) => {
  const renderContact = (contact) =>
    <Contact type={contact.type} value={contact.value} />;
  return (
    <header className="header-row">
      <section className="title">
        <h1>{props.name}</h1>
        <h2>{props.job_description.join('/')}</h2>
      </section>
      <address>
        <ul className="contact">
          {props.contact.map(renderContact)}
        </ul>
      </address>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  job_description: PropTypes.array,
  contact: PropTypes.array,
};

export default Header;
