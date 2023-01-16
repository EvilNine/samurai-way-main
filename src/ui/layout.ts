import styled from "styled-components";

type WrapperType = {
    display?: string
    wrap?: string
}
type MainType = {blank?: boolean}
type ColType = {
    xs?: number
    sm?: number
    md?: number
    lg?: number
}

const getWidthCol = (span:number):string => {
    //if(!span) return
    const width = span / 12 * 100
    return `
        flex: 0 0 ${width}%;
        max-width: ${width}%;
    `;
}

export const Wrapper = styled.div<WrapperType>`
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px 30px;
    display: ${(props)=> props.display ? props.display : 'block' };
    flex-wrap: ${(props)=> props.display ? props.display : 'wrap' };
`

export const Main = styled.main<MainType>`
    background-color: ${(props)=> props.blank ? 'transparent' : '#343b49' };
    border-radius: ${(props)=> props.blank ? '0' : '5px' };
    box-shadow: ${(props)=> props.blank ? 'none' : '0 2px 4px #212931' };
    width: 100%;
    margin-top: 66px;
    //position: relative;
    //overflow: hidden;
    z-index: 1;
`

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
`
export const Col = styled.div<ColType>`
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    ${({xs})=> (xs?getWidthCol(xs)  : 'flex: 0 0 100%;max-width: 100%;') }
    @media only screen and (min-width: 768px) {
        ${({sm})=> (sm?getWidthCol(sm)  : 'flex: 0 0 100%;max-width: 100%;') }
    }
    @media only screen and (min-width: 992px) {
        ${({md})=> (md?getWidthCol(md)  : 'flex: 0 0 100%;max-width: 100%;') }
    }
    @media only screen and (min-width: 1200px) {
        ${({lg})=> (lg?getWidthCol(lg)  : 'flex: 0 0 100%;max-width: 100%;') }
    }
`