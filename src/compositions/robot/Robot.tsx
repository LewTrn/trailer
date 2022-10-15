/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import { Img, staticFile } from 'remotion';

import { useFade } from '../../utils';

const robot = staticFile('/robot.png');

type RobotProps = {
	style?: React.CSSProperties;
};

export const Robot: FC<RobotProps> = ({ style }) => {
	const fadeOut = useFade({ delay: 60, duration: 30, reverse: true });

	return (
		<div
			style={style}
			className="flex flex-col justify-center items-center h-full bg-red-500"
		>
			<h1
				style={{ opacity: fadeOut }}
				className="text-gray-100 text-5xl font-bold leading-relaxed mb-10 -mt-5"
			>
				Let an AI draw for you!
			</h1>
			<Img src={robot} style={{ height: 400, width: 400, opacity: fadeOut }} />
		</div>
	);
};
