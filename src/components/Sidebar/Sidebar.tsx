import React from 'react';
import {LogoElement, SidebarElement, SidebarLink, SidebarLinkText} from "./Sidebar.styled";
import logo from "../../img/logo__a.svg";
import { ReactComponent as ProfileIcon} from "../../img/User.svg";
import { ReactComponent as MessageIcon} from "../../img/Messages.svg";
import { ReactComponent as NewsIcon} from "../../img/Layout5.svg";
import { ReactComponent as SettingsIcon} from "../../img/Sliders.svg";

const Sidebar = () => {
    return (
        <SidebarElement>
            <LogoElement>
                <img src={logo} alt="" />
            </LogoElement>
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
        </SidebarElement>
    )
}

export default Sidebar;