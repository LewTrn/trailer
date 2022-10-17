import { FC } from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

import { useFade, useFlip, useScale } from '../../utils';

const WORDS = ['Astronaut', 'Rainbow', 'Chess', 'Cat', 'Volcano', 'Watermelon'];

type FlipCardProps = {
	delay: number;
	highlightFrame?: number;
	word: string;
};

const FlipCard: FC<FlipCardProps> = ({ delay, highlightFrame, word }) => {
	const frame = useCurrentFrame();

	// Entrance
	const cardFlipIn = useFlip({ delay, reverse: true });
	const cardFadeIn = useFade({ delay });

	// Animate
	const cardScale = useScale({ delay: highlightFrame, range: [1, 1.05] });
	const cardRotate = useScale({ delay: highlightFrame, range: [0, 2] });

	const highlight = highlightFrame !== undefined && frame >= highlightFrame;

	// Exit
	const exitDelay = delay + 180;

	const cardFlipOut = useFlip({ delay: exitDelay });
	const cardFadeOut = useFade({ delay: exitDelay, reverse: true });

	const styles =
		frame > exitDelay
			? { opacity: cardFadeOut, transform: `rotateY(${cardFlipOut}deg)` }
			: { opacity: cardFadeIn, transform: `rotateY(${cardFlipIn}deg)` };

	return (
		<div
			style={styles}
			className="relative w-48 h-48 flex items-center justify-center"
		>
			<div
				style={
					highlight
						? {
								transform: `scale(${cardScale}) rotate(${
									highlightFrame % 2 === 0 ? -cardRotate : cardRotate
								}deg)`,
						  }
						: {}
				}
				className={`absolute w-48 h-48 flex items-center justify-center rounded-3xl bg-white text-xl shadow-lg ${
					highlight ? 'border-green-400 border-4' : ''
				}`}
			>
				{word}
			</div>
		</div>
	);
};

const getHighlight = (index: number) => {
	switch (index) {
		case 1:
			return 123;
		case 3:
			return 128;
		case 5:
			return 164;
		default:
			return undefined;
	}
};

export const Cards: FC = () => {
	return (
		<AbsoluteFill className="flex justify-center items-center w-full h-full">
			<div className="grid grid-cols-3 gap-5">
				{WORDS.map((word, index) => (
					<FlipCard
						key={index}
						delay={30 + (index % 3) * 5}
						highlightFrame={getHighlight(index)}
						word={word}
					/>
				))}
			</div>
		</AbsoluteFill>
	);
};
