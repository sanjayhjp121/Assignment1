import React, { useState } from 'react';
import { Header } from './Header';
import './custom-page.css'; // Custom CSS file for styling

const Page = () => {
  const [user, setUser] = useState();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'John Smith' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'John Smith' })}
      />

      <section className="custom-storybook-page">
        <h2>Welcome to Our Pages</h2>
        <p>
          Build amazing user interfaces using a{' '}
          <a href="https://component-driven.org" target="_blank" rel="noopener noreferrer">
            <strong>component-driven</strong>
          </a>{' '}
          approach, starting from atomic components and crafting them into cohesive pages.
        </p>
        <p>
          Simulate page interactions with mock data directly in Storybook, facilitating rapid
          prototyping and efficient design iteration.
        </p>
        <ul>
          <li>
            Leverage higher-order components to connect and render complex page structures with
            ease.
          </li>
          <li>
            Seamlessly integrate mock data services into Storybook for realistic and scalable page
            development.
          </li>
        </ul>
        <p>
          Dive deep into component-driven workflows with our{' '}
          <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
            guided tutorials
          </a>{' '}
          or explore advanced techniques in our comprehensive{' '}
          <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">
            documentation
          </a>
          .
        </p>
        <div className="custom-tip-wrapper">
          <span className="custom-tip">Pro Tip</span> Customize the Storybook viewport using the{' '}
          <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                fill="#666"
              />
            </g>
          </svg>
          Viewport Addon in the toolbar to match your design needs.
        </div>
      </section>
    </article>
  );
};

export default Page;