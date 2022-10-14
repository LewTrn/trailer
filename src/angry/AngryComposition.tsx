import {AbsoluteFill} from 'remotion';

import {Cat} from './Cat';
import {AngryText} from './AngryText';
import {useOffset} from '../utils';

export const AngryComposition = () => {
	const angryOffset = useOffset({delay: 75, reverse: true, range: [-300, 0]});

	return (
		<AbsoluteFill>
			<AngryText style={{transform: `translateX(${angryOffset}px)`}} />
			<Cat delay={75} />
		</AbsoluteFill>
	);
};
