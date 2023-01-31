
import styled from "styled-components";

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

export const Textfield = styled.input<any>`
{
  (props) => console.log(props)
}
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
