import { FC } from 'react';
import { AbsoluteFill, Img, staticFile, useCurrentFrame } from 'remotion';

import { useFade, useFlip, useOffset } from '../../utils';

const cat = staticFile('/sad-cat.png');

const ENTRANCE_DELAY = 75;
const EXIT_DELAY = 150;
const OFFSET = 300;

export const Cat: FC = () => {
	const frame = useCurrentFrame();

	// Entrance
	const catFadeIn = useFade({ delay: ENTRANCE_DELAY, duration: 60 });
	const catOffset = useOffset({
		delay: ENTRANCE_DELAY,
		reverse: true,
		range: [OFFSET, 0],
	});

	// Exit
	const catFlip = useFlip({ delay: EXIT_DELAY });
	const catFadeOut = useFade({ delay: EXIT_DELAY, reverse: true });

	const styles =
		frame > EXIT_DELAY
			? {
					opacity: catFadeOut,
					transform: `translateX(${OFFSET}px) rotateY(${catFlip}deg)`,
			  }
			: { opacity: catFadeIn, transform: `translateX(${catOffset}px)` };

	return (
		<AbsoluteFill>
			<div style={styles} className="flex justify-center items-center h-full">
				<Img src={cat} style={{ height: 400, width: 400 }} />
			</div>
		</AbsoluteFill>
	);
};
