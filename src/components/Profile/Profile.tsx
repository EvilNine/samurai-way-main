import React from 'react';
import ProfileInfo from "./ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";
import { Main } from '../../ui/layout';
import {ProfilePropsType} from "./ProfileContainer";
import {ProfileLayout} from "./Profile.styled";
import Loader from "../../ui/modules/Loader";

type PropsType = ProfilePropsType

const Profile: React.FC<PropsType> = ({profile,posts,postText,setUserProfile}) => {
    // console.log(props)
    if (!profile) {
        return <Loader/>
    }
    return (
        <Main blank>
            <ProfileLayout>
                <ProfileInfo profile={profile} />
                <MyPostContainer  />
            </ProfileLayout>
        </Main>
    )
}

export default Profile;