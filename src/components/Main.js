import React from 'react'
import styled from 'styled-components'

export const Main = () => {
    return (
        <Container>
            <h1>Ushur <br/> DashBoard <br/> </h1>
            
        
           
        </Container>
    )
}

const Container = styled.div`

    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    h1 {
        font-size:65px;
        font-weight:600;
        color:white

        
    }
    @media (max-width:900px)
    {
        display:none
    }


`

export default Main
