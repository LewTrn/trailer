import { AbsoluteFill } from 'remotion';

import { AngryComposition } from './compositions/angry';
import { PromptComposition } from './compositions/prompt';
import { RobotComposition } from './compositions/robot';

export const MyComposition = () => {
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<PromptComposition start={240} />
			<RobotComposition start={150} end={240} />
			<AngryComposition />
		</AbsoluteFill>
	);
};
