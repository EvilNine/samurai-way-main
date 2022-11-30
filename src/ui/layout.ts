import styled from "styled-components";

type WrapperType = {
    display?: string
    wrap?: string
}

export const Wrapper = styled.div<WrapperType>`
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px 30px;
    display: ${(props)=> props.display ? props.display : 'block' };
    flex-wrap: ${(props)=> props.display ? props.display : 'wrap' };
`

export const Main = styled.main`
    background-color: #343b49;
    border-radius: 5px;
    box-shadow: 0 2px 4px #212931;
    width: 100%;
    margin-top: 66px;
    position: relative;
    overflow: hidden;
    z-index: 1;
`