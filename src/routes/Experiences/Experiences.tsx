import React from 'react';
import { Root } from './Experiences.styled';

const ExperiencesPage = () => {
  return (
    <Root>
      <div>
        <p>
          We are seeking to understand patterns and themes in workplace
          experiences based on gender, ethnicity, age, location etc. All
          questions are voluntary, but the more we can learn the better we can
          understand how the experience of the world of work is different for
          one person to the next. We want to gather our first X,000 responses in
          order to validate that Torch can be a unique source of data to shine a
          light on real life experiences in the work place. If you think this
          mission is worthwhile, we'd really appreciate your help and taking a
          few minutes to share your experiences. Please note - Any trends /
          findings from our analysis will always be presented in a manner that
          ensures the anonymity of all participants. No personal identifiers
          (such as names, contact details, or specific addresses) will ever be
          shared publicly.
        </p>
      </div>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
      >
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
        <div data-netlify-recaptcha="true"></div>
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
