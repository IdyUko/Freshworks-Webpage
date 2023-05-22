import React from "react"
import styled from "styled-components"
import Card from "../Card/card"

const Pricing= () => {
  return (
    <Div>
            <Wrapper>
                <Card  h1="This is the PRICING PAGE" />
            </Wrapper>
        </Div>
    
  )
};

export default Pricing;


const Div = styled.div`
width:  100%;
height: 100vh;
background-color: lightblue;
display: flex;
justify-content: center;
align-items: center;
`;
const Wrapper = styled.div`
width: 80%;
height: 80%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`;