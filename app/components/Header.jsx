import React from 'react';
import Contact from '../wheels/Contact';


// function renderContact(contact) {
//   return{
//     for (const type in contact) {
//       ;
//     }
//   }
// }

const Header = (props) => {
  // const contact = renderContact(props.contact);
  const renderContact = (contact) =>
    <Contact type={contact.type} value={contact.value} />;


  return (
    <header className="row">
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


export default Header;
