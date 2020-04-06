import React from 'react';
import styled from 'styled-components';
import {useEffect, useHistory} from '../../hooks';
import {CircularProgress} from '@material-ui/core';

const Splash = () => {
	const history = useHistory();

	useEffect(() => {
		const timer = setTimeout(() => {
			history.push('/work/0');
		}, 1500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<Wrap>
			<CircularProgress color="#ff0000" size={50} />
		</Wrap>
	)
}

const Wrap = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	min-height: 500px;
	align-items: center;
	justify-content: center;
`;

export default Splash;