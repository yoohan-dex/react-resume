import React from 'react';

const Contact = (contact) => {
  switch (contact.type) {
    case 'email':
      return (
        <li className="contact-envelope">
          <a href={`mailto://${contact.value}`}>
            {contact.value}
          </a>
        </li>
      );
    case 'wechat':
      return (
        <li className="contact-wechat">
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
        <li className="contact-rss">
          <a href={contact.value}>{contact.value}</a>
        </li>
      );
    case 'phone':
      return (
        <li className="contact-phone">
          {contact.value}
        </li>
      );
    // case 'weibo':
    //   return (
    //     <li className="contact-weibo">
    //       <a href={`http://weibo.com/${contact.value}`}>{contact.value}</a>
    //     </li>
    //   );
    default:
      return null;
  }
};

export default Contact;
