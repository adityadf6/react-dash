import React from 'react'
import styled from 'styled-components'
const Input = ({type,placeholder}) => {
    return (
        <Conatiner>
            <StyledInput 
            placeholder={placeholder && placeholder } 
            type={type ? type : "text"}
            required
            autoComplete="off"
            />
           
        </Conatiner>
    )
}

const StyledInput = styled.input`

    width:80%;
    outline:none;
    max-width:350px;
    min-widthh:250px;
    height:40px;
    border:none;
    margin:0.5rem 0;
    background-color:#ffffff;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius:8px;
    padding: 0 1rem;
    transition: all 0.2s ease-in;

    &:hover {

        transform: translateY(-3px)

    }

    &:valid {

        border: 2px solid rgba(17, 186, 75, 0.4);
        box-shadow: 0px 14px 9px -15px rgba(17, 186, 75, 0.25);
    
    }




`

const Conatiner = styled.div`

    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;

`

// const Status = styled.div`

//     height:10px;
//     width:13.99px;
//     background:#9d9d9d;
//     border-radius:50%;
//     margin-left: 1rem;

//     ${StyledInput}:focus + & {

//         border: 2px solid #FFBF91;
       
//         box-shadow: 0px 16px 31px rgba(255, 130, 40, 0.25);

//     }
//     ${StyledInput}:invalid + & {

//         background:#FF9D9D;

//     }
//     ${StyledInput}:valid + & {

//         background:#70edb9;

//     }


// `

export default Input
