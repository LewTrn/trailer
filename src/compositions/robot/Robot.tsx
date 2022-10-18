/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import { AbsoluteFill, Img, staticFile } from 'remotion';

import { useFade, useFlip } from '../../utils';

const robot = staticFile('/robot.png');

export const Robot: FC = () => {
	const robotFade = useFade({ duration: 60 });
	const robotFlip = useFlip({ reverse: true });

	return (
		<AbsoluteFill>
			<div
				style={{
					transform: `translateX(300px) rotateY(${robotFlip}deg)`,
					opacity: robotFade,
					backfaceVisibility: 'hidden',
				}}
				className="flex justify-center items-center h-full"
			>
				<Img src={robot} style={{ height: 400, width: 400 }} />
			</div>
		</AbsoluteFill>
	);
};
