import styled from "styled-components";
import {AvatarElement} from "../../../ui/modules/Avatar/Avatar.styled";


export const ProfileInfoElement = styled.div`
    margin-bottom: 15px;
`

export const ProfileInfoImage = styled.div`
  	grid-area: imgArea;
  	height: 300px;
  	div {
		width: 100%;
		height: 100%;
	}
    img {
		box-shadow: 0 2px 4px #212931;
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: relative;
    }
`
export const ProfileDetails = styled.div`
  	background-color: #343b49;
	grid-area: detailsArea;
`

export const ProfileAvatarStatus = styled.div`
    border-bottom: 1px solid #292E38;
    padding: 15px;
    display: flex;
    align-items: center;
`
export const ProfileAvatar = styled.div`
  	background-color: #475164;
  	border-radius: 50%;
	box-shadow: 0 2px 4px #212931;
	width: 140px;
	height: 140px;
	overflow: hidden;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: -70px auto 0;
  	color: #292e38;
`
export const ProfileAbout = styled.div`
    margin-top: 15px;
  	text-align: center;
`

export const Status = styled.div`
    margin: 15px;
  	text-align: center;
  	
`
export const ProfileName = styled.div`
	text-align: center;
  	font-weight: 700;
  	font-size: 20px;
  	margin-top: 15px;
  	margin-bottom: 15px;
  	
`