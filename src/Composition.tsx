import {AbsoluteFill} from 'remotion';

import {AngryComposition} from './compositions/angry';
import {RobotComposition} from './compositions/robot';

export const MyComposition = () => {
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<AngryComposition />
			<RobotComposition start={150} />
		</AbsoluteFill>
	);
};
