import { FC } from 'react';
import { AbsoluteFill, Img, staticFile } from 'remotion';

import { useFade, useFlip, useOffset, useScale } from '../../utils';

const cat1 = staticFile('/cat-1.png');
const cat2 = staticFile('/cat-2.png');
const cat3 = staticFile('/cat-3.png');

type CatProps = {
	delay: number;
	src: string;
	isSwapped?: boolean;
	offset?: 'right' | 'left';
};

const Cat: FC<CatProps> = ({ delay, src, isSwapped, offset }) => {
	// Entrance
	const catFade = useFade({ delay });
	const catScale = useScale({ delay, range: [0.15, 1] });

	// Animate
	const xFlip = useFlip({ delay, reverse: true });
	const yFlip = useFlip({ delay, reverse: true });
	const catOffset = useOffset({ delay: 240, range: [0, 360] });

	const translate =
		offset === 'right'
			? `translateX(${catOffset}px)`
			: offset === 'left'
			? `translateX(${-catOffset}px)`
			: '';

	const transform = isSwapped
		? `scale(${catScale}) rotateY(${yFlip}deg) ${translate}`
		: `scale(${catScale}) rotateX(${xFlip}deg) ${translate}`;

	const getShadow = () => {
		if (offset === undefined) return '';

		if (catOffset < 5) return 'shadow-xl';

		if (catOffset < 15) return 'shadow-lg';

		if (catOffset < 35) return 'shadow-md';

		return 'shadow-sm';
	};

	return (
		<Img
			src={src}
			style={{ opacity: catFade, transform, height: 320, width: 320 }}
			className={`${
				offset === undefined ? 'z-10' : ''
			} image shad ${getShadow()}`}
		/>
	);
};

export const DrawCats: FC = () => {
	return (
		<AbsoluteFill>
			<div className="flex justify-center items-center space-x-10 w-full h-full">
				<Cat src={cat1} delay={145} offset="right" />
				<Cat isSwapped src={cat2} delay={150} />
				<Cat src={cat3} delay={155} offset="left" />
			</div>
		</AbsoluteFill>
	);
};
