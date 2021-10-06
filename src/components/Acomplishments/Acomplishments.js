import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 5, text: 'Sites Built'},
  { number: 2, text: 'Civil Engagement Certifcate of Accomplishment', },
  { number: 20, text: 'Miles ran', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle> Personal Acomplishments </SectionTitle>
    <Boxes>
      {data.map((card,index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
