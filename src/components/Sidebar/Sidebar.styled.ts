import styled from "styled-components";
import {NavLink} from "react-router-dom";

type LinkPropsType = {
    activeClassName?: string
}
export const SidebarElement = styled.aside`
    background-color: #343b49;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    border-radius: 0;
    padding: 10px;
    width: 96px;
    box-shadow: 2px 0 4px #212931;
    nav {
        width: 100%;
    }
`
export const SidebarLinkText = styled.span`
    background-color: #05b8d1;
    position: absolute;
    border-radius: 3px;
    left: 100%;
    top: 50%;
    color: #292e38;
    font-weight: 500;
    font-size: .875rem;
    line-height: 1.25;
    padding: 3px 10px;
    opacity: 0;
    visibility: hidden;
    transform: translate(5px,-50%);
    transition: opacity .4s cubic-bezier(.445,.05,.55,.95),
                visibility .4s cubic-bezier(.445,.05,.55,.95),
                transform .4s cubic-bezier(.445,.05,.55,.95);
    &:before {
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 7px 7px 7px 0;
        border-color: transparent #05b8d1 transparent transparent;
        position: absolute;
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
    }
`

export const SidebarLink = styled(NavLink)<LinkPropsType>`
    background-color: #292e38;
    //box-shadow: 0 .3125rem .625rem 0 #212931;
    border-radius: 5px;
    color: #bfc9d9;
    text-decoration: none;
    position: relative;
    display: flex;
    width: 48px;
    height: 48px;
    margin: 15px auto;
    justify-content: center;
    align-items: center;
    transition: color .4s cubic-bezier(.445,.05,.55,.95),
                box-shadow .4s cubic-bezier(.445,.05,.55,.95);
    &.active {
        box-shadow: 0 0.3125rem 0.625rem 0 rgba(5, 184, 209, 65%);
        color: #05b8d1;
    }
    // &.active ${SidebarLinkText} {
    //     opacity: 1;
    //     visibility: visible;
    //     transform: translate(20px, -50%);
    // }
    &:hover ${SidebarLinkText} {
        opacity: 1;
        visibility: visible;
        transform: translate(20px, -50%);
    }
`


export const LogoElement = styled.div`
    width: 32px;
    height: 32px;
    flex: 0 0 32px;
    margin: 0 auto;
    img {
        width: 2rem;
    }
`

export const SidebarAuth = styled.div`
    margin-top: auto;
    width: 100%;
    a {
        color: #fff;
        text-decoration: none;
    }
`
export const SidebarAuthTrue = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Logout = styled.button`
    //background: none;
    background-color: #292e38;
    border-radius: 5px;
    
    border: 0;
    padding: 8px;
    margin-top: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #bfc9d9;
    transition: color .4s cubic-bezier(.445,.05,.55,.95),
                box-shadow .4s cubic-bezier(.445,.05,.55,.95);
    &:active, &:focus {
        outline: none
    }
    &:hover {
        box-shadow: 0 0.3125rem 0.625rem 0 rgba(5, 184, 209, 65%);
    }
`