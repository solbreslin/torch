import React from 'react';
import { Root } from './Vision.styled';
import Team from '../Team/Team';

const Vision = () => {
  return (
    <Root>
      <div>
        <h1>About</h1>
        <p>
          We met in 2022 when Bethany started mentoring Frances, and we soon
          identified a shared calling to create workplaces that felt inclusive
          and fair for everyone. With a combined experience of over 40 years in
          the workplace, we had seen enough first-hand to know that change was
          needed.{' '}
        </p>
        <p>
          Whether you're seeking a workplace that aligns with your values or
          you're a company looking to genuinely improve, Torch will be a space
          that will illustrate what it is truly like to work somewhere. Our
          vision for Torch is to leverage shared experiences and AI technology
          to expose discrimination and inequity in the workplace, and through
          transparency and visibility create accountability.
        </p>
        <p>
          Generation Z is set to be 30% of the workforce by 2030 and will be the
          most diverse generation to ever exist. Because of this there is a need
          for workplaces to shift and embody values important to this
          generation.
        </p>
        <p>
          At this stage, we are asking for as many people as possible to share
          their experiences. We aim to validate that through collectively coming
          together we can gain insight and data that doesn’t currently exist.
        </p>
        <p>
          Thank you for being part of our journey towards a more inclusive
          world.
        </p>
        <p>Warm regards,</p>
        <p>
          <strong>
            Frances Mannion and Bethany Ayers
            <br />
            Co-Founders, Torch
          </strong>
        </p>
        <Team />
      </div>
    </Root>
  );
};

export default Vision;
