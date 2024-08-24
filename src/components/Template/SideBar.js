import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Shubham &apos;S&apos;&nbsp;Dubey</h2>
        <p>
          <a href="mailto:shubhamk3120@gmail.com">shubhamk3120@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Shubham. I am a{' '}
        <a href="https://icme.stanford.edu/">Full Stack SDE</a>, Graduated with
        Bachelors of Computer Science, Mumbai University{' '}
        also I have been interviewed at{' '}
        <a href="https://google.com">Google</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; 2024 <Link to="/">Shubham Dubey</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
