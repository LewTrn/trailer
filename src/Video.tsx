import { Composition } from 'remotion';

import { MyComposition } from './Composition';
import './style.css';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="pictionAIry"
				component={MyComposition}
				durationInFrames={540}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
