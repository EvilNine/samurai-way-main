import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const UserItem = styled.div`
	background-color: #343b49;
  	border-radius: 10px;
	box-shadow: 0 2px 4px #212931;
	padding: .5rem;
  	display: flex;
  	flex-direction: column;
  	height: 100%;
	position: relative;
  	text-align: center;
	transition: .4s cubic-bezier(.445,.05,.55,.95);
 
`
export const UserItemContainer = styled.div`
	padding-top: 70px;
  	padding-bottom: 30px;
  	height: 100%;
`
export const UserImg = styled(NavLink)`
	border-radius: 10px;
	background-color: #475164;
	overflow: hidden;
	position: relative;
  	display: flex;
  	align-items: center;
  	justify-content: center;
  	height: 100px;
	width: 100px;
  	margin: -50px auto 0;
  	img {
		height: 100%;
		object-fit: cover;
		width: 100%;
	}
`
export const UserBody = styled.div`

`
export const UserFooter = styled.div`
	margin-top: auto;
  	padding-top: .5rem;
`
export const UserName = styled.div`
	font-weight: 700;
  	font-size: 1.125rem;
  	color: #fff;
	margin-bottom: .5rem;
	margin-top: .5rem;
`

export const UserLocation = styled.div`
	font-style: italic;
  	margin-bottom: .5rem;
  	margin-top: .5rem;
	span {
		margin-left: 3px;
	  	margin-right: 3px;
	}
`
export const UserStatus = styled.div`

`