import React from 'react';
import { ReactComponent as FacebookIcon } from "../../../img/social/facebook.svg";
import { ReactComponent as GithubIcon } from "../../../img/social/github.svg";
import { ReactComponent as InstagramIcon } from "../../../img/social/instagram.svg";
import { ReactComponent as VkIcon } from "../../../img/social/vk.svg";
import { ReactComponent as YoutubeIcon } from "../../../img/social/youtube.svg";
import {ContactsType} from "../../../types";
import {NavLink} from "react-router-dom";
import {SocialContainer} from "./Social.styled";

const SocialLinks = (props: ContactsType) => {
	return (
		<SocialContainer>
			{props.facebook && <NavLink to={{pathname: props.facebook}  }><FacebookIcon /></NavLink>}
			{props.github && <NavLink to={{pathname: props.github}}><GithubIcon /></NavLink>}
			{props.instagram && <NavLink to={{pathname: props.instagram}}><InstagramIcon /></NavLink>}
			{props.vk && <NavLink to={{pathname: props.vk}}><VkIcon /></NavLink>}
			{props.youtube && <NavLink to={{pathname:props.youtube}}><YoutubeIcon /></NavLink>}
		</SocialContainer>
	);
};

export default SocialLinks;