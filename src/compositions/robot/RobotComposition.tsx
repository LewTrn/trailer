import { FC } from 'react';
import { AbsoluteFill, useVideoConfig } from 'remotion';

import { AiText } from './AiText';
import { Robot } from './Robot';
import { useOffset } from '../../utils';

export const RobotComposition: FC = () => {
	const { width } = useVideoConfig();

	const compOffset = useOffset({ delay: 90, range: [0, width] });

	return (
		<AbsoluteFill style={{ transform: `translateX(${-compOffset}px)` }}>
			<AiText />
			<Robot />
		</AbsoluteFill>
	);
};
