import { FC } from 'react';
import { AbsoluteFill } from 'remotion';

import { PromptCards } from './PromptCards';

export const PromptComposition: FC = () => {
	return (
		<AbsoluteFill>
			<PromptCards />
		</AbsoluteFill>
	);
};
