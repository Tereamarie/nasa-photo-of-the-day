import React from 'react';
import styled from 'styled-components';

const DataDiv = styled.div`
  width: 75%;
  margin: 10px auto;
  padding: 2%;
  max-width: 800px;
  color: white;
  border: 3px solid blue;
  border-radius: 50px;
  box-shadow:  20px 10px black;
  max-width: 600px;
  margin-top: 10px;
`;

const StyledP = styled.p`
text-align: center;
`;
const StyledH2 = styled.h2`
color: white;
`;
const StyledH3 = styled.h3`
color: white;
`;

function Data(props) {
  return (
    <DataDiv>
      <StyledH2>{props.title}</StyledH2>
      <StyledH3>{props.date}</StyledH3>
      <StyledP>{props.about}</StyledP>
    </DataDiv>
  )
}

export default Data;