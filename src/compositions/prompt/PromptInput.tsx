/* eslint-disable react/no-danger */
import { FC } from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

import { useType } from '../../utils';

const PROMPT = 'A rainbow cat riding a watermelon';
const SPLIT_PROMPT = PROMPT.split('');

const getPromptText = (frame: number) => {
	if (frame < 0) return '';
	if (frame > SPLIT_PROMPT.length) return PROMPT;

	const promptString = SPLIT_PROMPT.slice(0, frame).join('');

	return (
		promptString
			.replace('r', '<b>r')
			.replace('t', 't</b>')
			.replace(' w', ' <b>w') + '</b>'
	);
};

export const PromptInput: FC = () => {
	const frame = useCurrentFrame();

	const textType = useType({
		length: SPLIT_PROMPT.length,
		delay: 105,
	});
	const promptText = getPromptText(Math.ceil(textType));

	const showPipe =
		(frame > 45 && frame < 60) ||
		(frame > 75 && frame < 90) ||
		(frame > 105 && frame < 180) ||
		(frame > 195 && frame < 210);

	return (
		<AbsoluteFill>
			<div className="flex justify-center p-20">
				<h3 className="relative">
					<div dangerouslySetInnerHTML={{ __html: promptText }} />
					{showPipe && (
						<h3 className="absolute -right-2 -top-1 font-light">|</h3>
					)}
				</h3>
			</div>
		</AbsoluteFill>
	);
};
