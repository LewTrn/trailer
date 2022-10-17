import { AbsoluteFill } from 'remotion';
import { FC } from 'react';
import { SlPencil as Pencil } from 'react-icons/sl';

import { useFade, useOffset, useScale } from '../../utils';

export const Crayon: FC = () => {
	// Entrance
	const drawOffset = useOffset({ range: [0, 20] });
	const drawFade = useFade({ duration: 60 });

	// Animate
	const pressIn = useScale({ delay: 60, duration: 10, range: [1, 0.9] });
	const release = useScale({ delay: 70, duration: 10, range: [0.9, 1] });
	const buttonPress = release > pressIn ? release : pressIn;

	const clickScale = useScale({ delay: 60, range: [0, 1] });
	const clickFade = useFade({ delay: 60, reverse: true });

	return (
		<AbsoluteFill>
			<div
				style={{
					opacity: drawFade,
					transform: `translateX(${220 + drawOffset}px) scale(${buttonPress})`,
				}}
				className="relative flex justify-center p-20"
			>
				<div
					style={{
						opacity: clickFade,
						transform: `scale(${clickScale})`,
					}}
					className="absolute -mt-[21px] rounded-2xl bg-orange-400 w-20 h-20"
				/>
				<div className="border-2 bg-orange-400 rounded-lg -mt-2 z-10">
					<Pencil className="text-5xl p-2 text-gray-100" />
				</div>
			</div>
		</AbsoluteFill>
	);
};
