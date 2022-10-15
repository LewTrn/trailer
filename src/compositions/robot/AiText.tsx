import { FC } from 'react';

import { useFade, useFlip } from '../../utils';

export const AiText: FC = () => {
	const robotFade = useFade({ duration: 60 });
	const robotFlip = useFlip({ reverse: true });

	return (
		<div
			style={{
				transform: `translateX(-300px) rotateY(${robotFlip}deg)`,
				opacity: robotFade,
			}}
			className="flex flex-col justify-center items-center h-full"
		>
			<h1 className="text-gray-700 text-5xl font-bold leading-relaxed">
				Let AI draw for you
			</h1>
		</div>
	);
};
