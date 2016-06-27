import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
const Index = (props) => (
  <div className="container">
    <main>
      <Header {...props} />
      <Content {...props} />
    </main>
    <Footer />
  </div>
);

export default Index;
