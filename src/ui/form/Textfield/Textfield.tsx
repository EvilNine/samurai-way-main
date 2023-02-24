
import styled, {css} from "styled-components";
import {Field, FieldHookConfig, FieldProps, useField} from "formik";

type InputPropsType = {
	type?: string
}
export const Input = styled.input<any>`
	background-color: #292e38;
	border: 1px solid #05b8d1;
	border-radius: 5px;
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

type TextfieldPropsType = {
	label: string
	type?: string
	onBlur?: (value: string) => void
}

export const Textfield: React.FC<TextfieldPropsType & FieldHookConfig<string>> = ({label, ...props}) => {
	
	const[field, meta] = useField(props)
	
	//console.log(meta)
	
	return (
		<>
			
			<Input {...field} />
			
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
			
			{/*{touched[field.name] && errors[field.name]*/}
			{/*	&& <div className="error">{errors[field.name]}</div>}*/}
		</>
	)
}



// export const Textfield = styled.input.attrs(props => {
//
// 	return {
// 		value: props.value,
// 		onChange: (e: any) => {
// 			// debugger
// 			if(e.target) {
// 				console.log(e.target.value)
// 				//@ts-ignore
// 				props.onChange(e.target.value)
//
// 			}
// 		}
// 	}
// })`
//
// 	background-color: #292e38;
// 	border: 1px solid #05b8d1;
// 	border-radius: 5px;
// 	resize: none;
// 	padding: 10px;
// 	width: 100%;
// 	color: #bfc9d9;
// 	transition: border-color .4s cubic-bezier(.445,.05,.55,.95);
// 	&:focus, &:active {
// 		border-color: #1fdffa;
// 		outline: none;
// 	}
// `




// ${({ error }) => error && css`
//  	border: 1px solid rgb(191, 49, 12);
//   	outline: none;
// 	&:focus,
// 	&:active {
// 		box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px, rgb(251, 178, 174) 0px 0px 0px 3px;
// 		border: 1px solid rgb(191, 49, 12);
// 		outline: none;
// 	}
//
//   /* Autocomplete styles in Chrome*/
//   &:-webkit-autofill,
//   &:-webkit-autofill:hover,
//   &:-webkit-autofill:focus {
//     	border: 1px solid rgb(191, 49, 12);
//   }
// `}
