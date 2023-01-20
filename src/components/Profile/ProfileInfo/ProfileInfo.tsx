import React from 'react';
import {
    ProfileInfoImage,
    ProfileAvatar,
    ProfileDetails,
    ProfileName,
    ProfileAbout
} from "./ProfileInfo.styled";
import imgSrc from "../../../img/banner.png";
import Avatar from "../../../ui/modules/Avatar";
import { ProfileType} from "../../../types";
import SocialLinks from "../../../ui/modules/SocialLinks";
import Loader from "../../../ui/modules/Loader";
import ProfileStatus from "./ProfileStatus";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}
const ProfileInfo: React.FC<PropsType> = ({profile, status, updateStatus}) => {
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
                
                <ProfileAbout>
                    {profile ? profile.aboutMe : null}
                </ProfileAbout>
    
                <ProfileStatus status={status} updateStatus={updateStatus} />
            </ProfileDetails>
        </>
    )
};

export default ProfileInfo;