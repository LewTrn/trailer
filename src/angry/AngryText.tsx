/* eslint-disable react/no-unescaped-entities */
import {FC} from 'react';
import {useOffset} from '../utils';

type AngryTextProps = {
	style?: React.CSSProperties;
};

export const AngryText: FC<AngryTextProps> = ({style}) => {
	const loveOffset = useOffset();
	const swearOffset = useOffset({delay: 30});

	return (
		<div
			style={style}
			className="flex flex-col justify-center items-center h-full"
		>
			<h1
				style={{transform: `translateY(${loveOffset}px)`}}
				className="text-gray-700 text-5xl font-bold leading-relaxed"
			>
				Love drawing games
			</h1>
			<h1
				style={{transform: `translateY(${swearOffset}px)`}}
				className="text-gray-700 text-5xl font-bold leading-relaxed"
			>
				But can't draw for #*!$?
			</h1>
		</div>
	);
};
