import { FC } from 'react';
import { AbsoluteFill } from 'remotion';

import { Crayon } from './Crayon';
import { DrawInput } from './DrawInput';
import { DrawTitle } from './DrawTitle';
import { Spinners } from './Spinners';

export const DrawComposition: FC = () => {
	return (
		<AbsoluteFill>
			<Crayon />
			<DrawInput />
			<DrawTitle />
			<Spinners />
		</AbsoluteFill>
	);
};
