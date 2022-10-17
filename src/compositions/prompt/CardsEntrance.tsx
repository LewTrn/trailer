import { FC } from 'react';
import { AbsoluteFill } from 'remotion';

import { useFade, useFlip, useScale } from '../../utils';

const CARDS = new Array(6).fill(true);

type FlipCardProps = {
	delay: number;
};

const FlipCard: FC<FlipCardProps> = ({ delay }) => {
	// Entrance
	const cardScale = useScale({ range: [5, 1] });

	// Exit
	const cardFlip = useFlip({ delay });
	const cardFade = useFade({ delay, reverse: true });

	return (
		<div
			style={{ opacity: cardFade, transform: `rotateY(${cardFlip}deg)` }}
			className="relative w-48 h-48 flex items-center justify-center"
		>
			<div
				style={{ transform: `scale(${cardScale})` }}
				className={`absolute w-48 h-48 flex items-center justify-center rounded-3xl bg-red-500 ${
					cardScale < 1.2 ? 'shadow-lg' : ''
				}`}
			/>
		</div>
	);
};

export const CardsEntrance: FC = () => {
	return (
		<AbsoluteFill className="flex justify-center items-center w-full h-full">
			<div className="grid grid-cols-3 gap-5">
				{CARDS.map((_, index) => (
					<FlipCard key={index} delay={30 + (index % 3) * 5} />
				))}
			</div>
		</AbsoluteFill>
	);
};
