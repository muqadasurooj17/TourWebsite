import React from "react";
import Image from "next/dist/client/image";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Carosole() {
  const mystyle = {
    
    
    alignitems:"center",
    justifycontent: "center",
    textAlign:"center",
    marginbottom:"30px",
    fontSize:"40px",
    color:"#900692b8",
    lineheight: "1.5rem"
  };
  return (
    <>
      <h1 style={mystyle}>
      Our Recent Visits By Turists</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item> <Image src="/images/c1.jpg" alt="1st" width="300" height="300" />
          </Item>
          <Item><Image src="/images/c7.jpg" alt="1st" width="300" height="300" /></Item>
          <Item><Image src="/images/c2.jpg" alt="1st" width="300" height="300" /></Item>
          <Item><Image src="/images/c3.jpg" alt="1st" width="300" height="300" /></Item>
          <Item><Image src="/images/c4.jpg" alt="1st" width="300" height="300" /></Item>
          <Item><Image src="/images/c5.jpg" alt="1st" width="300" height="300" /></Item>
          <Item><Image src="/images/c6.jpg" alt="1st" width="300" height="300" /></Item>
          <Item><Image src="/images/c8.jpg" alt="1st" width="300" height="300" /></Item>
        </Carousel>
      </div>
    </>
  );
}


export default   Carosole;