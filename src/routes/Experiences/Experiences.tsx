import React from 'react';
import { Root } from './Experiences.styled';

const ExperiencesPage = () => {
  return (
    <Root>
      <div>
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
            <textarea rows={4} name="message"></textarea>
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
