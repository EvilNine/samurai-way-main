import styled from "styled-components";

type EditableSpanType = {
	justifyContent?: string
	alignContent?: string
	onEditHandler?: () => void
}

export const EditableSpanWrapper = styled.div<EditableSpanType>`
	display: flex;
  	justify-content: ${props => props.justifyContent ? props.justifyContent : 'start'};
  	align-content: ${props => props.alignContent ? props.alignContent : 'start'};
  	position: relative;
  	cursor: pointer;
	text-align: left;
  	transition: color .4s cubic-bezier(.445,.05,.55,.95);
  	
	&:hover {
		color: #1fdffa;
	}
  	span {
		word-break: break-all;
	}
  	svg {
		fill: currentColor;
	  	width: 1.25rem;
	  	height: 1.25rem;
	  	flex: 0 0 1.25rem;
      	transition: fill .4s cubic-bezier(.445,.05,.55,.95);
	}
`