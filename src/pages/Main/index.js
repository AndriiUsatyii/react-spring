import React from 'react';
import styled from 'styled-components';
import {Card, Header} from '../../components';

const cards = new Array(6).fill(0);

const MainPage = () => {
	return (
		<Wrap>
			<Header />
			{cards.map((item, i) => <Card key={i} />)}
		</Wrap>
	)
}

const Wrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 5% 10%;
	justify-content: space-around;
`;

export default MainPage;