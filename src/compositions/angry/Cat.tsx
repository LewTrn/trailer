import { FC } from 'react';
import { AbsoluteFill, Img, staticFile } from 'remotion';

import { useFade, useOffset } from '../../utils';

const cat = staticFile('/sad-cat.png');

type CatProps = {
	delay?: number;
};

export const Cat: FC<CatProps> = ({ delay }) => {
	const catFade = useFade({ delay, duration: 60 });
	const catOffset = useOffset({ delay, reverse: true, range: [300, 0] });

	return (
		<AbsoluteFill>
			<div
				style={{ opacity: catFade, transform: `translateX(${catOffset}px)` }}
				className="flex justify-center items-center h-full"
			>
				<Img src={cat} style={{ height: 400, width: 400 }} />
			</div>
		</AbsoluteFill>
	);
};
