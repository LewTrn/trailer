import {FC} from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';

import {Robot} from './Robot';
import {useOffset} from '../../utils';

type RobotProps = {
	start: number;
};

export const RobotComposition: FC<RobotProps> = ({start}) => {
	const frame = useCurrentFrame();
	const {width} = useVideoConfig();

	const compOffset = useOffset({
		delay: start,
		range: [width, 0],
	});

	if (frame < start) return null;

	return (
		<AbsoluteFill>
			<Robot style={{transform: `translateX(${compOffset}px)`}} delay={start} />
		</AbsoluteFill>
	);
};
