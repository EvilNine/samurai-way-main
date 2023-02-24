import React from "react";
import { Field } from "formik";
import styled from "styled-components";
import {memo} from "react";


const CheckIcon = styled.div`
	background-color: #292e38;
  	border: 1px solid #05b8d1;
	border-radius: 5px;
  	width: 24px;
  	height: 24px;
  	flex: 0 0 24px;
  	margin-right: 10px;
  	position: relative;
  	transition: background-color .4s cubic-bezier(.445,.05,.55,.95);
 	&:after {
		content: '';
		position: absolute;
		width: 6px;
		height: 11px;
		border: 2px solid #292e38;
		border-top: 0;
		border-left: 0;
		left: 8px;
		top: 5px;
	  	opacity: 0;
		transform: rotate(40deg);
      	transition: opacity .25s cubic-bezier(.445,.05,.55,.95);
	}
`
const Check = styled.label`
	display: inline-flex;
  	align-items: center;
	position: relative;
  	cursor: pointer;
	color: #bfc9d9;
	transition: border-color .25s cubic-bezier(.445,.05,.55,.95);
  	input {
	  	width: 0;
	  	height: 0;
	  	visibility: hidden;
	  	position: absolute;
	}
  	input:checked + ${CheckIcon} {
  		background: #05b8d1;
	  	&:after {
		  	opacity: 1;
        }
	}
}
`
type CheckboxPropsType = {
	label: string
	type: 'checkbox' | 'radio'
	name: string
}

const Checkbox: React.FC<CheckboxPropsType> =  memo((props) => {
	return <Check>
		<Field type={props.type} name={props.name}/>
		<CheckIcon />
		{props.label}
	</Check>
})



export default Checkbox;