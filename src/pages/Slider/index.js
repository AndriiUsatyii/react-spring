import React from 'react';
import {
	useState, 
	useEffect,
	useParams, 
	useHistory,
} from '../../hooks';
import SlideText from './SlideText';
import SlideVideo from './SlideVideo';
import {sliderData} from '../../data';
import styled from 'styled-components';
import {Header} from '../../components';

const length = sliderData.length;

const prevIndex = (index, last) => index - 1 
	? (index - 1 < 0 ? last : index - 1) 
	: 0;

const nextIndex = (index, last) => index + 1 < last 
	? index + 1 
	: (index + 1 > last ? 0 : last);

const Slider = () => {
	const {id} = useParams();
	const history = useHistory();
	const last = length ? length - 1 : 0;

	const [index, setIndex] = useState(0);
	const [slide, setSlide] = useState({});
	const [updated, setUpdate] = useState(false);
	const [loading, setLoading] = useState(true);

	const videoHandler = (index) => {
		setUpdate(true);
		setLoading(true);
		history.push(`/work/${index}`);
	}

	const wheelHandler = ({deltaY}) => {
		let newIndex;
		
		if(deltaY > 100) newIndex = nextIndex(index, last);
		if(deltaY < -100) newIndex = prevIndex(index, last);

		if(!updated && (newIndex || newIndex === 0)) {
			videoHandler(newIndex);
		}
	};

	useEffect(() => {
		setIndex(() => +id);
		setSlide(() => sliderData[+id]);
		setLoading(false);

		const timer = setTimeout(() => setUpdate(false), 500);
		return () => clearTimeout(timer);
	}, [id]);

	return (
		<Wrap>
			<Header />
			{
				loading ? null :
				<>
					<SlideText />
					<SlideVideo slide={slide} onWheel={wheelHandler}/>
				</>
			}
		</Wrap>
	)
}

const Wrap = styled.div`
	width: 100%;
	height: 100vh;
	overflow: hidden;
	min-height: 500px;
	position: relative;
	#slide {
		height: 100vh;
		min-width: 100%;
		min-height: 500px;
		object-fit: cover;
	}
	.spinner {
		width: 100%;
		height: 100%;
	}
`;

export default Slider;