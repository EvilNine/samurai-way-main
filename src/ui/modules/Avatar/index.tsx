import React from 'react';
import {AvatarElement} from "./Avatar.styled";

type AvatarPropsType = {
    src?: string | null
    alt?: string
}

const Avatar: React.FC<AvatarPropsType> = (props) => {
    return (
        <AvatarElement>
            {props.src === null ?
                <svg viewBox="0 0 673 673" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M336.666 0.333008C151.493 0.333008 0.666016 150.413 0.666016 336.333C0.666016 522.253 151.493 672.333 336.666 672.333C521.839 672.333 672.666 522.253 672.666 336.333C672.666 150.413 521.839 0.333008 336.666 0.333008ZM336.666 160.866C390.426 160.866 434.478 204.918 434.478 258.678C434.478 312.438 390.426 356.49 336.666 356.49C282.906 356.49 238.854 312.438 238.854 258.678C238.854 204.924 282.906 160.866 336.666 160.866ZM336.666 619.32C245.573 619.32 164.186 576.013 111.919 508.814C154.482 428.918 239.602 374.414 336.666 374.414C433.734 374.414 518.853 428.92 561.413 508.814C509.897 576.017 427.759 619.32 336.666 619.32Z"/>
                </svg>
                :
                <img src={props.src} alt={props.alt}/>
            }
        </AvatarElement>
    )
};

export default Avatar;