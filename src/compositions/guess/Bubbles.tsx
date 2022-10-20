import { FC } from 'react';
import { AbsoluteFill } from 'remotion';

import { useColour, useFade, useOffset, useScale } from '../../utils';

type BubbleProps = {
	guess: string;
	isCorrect?: boolean;
	delay?: number;
	direction?: 'left' | 'right';
};

const Bubble: FC<BubbleProps> = ({
	guess,
	isCorrect = false,
	delay = 0,
	direction = 'right',
}) => {
	// Entrance
	const bubbleScale = useScale({ delay, range: [0, 1] });

	// Animate
	const bubbleOffset = useOffset({ delay, range: [0, 320], duration: 180 });
	const bubbleColour = useColour({
		delay: delay + 30,
		range: ['black', 'limegreen'],
		duration: 10,
	});
	const correctScale = useScale({
		delay: delay + 30,
		range: [0, isCorrect ? 1 : 0],
	});
	const correctFade = useFade({
		delay: delay + 30,
		duration: 45,
		reverse: true,
	});

	// Exit
	const bubbleFadeOut = useFade({ delay: delay + 60, reverse: true });

	const textColour = isCorrect && bubbleOffset > 100 ? bubbleColour : '';
	const border = direction === 'left' ? 'rounded-br-xl' : 'rounded-bl-xl';

	return (
		<div
			className={`absolute inline-block -bottom-5 ${
				direction === 'left' ? 'left-0' : 'right-0'
			}`}
		>
			<div
				style={{
					opacity: correctFade,
					transform: `translateY(-${bubbleOffset}px) scale(${correctScale})`,
				}}
				className={`absolute -left-4 -top-4 w-full h-full rounded-full bg-green-400 border-[16px] box-content border-green-400 ${border}`}
			/>
			<div
				style={{
					opacity: bubbleFadeOut,
					transform: `translateY(-${bubbleOffset}px) scale(${bubbleScale})`,
					color: textColour,
				}}
				className={`py-3 px-6 shadow-lg rounded-full bg-white text-3xl ${border}`}
			>
				{guess}
			</div>
		</div>
	);
};

export const Bubbles: FC = () => {
	return (
		<AbsoluteFill className="flex justify-center items-center w-full">
			<div className="flex space-x-5 items-end">
				<div className="relative">
					<Bubble isCorrect guess="Rainbow" delay={30} />
					<Bubble isCorrect guess="Watermelon" delay={80} />
					<Bubble guess="Strawberry" delay={150} />
				</div>
				<div className="w-80 h-80" />
				<div className="relative">
					<Bubble guess="Happy" delay={50} direction="left" />
					<Bubble isCorrect guess="Cat" delay={130} direction="left" />
				</div>
			</div>
		</AbsoluteFill>
	);
};
