import styled from "styled-components";

export const AvatarElement = styled.div`
    border-radius: 100%;
    width: 40px;
    height: 40px;
    position: relative;
    overflow: hidden;
    user-select: none;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`