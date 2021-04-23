import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import Input from './input'
import google from '../assets/google.png'
import azure from '../assets/azure.png'
import { useSelector,useDispatch } from 'react-redux'
import GoogleLogin from 'react-google-login'
import {selectSignedIn, setSignedIn, setUserData} from '../features/userSlice'

const Sidebar = () => {

    const dispatch = useDispatch()

    const login = (response) => {
        console.log(response)
        dispatch(setSignedIn(true))
        dispatch(setUserData(response.profileObj))
    }

    const isSignedIn = useSelector(selectSignedIn)


    return (
        <Container>
            <LogoWrapper>
                <img src = {logo} alt=""/>
                <h3>Ushur</h3>
            </LogoWrapper>
            <Form>
                <h3>Login</h3>
                {/* <Input  placeholder="Email" type="email"/>
                <Input  placeholder="Password" type="password"/>
                <Input  placeholder="Confirm Password" type="password"/>
                <button>
                    Sign Up
                </button> */}
               
               <GoogleLogin
                
                clientId="985279736458-h6ll8paph5133fu3bchlucft8pl6fc3u.apps.googleusercontent.com"
                render={(renderProps) => (

                    <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="login__button"
                    >
                        <img class="oauth-logo" alt="" src={google}></img>

                        Login With Google
                    </button>
                    


                )}

                onSuccess={login}
                onFailure={login}
                isSignedIn={true}
                cookiePolicy={"single_host_origin"}

                />
                <button  href="#" class="login__button">
                    <img class="oauth-logo" alt="" src={azure}></img>
                    <span>Login with Azure</span>
                </button>
            </Form>
            <div>
                <Terms>By signing up, I agree to the Privacy Policy  
                and terms of service</Terms>
                <h4>Already have an account? <span>Sign In</span></h4>
            </div>
        </Container>
    )
}

const Terms = styled.p`
    padding:0 1rem;
    text-align:center;
    font-style: normal;
    font-weight:300;
    font-size: 16px;
    line-height: 110.68%;
    color: #919191;
`

const Form = styled.form`
    
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    h3 {
        color:#666666;
        font-weight:600;
        margin-bottom:2rem;
    }
     button {
        width:75%;
        color:white;
        font-weight:600;
        max-width:350px;
        min-widthh:250px;
        height:40px;
        border:none;
        margin:1rem 0;
        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
        border-radius:8px;
        background: linear-gradient(103.44deg, #4048E9 0%, #46A3FA 102.05%);
        cursor:pointer;
        transition: all 0.2s ease-in;
        &:hover {
    
            transform: translateY(-3px)
    
        }
    }
    img {
        width: 20px;
        height: 20px;
        margin: 10px;
    }
   
    .login__button {
        align-items:center;
        justify-content:evenly;
        display:flex;
        span {
            padding-left:10px;
        }
       
        text-decoration: none;
        margin-right: 10px;
        float: left !important;
        width:55%;
        color:black;
        font-weight:300;
        max-width:350px;
        min-widthh:250px;
        height:40px;
        border:none;
        margin:1rem 0;
        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
        border-radius:8px;
        background: white;
        cursor:pointer;
        transition: all 0.2s ease-in;
        &:hover {
    
            transform: translateY(-3px)
    
        }
    }
    
   
`

const LogoWrapper= styled.div`
    img {
        height:6rem;
    }
    h3 {    
            text-align:center;        
            font-size:32px;
            font-weight:400;
            background: -webkit-linear-gradient(rgba(64, 72, 233, 1), rgba(70, 163, 250, 1));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          
       }
`
const Container = styled.div`
    min-width:400px;
    backdrop-filter: blur(35px);
    background-color: rgba(255,255,255,0.65);
    height:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:space-evenly;
    padding:0 2rem;
    @media (max-width:900px) {
        width:100vw;
        position:absolute;
        padding:0;
    }
    h4 {
        padding:0 1rem;
        text-align:center;
        color:#6F6F6F;
        font-weight:bold;
        font-size:13px;
        margin-top:2rem;
        
        span {
            color:#576FEF;
            cursor:pointer;
        }
    }
`



export default Sidebar
