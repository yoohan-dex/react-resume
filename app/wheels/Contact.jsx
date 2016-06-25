import React from 'react';

const Contact = (contact) => {
  switch (contact.type) {
    case 'email':
      return (
        <li className="contact-eamil">
          <a href={`mailto://${contact.value}`}>
            {contact.value}
          </a>
        </li>
      );
    case 'wechat':
      return (
        <li className="contact-wechar">
          {contact.value}
        </li>
      );
    case 'github':
      return (
        <li className="contact-github">
          <a href={`http://github.com/${contact.value}`}>
            {`http://github.com/${contact.value}`}
          </a>
        </li>
      );
    case 'blog':
      return (
        <li className="contact-blog">
          <a href={contact.value}>{contact.value}</a>
        </li>
      );
    case 'phone':
      return (
        <li className="contact-phone">
          {contact.value}
        </li>
      );
    default:
      return null;
  }
};

export default Contact;
