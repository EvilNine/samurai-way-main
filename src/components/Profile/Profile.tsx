import React from 'react';
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";
import { ProfilePageType} from "../../redux/state";


export type ProfilePropsType = ProfilePageType & {
    addPostCallback: ()=>void
    ChangePostText: (newText: string)=>void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    
    return (
        <>
            <ProfileInfo />
            <MyPosts {...props}/>
        </>
    )
}

export default Profile;