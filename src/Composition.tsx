import { AbsoluteFill, Sequence } from 'remotion';

import './font.css';

import { AngryComposition } from './compositions/angry';
import { DrawComposition } from './compositions/draw';
import { GuessComposition } from './compositions/guess/GuessComposition';
import { InfoComposition } from './compositions/info';
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
			<Sequence from={240} durationInFrames={90}>
				<TitleComposition />
			</Sequence>
			<Sequence from={330} durationInFrames={240}>
				<PromptComposition />
			</Sequence>
			<Sequence from={570} durationInFrames={270}>
				<DrawComposition />
			</Sequence>
			<Sequence from={840} durationInFrames={255}>
				<GuessComposition />
			</Sequence>
			<Sequence from={1095}>
				<InfoComposition />
			</Sequence>
		</AbsoluteFill>
	);
};
