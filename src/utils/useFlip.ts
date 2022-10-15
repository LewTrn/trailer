import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

type Flip = {
	delay?: number;
	duration?: number;
	reverse?: boolean;
};

export const useFlip = (flip?: Flip) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const { delay = 0, duration = 30, reverse = false } = flip ?? {};

	const springAnimation = spring({
		fps,
		frame: frame - delay,
		config: { damping: 200 },
		durationInFrames: duration,
	});

	const interpolateRange = reverse ? [180, 0] : [0, 180];

	return interpolate(springAnimation, [0, 1], interpolateRange);
};
