import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
type Offset = {
	delay?: number;
	duration?: number;
	range?: [number, number];
	reverse?: boolean;
	damping?: number;
};

export const useOffset = (offset?: Offset) => {
	const frame = useCurrentFrame();
	const { height, fps } = useVideoConfig();
	const {
		delay = 0,
		duration = 30,
		range = [height, 0],
		reverse = false,
		damping = 200,
	} = offset ?? {};

	const springAnimation = spring({
		fps,
		frame: frame - delay,
		config: { damping },
		durationInFrames: duration,
	});

	const interpolateRange = reverse ? [range[1], range[0]] : range;

	return interpolate(springAnimation, [0, 1], interpolateRange);
};
