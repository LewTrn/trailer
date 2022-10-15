import { FC } from 'react';
import { AbsoluteFill } from 'remotion';

import { Cat } from './Cat';
import { AngryText } from './AngryText';

export const AngryComposition: FC = () => {
	return (
		<AbsoluteFill>
			<Cat />
			<AngryText />
		</AbsoluteFill>
	);
};
