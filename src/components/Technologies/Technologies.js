import React from 'react';
import { DiReact, DiJavascript1,DiIllustrator } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
<SectionDivider />
<br />
<SectionTitle> Technologies </SectionTitle>
<SectionText>
  I've worked with a range of technologies in the web development world from Web Design evolving to Front-End Development.
</SectionText>
<List>
  <ListItem>
    <DiReact size="3rem" />
    <ListContainer>
      <ListTitle>Web Designer</ListTitle>
      <ListParagraph>
        Built, designed & deployed Ecommerce sites for small business clients
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiJavascript1 size="3rem" />
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        Experience with Javascript, HTML, CSS & React.js
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiIllustrator size="3rem" />
    <ListContainer>
      <ListTitle>UI/UX</ListTitle>
      <ListParagraph>
        Experience with <br />
        Figma and Sketch
      </ListParagraph>
    </ListContainer>
  </ListItem>
</List>
  </Section>

);

export default Technologies;
