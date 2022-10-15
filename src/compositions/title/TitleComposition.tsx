import { FC } from 'react';
import { AbsoluteFill, useVideoConfig } from 'remotion';

import { Title } from './Title';
import { useOffset } from '../../utils';

export const TitleComposition: FC = () => {
	const { width } = useVideoConfig();

	const compOffset = useOffset({ range: [width, 0] });

	return (
		<AbsoluteFill style={{ transform: `translateX(${compOffset}px)` }}>
			<Title />
		</AbsoluteFill>
	);
};
