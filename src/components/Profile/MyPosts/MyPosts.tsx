import React from 'react';
import Post from "./Post";
import MyPostForm from "./MyPostForm";
import {MyPostsElement} from "./MyPosts.styled";
import {ProfilePropsType} from "../Profile";

// type MyPostPropsType = ProfilePageType  & {
//     addPostCallback?: (message: string) => void
//     ChangePostText=
// }

const MyPosts: React.FC<ProfilePropsType> = (props) => {
    
    return (
        <MyPostsElement>
            My posts
            <MyPostForm
                addPostCallback={props.addPostCallback}
                ChangePostText={props.ChangePostText}
                postText={props.postText} />
            { props.posts.map(item => <Post key={item.id} {...item}/>) }
        </MyPostsElement>
    )
}

export default MyPosts;