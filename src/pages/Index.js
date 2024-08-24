import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Shubham Dubey's personal website. Mumbai based Computer Science graduate, "
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">The Core Value Inside </Link>
          </h2>
          <p>
            Everything around you that you call life was made up by people that were no
            smarter than you.And you can change it, you can influence it, you can build
            your own things that other people can use.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
