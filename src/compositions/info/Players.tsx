import { FC } from 'react';
import { VscPerson as Person } from 'react-icons/vsc';

import { useFade, useOffset, useScale } from '../../utils';

const PLAYERS = new Array(6).fill(true);

const COLOURS = [
	'#e63946',
	'#ff9153',
	'#45b649',
	'#43cea2',
	'#ee9ca7',
	'#74107c',
];

type PlayerProps = {
	index: number;
	delay?: number;
};

const Player: FC<PlayerProps> = ({ index, delay = 0 }) => {
	// Entrance
	const scale = useScale({ delay, range: [0, 1] });

	// Animate
	const bounceUp = useOffset({
		delay: delay + 5,
		range: [10, -10],
		damping: 10,
	});
	const bounceDown = useOffset({
		delay: delay + 15,
		range: [-10, 0],
		damping: 10,
	});

	const bounce = bounceUp > bounceDown ? bounceUp : bounceDown;

	return (
		<Person
			style={{
				transform: `translateY(${bounce}px) scaleY(${scale})`,
				color: COLOURS[index],
			}}
			className="text-5xl"
		/>
	);
};

export const Players: FC = () => {
	// Entrance
	const fade = useFade();

	// Animate
	const offset = useOffset({ range: [0, 50], reverse: true });

	return (
		<div className="flex flex-col text-center space-y-10">
			<h3 style={{ opacity: fade, transform: `translateY(${offset}px)` }}>
				Host a game
			</h3>
			<div className="flex">
				{PLAYERS.map((_, index) => (
					<Player key={index} index={index} delay={10 + index * 3} />
				))}
			</div>
			<h3 style={{ opacity: fade, transform: `translateY(${-offset}px)` }}>
				with up to 6 players
			</h3>
		</div>
	);
};
