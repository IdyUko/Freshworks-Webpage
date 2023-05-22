import React from "react";
import styled from "styled-components"
import { BsGlobe, BsPerson } from "react-icons/bs"
import { Link} from "react-router-dom";


const Header = () => {
  return(
    <Div>
        <Wrapper>
            <Left>
                <Logo to="/"><img src= "/freshwork-logo.png"  alt="logo"/></Logo>
                <Nav to= "/">Home</Nav>
                <Nav to= "/about">About</Nav>
                <Nav  to= "/services">Services</Nav>
                <Nav to= "/contact">Contact</Nav>
            </Left>

            <Right>
                <Nav to= "/demo">Demo</Nav>
                <Nav to= "/pricing" >Pricing</Nav>
                {/* <BsPerson/> */}
                <BsPerson style={{color: "purple",  width: 20,  height: 20}}/>
                {/* <BsGlobe/> */}
                <BsGlobe  style={{color: "purple",  width: 15,  height: 15}}/>
                <Button to="/SignUp">Free Trial</Button>
            </Right>
        </Wrapper>
    </Div>
  )
};

export default Header;

const Div = styled.div`
color: black;
background-color: white;
width: 100%;
height: 70px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
`;

const Wrapper = styled.div`
// background-color: aqua;
width: 80%;
height: 80%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Left = styled.div`
// background-color: yellow;
width: 40%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Logo = styled(Link)`
width: 120px;
height: 30px;

img{
	width: 100%;
	// background-color: blue;
}
`;
const Right = styled.div`
// background-color: green;
width: 30%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Nav = styled(Link)`
text-decoration: none;
:hover{
color: purple;
cursor: pointer;
transition: all 1s;
font-size: 20px;
}
`;

const Button = styled(Link)`
text-decoration: none;
background-color: purple;
text-decoration: none;
color: white;
padding: 0.5rem 1.2rem;
border-radius: 5px;
border: 1px solid purple;
font-size: 20px;
font-weight: bold;
cursor: pointer;
transition: all 1s;
`;

