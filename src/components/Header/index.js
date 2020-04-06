import React from 'react';
import styled from 'styled-components';
import {useHistory, useLocation, useCallback} from '../../hooks';

export const Header = () => {
	const {push} = useHistory();
	const {pathname} = useLocation();

	const clickHandler = useCallback(() => {
		let newPath = pathname === '/grid' 
			? '/work/0' : '/grid';
		push(newPath);
		window.scrollTo(0,0);
	},[pathname]);

	return (
		<MenuButton path={pathname} onClick={clickHandler}>
			<div />
			<div />
			<div />
		</MenuButton>
	);
}; 

const MenuButton = styled.div`
	top: 20px;
	left: 20px;
	width: 22px;
	z-index: 999;
	cursor: pointer;
	transition: 0.4s;
	position: absolute;
	&:hover {
		top: 25px;
		left: 25px;
		transform: scale(1.3);
	}
	div {
		width: 20px;
		height: 2px;
		background: ${({path}) => path === '/grid' ? '#000': '#fff'};
		&:nth-of-type(2) {
			margin: 4px 0;
		}
	}
`;