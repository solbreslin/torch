import React from 'react';
import { Root } from './Experiences.styled';

const ExperiencesPage = () => {
  return (
    <Root>
      <div>
        <h1>Share your experience</h1>
        <p>
          No personal identifiers (such as names, contact details, or specific
          addresses) will ever be shared publicly.
        </p>
      </div>
      <form name="experience" method="POST">
        <input type="hidden" name="form-name" value="experience" />

        <div>
          <label>
            <span>Company name</span>
            <input type="text" name="company_name" />
          </label>
        </div>
        <div>
          <label>
            <span>Your experience</span>
            <textarea rows={6} name="experience" />
          </label>
        </div>
        <div>
          <label>
            <span>
              Tell us more about you{' '}
              <span>
                Feel free to include any aspects of your identity and background
                that are important to you, such as your cultural or ethnic
                heritage, gender identity, sexual orientation, nationality, or
                any other experiences or elements of your identity you&apos;re
                comfortable sharing
              </span>
            </span>
            <textarea rows={2} name="about_you"></textarea>
          </label>
        </div>
        <div>
          <button className="primary" type="submit">
            Send
          </button>
        </div>
      </form>
    </Root>
  );
};

export default ExperiencesPage;
