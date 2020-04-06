import React from 'react';
import styled from 'styled-components';
import {Header} from '../../components';

const NoMatch = () => {
	return (
		<Wrap>
			<Header />
			<span>404</span>
		</Wrap>
	)
}

const Wrap = styled.div``;

export default NoMatch;