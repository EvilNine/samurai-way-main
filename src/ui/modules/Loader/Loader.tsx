import React from 'react';
import { LoaderContainer } from './Loader.styled';

type PropsType = {
	center?: boolean
}

const Loader: React.FC<PropsType> = (props) => {
	return (
		<LoaderContainer center={props.center}>
			<svg viewBox="22 22 44 44">
				<circle cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6" />
			</svg>
		</LoaderContainer>
	);
};

export default Loader;