/* eslint-disable react/jsx-pascal-case */
import React from "react"
import styled from "styled-components";

const Header_Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;s
`
    
const Header_Tittle_Container = styled.div`
    width : 50%;
    display: flex;
    justify-content: center;
`
    
const Header_Tittle = styled.h1`

`
    
const Header_Burger_Container = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
`

const Header = () => {
    return (
        <Header_Container>
            <Header_Burger_Container>
                
            </Header_Burger_Container>
            <Header_Tittle_Container>
                <Header_Tittle>
                    Test
                </Header_Tittle>
            </Header_Tittle_Container>
        </Header_Container>
    )
}

export default Header;