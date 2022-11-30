import React from 'react';
import {Textarea} from "../../../../ui/form/Textarea";
import {Button} from "../../../../ui/form/Button";

import {MyPostFormElement} from "./MyPostForm.styled";

const MyPostForm = () => {
    const addPostHandler = () => {
        console.log('hi')
    }
    return (
        <MyPostFormElement>
            <Textarea />
            <Button onClick={addPostHandler}>Add post</Button>
        </MyPostFormElement>
    )
};

export default MyPostForm;