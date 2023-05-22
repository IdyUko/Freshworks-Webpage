import React from "react";
import styled from "styled-components"


const Card = ({h1}) => {
    return (
        
        <Div>
           	<Container>
                    <Wrapper>
                             	<Hold>
                                    <H1>{h1}</H1>
                    		</Hold> 
                	</Wrapper>
            	</Container> 
        </Div>

        )
    };
    
    export default Card;   


const Div = styled.div` 
width: 80%;
height: 80%;
// background-color: tomato;
display: flex;
justify-content: center;
align-items: center;
`;
const Container = styled.div`
width:  500px;
height:  250px;
background-color: yellow; 
border-radius: 10px;
border: 2px solid grey;
display: flex;
justify-content: center;
align-items: center;

:hover{
cursor: pointer;
background: linear-gradient(45deg, red, pink, yellow, green, orange, purple, brown, grey);
transition: all  2s;
}
`;
const Wrapper = styled.div`
width:  95%;
height:  90%;
border-radius: 10px;
border: 2px solid grey;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`;
const Hold = styled.div`
width: 100%;
height: 100%;
// background-color: khaki;
display: flex;
justify-content: center;
align-items: center;
`;
const H1 = styled.div`
font-size: 20px;
color: red;
`;
