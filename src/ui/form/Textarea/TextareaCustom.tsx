import React from 'react';
import styled from 'styled-components';
import {Field} from "formik";

// border-color: ${props => {
//   console.log(props)
//   return "none"
// }};
const Textarea = styled(Field)`
	
    
    background-color: #292e38;
    border-color: #05b8d1;
    border-radius: 5px;
    min-height: 100px;
    resize: none;
    padding: 10px;
    width: 100%;
    color: #bfc9d9;
    transition: border-color .4s cubic-bezier(.445,.05,.55,.95);
    &:focus, &:active {
        border-color: #1fdffa;
        outline: none;
    }
`


export default Textarea
