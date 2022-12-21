import styled from "styled-components";

export const DialogsElement = styled.div`
    display: flex;
    padding: 0 15px;
`

export const DialogColLeft = styled.div`
    flex: 0 0 20%;
    max-width: 20%;
    padding: 30px 15px;
    display: flex;
    flex-wrap: wrap;
  	flex-direction: column;
    gap: 15px;
`

export const DialogColRight = styled.div`
    border-left: 1px solid #292E38;
    flex: 0 0 80%;
    max-width: 80%;
    padding: 30px;
`