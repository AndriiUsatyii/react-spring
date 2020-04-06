import React from 'react';
import styled from 'styled-components';
import { useTrail, animated } from 'react-spring';

const items = [
    'Lorem ipsum is simply dummy', 
    'text of the printing and', 
    'typesetting industry.'
];

const SlideText = () => {
    const trail = useTrail(items.length, {
        x: 0,
        delay: 300,
        opacity: 1,
        from: { opacity: 0, x: 20, height: 0 },
        config: { mass: 5, tension: 2000, friction: 200 },
    });

    return (
        <Wrap>
            {trail.map(({ x, height, ...rest }, index) => (
                <animated.div
                    key={items[index]}
                    className="trails-text"
                    style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                    <animated.div>{items[index]}</animated.div>
                </animated.div>
            ))}
        </Wrap>
    )
}

const Wrap = styled.div`
    top: 0;
    left: 10%;
    bottom: 0;
    width: 450px;
    margin: auto;
    height: 120px;
    display: flex;
    z-index: 9999;
    position: absolute;
    flex-direction: column;
    justify-content: space-around;
    div {
        overflow: hidden;
    }
    .trails-text {
        color: #fff;
        font-size: 28px;
        font-weight: 500;
        text-transform: uppercase;
        will-change: transform, opacity;
    }
`

export default SlideText;