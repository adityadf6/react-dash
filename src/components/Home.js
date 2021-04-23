import React from 'react'
import styled from 'styled-components'
import bgImg from '../assets/bg.png'
import Main from './Main'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import {selectSignedIn, setSignedIn, setUserData} from '../features/userSlice'
import { useSelector,useDispatch } from 'react-redux'
import Maincards from './Maincards'
import Integrated from './Integrated'
import Dashnav from './Dashnav'

const Home = () => {

   
   

    const isSignedIn = useSelector(selectSignedIn)


    return (
       
        <Container>
        
            
            
            
            {isSignedIn ? <><Navbar/> <Dash><Maincards/></Dash></> :  
            <Wrapper>
                <Sidebar/>
                <Main/>
            </Wrapper>
            
            }
           
        </Container>    
        
    )
}
const Box = styled.div `
background:#FAFAFA;
position:relative;
display:flex;
flex-direction:column;
margin-left:8rem;

padding-top:2rem;



`
const Dash = styled.div `
background:#FAFAFA;

margin-top:2rem;
top:0;
left:0;
bottom:0;
right:0;
//padding-top:6rem;
padding:2rem;

`

const Container  = styled.div`
    background:#FAFAFA;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;

`;
const Wrapper = styled.div`

    background-image: url(${bgImg});
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    width:100%;
    height:100%;
    display:flex;

`;



export default Home
