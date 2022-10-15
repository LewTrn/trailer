import { AbsoluteFill, Sequence } from 'remotion';

import { AngryComposition } from './compositions/angry';
import { PromptComposition } from './compositions/prompt';
import { RobotComposition } from './compositions/robot';
import { TitleComposition } from './compositions/title';

export const MyComposition = () => {
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<Sequence from={0} durationInFrames={180}>
				<AngryComposition />
			</Sequence>
			<Sequence from={150} durationInFrames={120}>
				<RobotComposition />
			</Sequence>
			<Sequence from={240} durationInFrames={75}>
				<TitleComposition />
			</Sequence>
			<Sequence from={300}>
				<PromptComposition />
			</Sequence>
		</AbsoluteFill>
	);
};
