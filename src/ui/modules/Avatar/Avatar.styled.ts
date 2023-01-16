import styled from "styled-components";

export const AvatarElement = styled.div`
    //border-radius: 100%;
    
    position: relative;
    //overflow: hidden;
    user-select: none;
  	svg {
		fill: #1FDFFA;
		display: block;
		width: 40px;
		height: 40px;
  	}
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`