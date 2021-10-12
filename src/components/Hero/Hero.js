import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi,< br /> My Name is Brayan & <br /> I'm a Front-End Developer
      </SectionTitle>
      <SectionText>
      Solving Real-World Challenges through code
      </SectionText>
      <Button onClick={() => window.open('mailto:learnwithbrayan@gmail.com')}> Reach Out </Button>
    </LeftSection>
  </Section>
);

export default Hero;