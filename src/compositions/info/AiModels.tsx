import { FC, PropsWithChildren } from 'react';

import { useFade, useOffset, useScale } from '../../utils';

const WORK_DELAY = 60;

type ModelProps = PropsWithChildren & {
	delay?: number;
};

const Model: FC<ModelProps> = ({ children, delay = 0 }) => {
	// Entrance
	const scale = useScale({ delay, range: [0, 1] });

	return <h2 style={{ transform: `scale(${scale})` }}>{children}</h2>;
};

export const AiModels: FC = () => {
	// Entrance
	const workFade = useFade({ delay: WORK_DELAY });
	const moreScale = useScale({ delay: WORK_DELAY + 40, range: [0, 1] });

	// Animate
	const workOffset = useOffset({
		delay: WORK_DELAY,
		range: [0, 50],
		reverse: true,
	});

	return (
		<div className="flex flex-col text-center space-y-5">
			<h3
				style={{ opacity: workFade, transform: `translateY(${workOffset}px)` }}
			>
				Works with
			</h3>
			<div>
				<Model delay={WORK_DELAY + 10}>DALL·E 2</Model>
				<Model delay={WORK_DELAY + 20}>Stable Diffusion</Model>
				<Model delay={WORK_DELAY + 30}>Craiyon</Model>
			</div>
			<h3 style={{ transform: `scale(${moreScale})` }}>and more!</h3>
		</div>
	);
};
