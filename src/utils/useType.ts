import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

type Type = {
	delay?: number;
	reverse?: boolean;
	length: number;
};

export const useType = (type?: Type) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const { delay = 0, reverse = false, length = 0 } = type ?? {};

	const springAnimation = spring({
		fps,
		frame: frame - delay,
		config: { mass: 50, damping: 90, overshootClamping: true },
	});

	const interpolateRange = reverse ? [length, 0] : [0, length];

	return interpolate(springAnimation, [0, 1], interpolateRange);
};
