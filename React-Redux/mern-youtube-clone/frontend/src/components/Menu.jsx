import styled from "styled-components";
import React from 'react'
import YoutubeLogo from "../img/YoutubeLogo.svg"


const Container = styled.div`
    flex: 1;
    background-color: #202020;
    height: 100vh;
    color: white;
    font-size: 14px;
`

const Wrapper = styled.div`
    padding: 18px 26px;
`

const Logo= styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 25px;
`

const Img = styled.img`
    height: 25px;
    margin-right: -7px;
    margin-top: 2px;
`

const Menu = () => {
  return (
    <Container>
        <Wrapper>
            <Logo>
                <Img src = {YoutubeLogo}/>
                Premium
            </Logo>
        </Wrapper>
    </Container>
  )
}

export default Menu