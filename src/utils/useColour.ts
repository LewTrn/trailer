import {
	interpolateColors,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

type Colour = {
	delay?: number;
	duration?: number;
	range?: [string, string];
	reverse?: boolean;
};

export const useColour = (colour?: Colour) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const {
		delay = 0,
		duration = 30,
		range = ['#000', '#fff'],
		reverse = false,
	} = colour ?? {};

	const springAnimation = spring({
		fps,
		frame: frame - delay,
		config: { damping: 200 },
		durationInFrames: duration,
	});

	const interpolateRange = reverse ? [range[1], range[0]] : range;

	return interpolateColors(springAnimation, [0, 1], interpolateRange);
};
