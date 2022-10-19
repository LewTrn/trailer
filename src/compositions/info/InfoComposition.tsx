import { FC } from 'react';
import { AbsoluteFill } from 'remotion';

import { AiModels } from './AiModels';
import { Players } from './Players';

export const InfoComposition: FC = () => {
	return (
		<AbsoluteFill>
			<div className="p-20 flex w-full h-full justify-around items-center">
				<Players />
				<AiModels />
			</div>
		</AbsoluteFill>
	);
};
