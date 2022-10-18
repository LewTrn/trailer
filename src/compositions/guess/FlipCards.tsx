import { FC } from 'react';
import { AbsoluteFill, Img, staticFile } from 'remotion';

import { useFade, useFlip } from '../../utils';

const cat1 = staticFile('/cat-1.png');
const cat2 = staticFile('/cat-2.png');
const cat3 = staticFile('/cat-3.png');

type CatProps = {
	delay: number;
	src: string;
	flip?: 'right' | 'left';
};

const Cat: FC<CatProps> = ({ delay, src, flip = 'right' }) => {
	// Entrance
	const catFadeIn = useFade({ delay });
	const flipIn = useFlip({ delay, reverse: true });

	// Exit
	const catFadeOut = useFade({ delay: delay + 60, reverse: true });
	const flipOut = useFlip({ delay: delay + 60 });

	const opacity =
		catFadeIn > catFadeOut ? catFadeOut : delay === 0 ? 1 : catFadeIn;

	const rotate = flipOut > flipIn ? flipOut : delay === 0 ? 0 : flipIn;

	return (
		<Img
			src={src}
			style={{
				opacity,
				transform: `rotateY(${flip === 'right' ? rotate : -rotate}deg)`,
				height: 320,
				width: 320,
				backfaceVisibility: 'hidden',
			}}
			className="absolute"
		/>
	);
};

export const FlipCards: FC = () => {
	return (
		<AbsoluteFill>
			<div className="flex justify-center items-center relative w-full h-full">
				<Cat src={cat2} delay={0} />
				<Cat src={cat3} delay={60} flip="left" />
				<Cat src={cat1} delay={120} />
				<Cat src={cat2} delay={180} flip="left" />
			</div>
		</AbsoluteFill>
	);
};
