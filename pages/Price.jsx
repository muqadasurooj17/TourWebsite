import React from "react";
import styled from "styled-components";
import PriceCard from "../components/PriceCard";

const Container = styled.div`
  height: 100%;
  margin-top:60px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Price = () => {
  return (
    <Container>
      <PriceCard price="200" type="Individual" />
      <PriceCard price="400" type="Friends" />
      <PriceCard price="500" type="Family" />
    </Container>
  );
};

export default Price;
