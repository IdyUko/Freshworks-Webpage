import React from "react";
import styled from "styled-components"
import {AiOutlineMenu, AiOutlineSearch} from "react-icons/ai"
import {BiMicrophone, BiDotsVerticalRounded} from "react-icons/bi"
import {CgMenuGridR} from "react-icons/cg"
import {BsPersonCircle} from "react-icons/bs"


const Header = () => {
  return (
    <Div>
        <Header1>
            <Wrapper1>
                <Leftnav>
                    <AiOutlineMenu/>
                    <img src="/YouTube-Logo.png"/>
                </Leftnav>
                
                <Search>
                    <Mid>
                        <Input placeholder="Search"/>
                        <Searchicon><AiOutlineSearch/></Searchicon>
                    </Mid>
                    <Mic><BiMicrophone/></Mic>
                </Search>
                
                <Rightnav>
                    <Dot><CgMenuGridR/></Dot>
                    <Round><BiDotsVerticalRounded/></Round>
                    <Button><BsPersonCircle/>SIGN IN</Button>
                </Rightnav>
            </Wrapper1>
        </Header1>

        <Header2>
            <Wrapper2>
                <Span>All</Span>
                <Nav> Burna Boy</Nav>
                <Nav>Music</Nav>
                <Nav>Mixes</Nav>
                <Nav>Olamide</Nav>
                <Nav>Nollywood</Nav>
                <Nav>Lil Kesh</Nav>
                <Nav>Rapping</Nav>
                <Nav>Comedies</Nav>
                <Nav>African Music</Nav>
                <Nav>Sketch comedy</Nav>
                <Nav>Albums</Nav>
                <Nav>Contemporary Worship Music</Nav>
                <Nav>Playlists</Nav>
                <Nav>Stages</Nav>
            </Wrapper2>
        </Header2>
    </Div>

  )
};

export default Header;

const Div = styled.div`
    width: 100%;
    background-color: tomato;
`;
const Header1 = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper1 = styled.div`
    width: 95%;
    height: 50px;
    // background-color: orange;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 100px;
        height: 40px;
    }
`;
const Leftnav = styled.div`
    width: 9%;
    height: 30px;
    // background-color: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Search = styled.div`
    height: 40px;
    width: 35%;
    // background-color: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
`; 
const Searchicon = styled.div`
    width: 50px;
    height: 35px;
    border: 1px solid grey;
    border-radius: 0 3px 3px 0;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
const Input = styled.input`
    width: 400px;
    height: 35px;
    background-color: transparent;
    border: 1px solid grey;
    padding: 0rem 0.5rem;
    border-radius: 3px 0 0 3px;;
    color: grey;
    font-size: 15px;
    cursor: pointer;
`;
const Mid = styled.div`
    width: 450px;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
   cursor: pointer;
`;
const Mic = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: whitesmoke;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
const Rightnav = styled.div`
    width: 13%;
    height: 40px;
    // background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;

    Dot{
    width: 200px;
    height: 200px;
    }

    Round{
    width: 200px;
    line-height: 30px;
    }
`;
const  Dot = styled.div`
`;
const Round = styled.div`
`;
const Button = styled.button`
    width: 100px;
    height: 35px;
    background-color: transparent;
    border: 1px solid blue;
    border-radius: 3px;
    color: blue;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const Header2 = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper2 = styled.div`
    width: 95%;
    height: 50px;
    // background-color: yellow;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Span = styled.div`
    background-color: Black;
    color: Grey;
    width: 30px;
    border-radius: 20px;
    padding: 0.3rem 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
const Nav = styled.div`
    background-color: whitesmoke;
    color: Black;
    border-radius: 50px;
    padding: 0.3rem 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;