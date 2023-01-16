import styled from "styled-components";

type ButtonType = {
	fullWidth?: boolean
}

export const Button = styled.button<ButtonType>`
    background-color: #05b8d1;
  
    border: 1px solid transparent;
    color: #292e38;
    border-radius: 5px;
    display: inline-block;
    font-size: .875rem;
    font-weight: 500;
    margin: 2px 0;
    line-height: 1.25;
    padding: 0.625rem 2.5rem;
    text-align: center;
    transition: color .4s cubic-bezier(.445,.05,.55,.95),background-color .4s cubic-bezier(.445,.05,.55,.95),border-color .4s cubic-bezier(.445,.05,.55,.95),box-shadow .4s cubic-bezier(.445,.05,.55,.95),-webkit-box-shadow .4s cubic-bezier(.445,.05,.55,.95);
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
  	width: ${(props)=> props.fullWidth ? '100%' : 'auto' };
    cursor: pointer;
  	&:hover {
    	background-color: #1fdffa;
  	}
`