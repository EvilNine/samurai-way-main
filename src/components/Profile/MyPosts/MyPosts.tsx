import React from 'react';
import Post from "./Post";
import MyPostForm from "./MyPostForm";
import {MyPostsElement} from "./MyPosts.styled";
import {PropsType} from "./MyPostContainer";

type MyPostType = PropsType

const MyPosts: React.FC<MyPostType> = (props) => {
    
    return (
        <MyPostsElement>
            My posts
            <MyPostForm addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}
                        postText={props.profilePage.postText} />
            { props.profilePage.posts.map(item => <Post key={item.id} {...item}/>) }
        </MyPostsElement>
    )
}

export default MyPosts;