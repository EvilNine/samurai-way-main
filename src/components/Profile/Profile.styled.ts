import styled from "styled-components";

export const ProfileLayout = styled.div`
	display: grid;
	grid-template-columns: 25% 1fr 1fr;
	grid-template-rows: 300px auto;
	gap: 0;
	grid-template-areas:
		"imgArea imgArea imgArea"
		"detailsArea postArea postArea";
`

export const ProfileElementImage = styled.div`
    display: flex;
    margin-bottom: 15px;
    img {
        width: 100%;
        box-shadow: 0 2px 4px #212931;
    }
`