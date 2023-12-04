import React from 'react';
import { Root } from './About.styled';
import Team from './Team/Team';
import Vision from './Vision/Vision';

const AboutPage = () => (
  <Root>
    <Vision />
    <Team />

    <section style={{ display: 'none' }}>
      <h1>FAQ</h1>
      <details>
        <summary>
          What makes Torch different from other workplace review platforms?
        </summary>
        <div>
          <ol>
            <li>
              Prioritises Diversity and Inclusion: We specifically target the
              nuances of D&I, providing insights into how workplace cultures
              cater to all different genders, sexualities, abilities,
              ethnicities, and backgrounds.
            </li>
            <li>
              Encourages Authentic Sharing: By allowing both public and private
              anonymous feedback, collected through writing or voice dictation,
              Torch enables a depth of sharing that captures real emotions and
              experiences often missed in standard reviews.
            </li>
            <li>
              Utilises Advanced Machine Learning: Our technology doesn't just
              collate feedback; it uncovers underlying themes and actionable
              insights, offering a deeper understanding of workplace dynamics.
            </li>
            <li>
              Utilises Advanced Machine Learning: Our technology doesn't just
              collate feedback; it uncovers underlying themes and actionable
              insights, offering a deeper understanding of workplace dynamics.
            </li>
            <li>
              Offers a Comprehensive View: We go beyond surface-level ratings
              and comments, providing a well-rounded perspective on how
              employees from all walks of life perceive and experience their
              workplace.
            </li>
          </ol>
        </div>
      </details>
    </section>
  </Root>
);

export default AboutPage;
