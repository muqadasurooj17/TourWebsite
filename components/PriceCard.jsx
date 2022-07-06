import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-right: 50px;
  margin-bottom:30px;
  margin-top:30px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 10px;
    padding: 10px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
 
  align-items: center;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
  color:rgb(44, 43, 43);
  @media only screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: 1.5px solid #900692b8;
  color: #900692b8;
  background-color: white;
  border-radius: 20px;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin: 30px 0;
  @media only screen and (max-width: 480px) {
    margin: 10px;
    font-size: 12px;
  }
`;

const Button = styled.button`
  border: none;
  background-color: #900692b8;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    padding: 5px;
  }
`

const Title = styled.div`
align-items: center;
  justify-content: center;
  color: #900692b8;
  line-height: 1.5rem;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    padding: 5px;
  }
`;



const PriceCard = ({ price, type }) => {
  return (
    <Container>
        <Title> Choose your Plan</Title>
      <PriceContainer>
        $<Price>{price}</Price>
      </PriceContainer>
      <Type>{type} Plan</Type>
      <List>
        <ListItem>Comfortable Travel  </ListItem>
        <ListItem>Food Availibility</ListItem>
        <ListItem>Turist Guidline and support</ListItem>
        <ListItem>Accomodation</ListItem>{" "}
      </List>
      <Button>Apply Now</Button>
    </Container>
   
  );
};

export default PriceCard;
