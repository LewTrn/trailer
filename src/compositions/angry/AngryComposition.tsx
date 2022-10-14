import {FC} from 'react';
import {AbsoluteFill, useVideoConfig} from 'remotion';

import {Cat} from './Cat';
import {AngryText} from './AngryText';
import {useOffset} from '../../utils';

export const AngryComposition: FC = () => {
	const {width} = useVideoConfig();

	const compOffset = useOffset({delay: 150, reverse: true, range: [-width, 0]});
	const angryOffset = useOffset({delay: 75, reverse: true, range: [-300, 0]});

	return (
		<AbsoluteFill style={{transform: `translateX(${compOffset}px)`}}>
			<Cat delay={75} />
			<AngryText style={{transform: `translateX(${angryOffset}px)`}} />
		</AbsoluteFill>
	);
};
