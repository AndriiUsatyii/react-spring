import React from 'react';
import { useSpring, animated } from 'react-spring';

const SliderVideo = ({slide, onWheel}) => {
	const style = useSpring({
        to: {opacity: 1},
        from: {opacity: 0}
    });
	return (
        <animated.div style={style}>
            <video 
                loop 
                muted 
                autoPlay 
                id="slide" 
                onWheel={onWheel}>
                <source src={slide.src} type={slide.type} />
                <poster-source srcset={slide.poster} />
            </video>
        </animated.div>
	)
}

export default SliderVideo;