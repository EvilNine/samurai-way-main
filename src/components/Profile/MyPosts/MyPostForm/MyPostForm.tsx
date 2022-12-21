import React, {ChangeEvent} from 'react';
import {Textarea} from "../../../../ui/form/Textarea";
import {Button} from "../../../../ui/form/Button";

import {MyPostFormElement} from "./MyPostForm.styled";
import {addPostAC, AddPostACType, changeNewTextAC, ChangeNewTextACType} from "../../../../redux/profileReducer";


type MyPostFormPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
    postText: string
}


const MyPostForm: React.FC<MyPostFormPropsType> = (props) => {
    
    
    const addPostHandler = () => {
        props.addPost()
    }
    
    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value
        props.updateNewPostText(newText)
        
    }
    
    return (
        <MyPostFormElement>
            <Textarea onChange={onChangeText} value={props.postText} />
            <Button onClick={addPostHandler}>Add post</Button>
        </MyPostFormElement>
    )
};

export default MyPostForm;