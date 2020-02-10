import React from 'react';
import Photo from './components/Photo';
import styled from 'styled-components';
import { Button } from 'reactstrap';

const StyledApp = styled.div`
  text-align: center;
  background: rgb(199, 0, 57);
  background: linear-gradient(90deg, rgba(255, 87, 51) 5%, rgba(199, 0, 57) 30%, rgba(255, 195, 0) 50%, rgba(239, 152, 12) 70%, rgba(244, 208, 63) 95%);
`;
const StyledH1 = styled.h1`
color: rgba(41, 128, 185);
padding-top: 20px;
`;

function App() {
  return (
  <StyledApp>
      <StyledH1>Adventure Awaits in the Stars!</StyledH1>
      <Button color="primary">Nasa</Button>
       <Photo />
      </StyledApp>
  );
  
}

export default App;
