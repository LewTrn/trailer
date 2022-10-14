import {interpolate} from 'remotion';
import {spring} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {useVideoConfig} from 'remotion';

type Offset = {
	delay?: number;
	duration?: number;
	range?: [number, number];
	reverse?: boolean;
};

export const useOffset = (offset?: Offset) => {
	const frame = useCurrentFrame();
	const {height, fps} = useVideoConfig();
	const {
		delay = 0,
		duration = 30,
		range = [height, 0],
		reverse = false,
	} = offset ?? {};

	const springAnimation = spring({
		fps,
		frame: frame - delay,
		config: {damping: 200},
		durationInFrames: duration,
	});

	const interpolateRange = reverse ? [range[1], range[0]] : range;

	return interpolate(springAnimation, [0, 1], interpolateRange);
};
