import { FC } from 'react';
import { AbsoluteFill, useVideoConfig } from 'remotion';

import { Robot } from './Robot';
import { useOffset } from '../../utils';

export const RobotComposition: FC = () => {
	const { width } = useVideoConfig();

	const compOffset = useOffset({ range: [width, 0] });

	return (
		<AbsoluteFill>
			<Robot style={{ transform: `translateX(${compOffset}px)` }} />
		</AbsoluteFill>
	);
};
