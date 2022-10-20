import { FC } from 'react';
import { AbsoluteFill } from 'remotion';
import { useFade, useFlip, useScale } from '../../utils';

type SpinnerProps = {
	delay: number;
	isSwapped?: boolean;
};

const Spinner: FC<SpinnerProps> = ({ delay, isSwapped = false }) => {
	// Entrance
	const spinnerFadeIn = useFade({ delay });

	// Animate
	const spinnerScale = useScale({ delay: delay + 75, range: [0.15, 1] });
	const xFlip1 = useFlip({ delay: delay + 15 });
	const xFlip2 = useFlip({ delay: delay + 75 });
	const yFlip1 = useFlip({ delay: delay + 45 });

	// Exit
	const spinnerFadeOut = useFade({ delay: delay + 75, reverse: true });

	const opacity =
		spinnerFadeIn < spinnerFadeOut ? spinnerFadeIn : spinnerFadeOut;

	return (
		<div
			style={{
				opacity,
				transform: `scale(${spinnerScale}) rotateX(${
					isSwapped ? yFlip1 : xFlip1
				}deg) rotateX(${isSwapped ? 0 : xFlip2}deg) rotateY(${
					isSwapped ? xFlip1 : yFlip1
				}deg) rotateY(${isSwapped ? xFlip2 : 0}deg)`,
			}}
			className="w-80 h-80 bg-gray-300 rounded-lg"
		/>
	);
};

export const Spinners: FC = () => {
	return (
		<AbsoluteFill>
			<div className="flex justify-center items-center space-x-10 w-full h-full">
				<Spinner delay={70} />
				<Spinner isSwapped delay={75} />
				<Spinner delay={80} />
			</div>
		</AbsoluteFill>
	);
};
