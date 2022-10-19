import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

type Scale = {
	delay?: number;
	duration?: number;
	range?: [number, number];
	reverse?: boolean;
};

export const useScale = (scale?: Scale) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const {
		delay = 0,
		duration = 30,
		reverse = false,
		range = [2, 1],
	} = scale ?? {};

	const springAnimation = spring({
		fps,
		frame: frame - delay,
		config: { damping: 16 },
		durationInFrames: duration,
	});

	const interpolateRange = reverse ? [range[1], range[0]] : range;

	return interpolate(springAnimation, [0, 1], interpolateRange);
};
