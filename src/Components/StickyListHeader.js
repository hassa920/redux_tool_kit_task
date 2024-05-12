import React from 'react';
import styled from 'styled-components';

const StickyListHeader = () => {
  return (
    <StickyHeader>
      
   
      <Title>UsersList</Title>
     
    
    
    
    </StickyHeader>
  );
};

const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 16px;
  border-bottom: 1px solid #ddd;
  z-index: 1000;
`;



const Title = styled.h2`
  font-weight: bold;
  margin: 0;
  color: #333;
`;

export default StickyListHeader;