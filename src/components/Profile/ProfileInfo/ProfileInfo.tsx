import React from 'react';
import {
    ProfileInfoImage,
    ProfileInfoElement,
    ProfileAvatarStatus,
    ProfileAvatar,
    ProfileStatus, ProfileDetails, ProfileName
} from "./ProfileInfo.styled";
import imgSrc from "../../../img/banner.png";
import Avatar from "../../../ui/modules/Avatar";
import { ProfileType} from "../../../types";
import SocialLinks from "../../../ui/modules/SocialLinks";
import Loader from "../../../ui/modules/Loader";

type PropsType = {
    profile: ProfileType | null
}
const ProfileInfo: React.FC<PropsType> = ({profile}) => {
    if (!profile) {
        return <Loader/>
    }
    // TODO add lookingForAJob icon
    return (
        <>
            <ProfileInfoImage>
                <img src={imgSrc} alt=""/>
                {/*<img src={profile.photos.large ? profile.photos.large! : imgSrc } />*/}
            </ProfileInfoImage>

            <ProfileDetails>
                <ProfileAvatar>
                    <Avatar src={profile ? profile.photos.small : null} />
                </ProfileAvatar>
                <ProfileName>
                    {profile ? profile.fullName : null }
                </ProfileName>
                {profile && <SocialLinks {...profile.contacts} />}
                <ProfileStatus>
                    {profile ? profile.aboutMe : null}
                </ProfileStatus>
            </ProfileDetails>
        </>
    )
};

export default ProfileInfo;