import React, {ChangeEvent} from 'react';
import {Textarea} from "../../../../ui/form/Textarea";
import {Button} from "../../../../ui/form/Button";

import {MyPostFormElement} from "./MyPostForm.styled";


type MyPostFormPropsType = {
    addPostCallback: ( ) => void
    ChangePostText: (postText: string) => void
    postText: string
}

const MyPostForm: React.FC<MyPostFormPropsType> = (props) => {
    
    
    const addPostHandler = () => {
        props.addPostCallback()
    }
    
    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.ChangePostText(e.currentTarget.value)
    }
    
    return (
        <MyPostFormElement>
            <Textarea onChange={onChangeText} value={props.postText} />
            <Button onClick={addPostHandler}>Add post</Button>
        </MyPostFormElement>
    )
};

export default MyPostForm;