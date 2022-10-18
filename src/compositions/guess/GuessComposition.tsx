import { FC } from 'react';
import { AbsoluteFill } from 'remotion';

import { FlipCards } from './FlipCards';
import { GuessTitle } from './GuessTitle';

export const GuessComposition: FC = () => {
	return (
		<AbsoluteFill>
			<FlipCards />
			<GuessTitle />
		</AbsoluteFill>
	);
};
