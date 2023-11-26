import React from 'react';
import { Root } from './Privacy.styled';

const PrivacyPage = () => {
  return (
    <Root>
      <h1>Privacy Policy</h1>
      <p className={'m-4'}>
        <small>
          Last updated: <time dateTime={'2023-11-17'}>17/11/2023</time>
        </small>
      </p>
      <h3>Data Collection</h3>
      <p>
        The Torch survey collects information regarding personal experiences and
        demographic details, such as age, gender, and location.
      </p>
      <p>
        Participation is voluntary, and respondents may choose not to answer any
        specific question.
      </p>
      <h3>Confidentiality</h3>
      <p>
        All information provided will be kept strictly confidential. Data will
        be stored securely and will only be accessed by authorised personnel
        involved in the creation of the survey.
      </p>
      <h3>Use of Information</h3>
      <p>
        The primary use of the data is for research and analysis purposes. We
        aim to understand patterns and themes in the experiences and
        demographics of our respondents.
      </p>
      <h3>Sharing of Information</h3>
      <ul>
        <li>
          <strong>Anonymity:</strong> No personal identifiers (such as names,
          contact details, or specific addresses) will be shared publicly.
        </li>
        <li>
          <strong>Themes and Aggregated Data:</strong> We may share general
          themes and aggregated data from the survey findings. This data will be
          presented in a manner that ensures the anonymity of all participants.
        </li>
      </ul>
      <h3>Consent</h3>
      <p>
        By participating in this survey, you consent to the collection, storage,
        use, and disclosure of your information as outlined in this privacy
        policy.
      </p>
      <h3>Access to Information</h3>
      <p>
        Participants have the right to request access to the information they
        have provided and may request corrections to any inaccurate data.
      </p>
      <h3>Updates to the Privacy Policy</h3>
      <p>
        This privacy policy may be updated periodically. Any changes will be
        communicated to participants and will be applicable from the date of
        publication.
      </p>
      <h3>Contact Information</h3>
      <p>
        For any questions or concerns regarding this privacy policy or the
        handling of personal information, participants can contact us at{' '}
        <a href={'mailto:hello@the-torch.io'}>hello@the-torch.io</a>
      </p>
      <h3>Acknowledgement</h3>
      <p>
        By participating in the survey, you acknowledge that you have read,
        understood, and agreed to the terms of this privacy policy.
      </p>
    </Root>
  );
};

export default PrivacyPage;
