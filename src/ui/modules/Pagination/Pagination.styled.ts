import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const PaginationContainer = styled.div`
	display: flex;
  	align-items: center;
  	justify-content: space-between;
  	margin-top: 1.25rem;
`

export const PaginationLinks = styled.div`
	display: flex;
`

export const PaginationLinksItem = styled.a`
	background-color: #343b49;
	border: 1px solid #343b49;
	border-radius: 0.5rem;
	color: #7b8aa3;
  	display: flex;
  	align-items: center;
	justify-content: center;
	margin-right: 0.5rem;
	text-decoration: none;
	width: 40px;
  	height: 40px;
`
