import { FC } from 'react';

import { useFade, useFlip } from '../../utils';

export const AiText: FC = () => {
	const robotFade = useFade({ duration: 60 });
	const robotFlip = useFlip({ reverse: true });

	return (
		<div
			style={{
				transform: `translateX(-275px) rotateY(${robotFlip}deg)`,
				opacity: robotFade,
				backfaceVisibility: 'hidden',
			}}
			className="flex flex-col justify-center items-center h-full"
		>
			<h2 className="text-gray-700">
				Let <span className="text-red-main">AI</span> do the drawing!
			</h2>
		</div>
	);
};
