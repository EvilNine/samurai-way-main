import React from 'react';
import {
    LogoElement,
    Logout,
    SidebarAuth,
    SidebarAuthTrue,
    SidebarElement,
    SidebarLink,
    SidebarLinkText
} from "./Sidebar.styled";
import logo from "../../img/logo__a.svg";
import { ReactComponent as ProfileIcon} from "../../img/User.svg";
import { ReactComponent as MessageIcon} from "../../img/Messages.svg";
import { ReactComponent as NewsIcon} from "../../img/Layout5.svg";
import { ReactComponent as SettingsIcon} from "../../img/Sliders.svg";
import { ReactComponent as UsersIcon } from "../../img/Users.svg";
import { ReactComponent as LogoutIcon } from "../../img/PowerButton.svg";
import {NavLink} from "react-router-dom";
import {SidebarPropsType} from "./SidebarContainer";
import {Button} from "../../ui/form/Button";


const Sidebar = (props: SidebarPropsType) => {
    return (
        <SidebarElement>
            <LogoElement><img src={logo} alt="" /></LogoElement>
            <nav>
                <div>
                    <SidebarLink to="/profile" activeClassName="active">
                        <ProfileIcon />
                        <SidebarLinkText>
                            Profile
                        </SidebarLinkText>
                    </SidebarLink>
                </div>
                <div>
                    <SidebarLink to="/messages" activeClassName="active">
                        <MessageIcon />
                        <SidebarLinkText>
                            Messages
                        </SidebarLinkText>
                    </SidebarLink>
                </div>
                <div>
                    <SidebarLink to="/users" activeClassName="active">
                        <UsersIcon />
                        <SidebarLinkText>
                            Users
                        </SidebarLinkText>
                    </SidebarLink>
                </div>
                <div>
                    <SidebarLink to="/test" activeClassName="active">
                        <NewsIcon />
                        <SidebarLinkText>
                            News
                        </SidebarLinkText>
                    </SidebarLink>
                </div>
                <div>
                    <SidebarLink to="/test2" activeClassName="active">
                        <SettingsIcon />
                        <SidebarLinkText>
                            Settings
                        </SidebarLinkText>
                    </SidebarLink>
                </div>
            </nav>
            
            <SidebarAuth>
                {
                    props.isAuth
                        ? <SidebarAuthTrue>{props.login}  <Logout onClick={props.logout}><LogoutIcon /></Logout> </SidebarAuthTrue>
                        : <NavLink to={'/login'}>login</NavLink>
                }
            </SidebarAuth>
        </SidebarElement>
    )
}

export default Sidebar;