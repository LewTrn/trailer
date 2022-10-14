import {AbsoluteFill} from 'remotion';
import {AngryComposition} from './angry/AngryComposition';

export const MyComposition = () => {
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<AngryComposition />
		</AbsoluteFill>
	);
};
