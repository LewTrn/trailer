import { FC } from 'react';
import { AbsoluteFill } from 'remotion';

import { useScale } from '../../utils';

const WORDS = ['Lorem', 'Ipsum', 'Lorem', 'Ipsum', 'Lorem', 'Ipsum'];

type FlipCardProps = {
	word: string;
};

// Text-white border-white shadow-2xl border-8 text-3xl

const FlipCard: FC<FlipCardProps> = ({ word }) => {
	const cardScale = useScale({ range: [5, 1] });

	return (
		<div className="relative w-48 h-48 flex items-center justify-center">
			<div
				style={{ transform: `scale(${cardScale})` }}
				className="absolute w-48 h-48 flex items-center justify-center rounded-3xl bg-red-500"
			/>
		</div>
	);
};

export const PromptCards: FC = () => {
	return (
		<AbsoluteFill className="flex justify-center items-center w-full h-full">
			<div className="grid grid-cols-3 gap-5">
				{WORDS.map((word, index) => (
					<FlipCard key={index} word="pictionAIry" />
				))}
			</div>
		</AbsoluteFill>
	);
};
