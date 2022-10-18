import { FC } from 'react';
import { AbsoluteFill } from 'remotion';

import { useFade, useOffset } from '../../utils';

export const DrawInput: FC = () => {
	const drawOffset = useOffset({ reverse: true, range: [-30, 0] });

	// Exit
	const drawFade = useFade({ delay: 210, reverse: true });

	return (
		<AbsoluteFill>
			<div
				style={{
					opacity: drawFade,
					transform: `translateX(${drawOffset}px)`,
				}}
				className="flex justify-center p-20"
			>
				<h3 className="relative">
					A <span className="font-bold">rainbow cat</span> riding a{' '}
					<span className="font-bold">watermelon</span>
				</h3>
			</div>
		</AbsoluteFill>
	);
};
