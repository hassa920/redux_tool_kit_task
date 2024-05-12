import React from 'react';
import styled from 'styled-components';

const ListFooter = ({ isLoadingNextPage }) => {
  if (isLoadingNextPage) {
    return (
      <FooterWrapper>
        <Loader />
      </FooterWrapper>
    );
  } else {
    return <FooterWrapper>No more data</FooterWrapper>;
  }
};

const FooterWrapper = styled.div`
  padding: 20px;
  text-align: center;
  color: #666;
  position: fixed; /* change from absolute to fixed */
  bottom: 0;
  left: 0;
  right: 0;
  top:80
  height: 50px; /* adjust the height to your liking */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* add a high z-index to ensure it's on top of other elements */
`;

const Loader = styled.div`
  border: 4px solid #f0f0f0;
  border-top: 4px solid #333;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default ListFooter;