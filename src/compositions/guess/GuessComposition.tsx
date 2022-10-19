import { FC } from 'react';
import { AbsoluteFill } from 'remotion';

import { Bubbles } from './Bubbles';
import { FlipCards } from './FlipCards';
import { GuessTitle } from './GuessTitle';

export const GuessComposition: FC = () => {
	return (
		<AbsoluteFill>
			<FlipCards />
			<GuessTitle />
			<Bubbles />
		</AbsoluteFill>
	);
};
