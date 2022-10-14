import {interpolate} from 'remotion';
import {spring} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {useVideoConfig} from 'remotion';

type Fade = {
	delay?: number;
	duration?: number;
	reverse?: boolean;
};

export const useFade = (fade?: Fade) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const {delay = 0, duration = 30, reverse = false} = fade ?? {};

	const springAnimation = spring({
		fps,
		frame: frame - delay,
		config: {damping: 200},
		durationInFrames: duration,
	});

	const interpolateRange = reverse ? [1, 0] : [0, 1];

	return interpolate(springAnimation, [0, 1], interpolateRange);
};
