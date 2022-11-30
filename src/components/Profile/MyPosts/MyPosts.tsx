import React from 'react';
import Post from "./Post";
import MyPostForm from "./MyPostForm";
import {MyPostsElement} from "./MyPosts.styled";

const MyPosts = () => {
    const postData = [
        {id: 1,message: 'Hi, how are you?', likesCount: 12},
        {id: 2,message: 'yo', likesCount: 12},
        {id: 3,message: 'It\'s my first post', likesCount: 12},
        {id: 4,message: 'hi', likesCount: 12},
        {id: 5,message: 'hi', likesCount: 12},
    ]
    return (
        <MyPostsElement>
            My posts
            <MyPostForm />
            { postData.map(item => <Post key={item.id} {...item}/>) }
        </MyPostsElement>
    )
}

export default MyPosts;