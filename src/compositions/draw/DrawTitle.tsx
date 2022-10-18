import { FC } from 'react';
import { AbsoluteFill } from 'remotion';

import { useFade, useScale } from '../../utils';

export const DrawTitle: FC = () => {
	// Entrance
	const titleScale = useScale({ delay: 30, range: [0, 1] });

	// Exit
	const titleFade = useFade({ delay: 210, reverse: true });

	return (
		<AbsoluteFill className="flex justify-end">
			<h2
				style={{ opacity: titleFade, transform: `scaleY(${titleScale})` }}
				className="w-full text-center p-10"
			>
				Generate images with AI
			</h2>
		</AbsoluteFill>
	);
};
