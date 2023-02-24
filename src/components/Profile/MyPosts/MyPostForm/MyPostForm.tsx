import React from 'react';
import {Button} from "../../../../ui/form/Button";
import {MyPostFormElement} from "./MyPostForm.styled";
import TextareaCustom from "../../../../ui/form/Textarea/TextareaCustom";
import {maxLengthCreator, minLengthCreator, requierdField} from "../../../../utils/validators";
import {Form, Formik} from "formik";


type MyPostFormPropsType = {
    addPost: (postText: string) => void
}

type FormPropsType = {
    message?: string
}

type PostFormPropsType = {
    onSubmit: (formData: FormPropsType) => void
}

const maxLength = maxLengthCreator(10)
const minLength = minLengthCreator(2)



const PostForm: React.FC<PostFormPropsType> = (props) => {
    return (
        <Formik initialValues={{ message: ''}}
                onSubmit={props.onSubmit}>
            <Form>
                <TextareaCustom placeholder={"Enter text"}
                                component={'textarea'}
                                validate={[requierdField, maxLength, minLength]}
                                name={"message"}/>
                <Button type="submit">Add post</Button>
            </Form>
        </Formik>
    )
}

const MyPostForm: React.FC<MyPostFormPropsType> = (props) => {
    
    const onSubmit = (formData: FormPropsType) => {
        formData.message && props.addPost(formData.message)
    }
    
    return (
        <MyPostFormElement>
            <PostForm onSubmit={onSubmit} />
        </MyPostFormElement>
    )
};

export default MyPostForm;