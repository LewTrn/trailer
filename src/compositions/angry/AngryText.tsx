/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import { useCurrentFrame } from 'remotion';

import { useFade, useFlip, useOffset } from '../../utils';

const EXIT_DELAY = 150;
const OFFSET = 300;

export const AngryText: FC = () => {
	const frame = useCurrentFrame();

	// Entrance
	const loveOffset = useOffset();
	const swearOffset = useOffset({ delay: 30 });
	const textOffset = useOffset({
		delay: 75,
		reverse: true,
		range: [-OFFSET, 0],
	});

	// Exit
	const textFlip = useFlip({ delay: EXIT_DELAY });
	const textFade = useFade({ delay: EXIT_DELAY, reverse: true });

	const styles =
		frame > EXIT_DELAY
			? {
					opacity: textFade,
					transform: `translateX(${-OFFSET}px) rotateY(${textFlip}deg)`,
			  }
			: { transform: `translateX(${textOffset}px)` };

	return (
		<div
			style={styles}
			className="flex flex-col justify-center items-center h-full"
		>
			<h2
				style={{ transform: `translateY(${loveOffset}px)` }}
				className="text-gray-700"
			>
				Love drawing games
			</h2>
			<h2
				style={{ transform: `translateY(${swearOffset}px)` }}
				className="text-gray-700"
			>
				But can't draw for #*!$?
			</h2>
		</div>
	);
};
