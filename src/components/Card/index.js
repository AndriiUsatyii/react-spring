import React from 'react';
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';
import Office from '../../assets/image/office.jpg';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const Card = () => {
	const [props, set] = useSpring(() => (
		{ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }
	));

  return (
		<Wrap>
			<animated.div
				class="card-item"
				onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
				onMouseLeave={() => set({ xys: [-5, 0, 1] })}
				style={{ transform: props.xys.interpolate(trans) }}
			/>
		</Wrap>
  )
}

const Wrap = styled.div`
	width: 33%;
	.card-item {
		width: 250px;
		height: 200px;
		background: grey;
		border-radius: 5px;
		margin: 20px 50px 40px;
		background-size: cover;
		will-change: transform;
		border: 15px solid white;
		transition: box-shadow 0.5s;
		background-position: center center;
		background-image: ${`url(${Office})`}; 
		box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
		&:hover {
			box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
		}
	}
`;

