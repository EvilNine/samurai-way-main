import styled, {keyframes} from "styled-components";

const loaderAnimation = keyframes`
	0% {
      	stroke-dasharray: 1px, 200px;
      	stroke-dashoffset: 0;
	}
  	50% {
    	stroke-dasharray: 100px, 200px;
    	stroke-dashoffset: -15px;
  	}
  	100% {
    	stroke-dasharray: 100px, 200px;
    	stroke-dashoffset: -125px;
  	}
`
type LoaderType = {
	center?: boolean
}

export const LoaderContainer = styled.div<LoaderType>`
  	width: 1.25rem;
  	height: 1.25rem;
  	color: #05b8d1;
  	margin: 0 auto;
  	${props => props.center && `
  		position: absolute;
  		left: 50%;
  		top: 50%;
  		transform: translate(-50%,-50%;);
  	`}
	svg {
	  	display: block;
		circle {
			stroke: currentcolor;
			stroke-dasharray: 80px, 200px;
			stroke-dashoffset: 0;
			animation: 1.4s ease-in-out 0s infinite normal none running ${loaderAnimation};
		}
	}
`
