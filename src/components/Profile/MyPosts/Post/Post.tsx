import React from 'react';
import Avatar from "../../../../ui/modules/Avatar";
import {PostElement, PostText} from "./Post.styled";

type PropPostType = {
    id: number
    message?: string
    likesCount: number

}

const Post: React.FC<PropPostType> = (
    {
        id,
        likesCount,
        message
    }
    ) => {
    return (
        <PostElement>
            <Avatar src={'https://img.freepik.com/premium-photo/hipster-head-with-empty-space-3d-render-illustration_1172-983.jpg?size=338&ext=jpg&uid=R433202&ga=GA1.2.1420375084.1669209175'} />
            <PostText>
                {message && message}
                <div>
                    <span>Like {likesCount}</span>
                </div>
            </PostText>
        </PostElement>
    )
};

export default Post;