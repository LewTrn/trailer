import { FC } from 'react';
import { AbsoluteFill } from 'remotion';
import { Cards } from './Cards';

import { CardsEntrance } from './CardsEntrance';
import { PromptInput } from './PromptInput';
import { PromptTitle } from './PromptTitle';

export const PromptComposition: FC = () => {
	return (
		<AbsoluteFill>
			<CardsEntrance />
			<Cards />
			<PromptTitle />
			<PromptInput />
		</AbsoluteFill>
	);
};
