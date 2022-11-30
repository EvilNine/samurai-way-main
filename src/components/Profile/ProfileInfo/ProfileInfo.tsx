import React from 'react';
import {
    ProfileInfoImage,
    ProfileInfoElement,
    AvatarDescription,
    ProfileDescription} from "./ProfileInfo.styled";
import imgSrc from "../../../img/banner.png";
import Avatar from "../../../ui/modules/Avatar";

const ProfileInfo = (props: any) => {
    return (
        <ProfileInfoElement>
            <ProfileInfoImage>
                <img src={imgSrc} alt=""/>
            </ProfileInfoImage>

            <AvatarDescription>
                <Avatar src={'https://img.freepik.com/premium-photo/hipster-head-with-empty-space-3d-render-illustration_1172-983.jpg?size=338&ext=jpg&uid=R433202&ga=GA1.2.1420375084.1669209175'} />
                <ProfileDescription>
                    description
                </ProfileDescription>
            </AvatarDescription>
        </ProfileInfoElement>
    )
};

export default ProfileInfo;