import React from 'react';
import {AvatarElement} from "./Avatar.styled";

type AvatarPropsType = {
    src: string
    alt?: string
}

const Avatar: React.FC<AvatarPropsType> = (props) => {
    return (
        <AvatarElement>
            <img src={props.src} alt={props.alt}/>
        </AvatarElement>
    )
};

export default Avatar;