import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, my name is Brayan Mejia Cuenca <br />
        & I'm a Front-End Developer
      </SectionTitle>
      <SectionText>
      Welcome to my portfolio. Make yourself at home, it's not much, but here you can find everything I've been up to.
      </SectionText>
      <Button onClick={() => window.open('mailto:learnwithbrayan@gmail.com')}> Reach Out </Button>
    </LeftSection>
  </Section>
);

export default Hero;