import React from 'react';
import {useCurrentFrame} from 'remotion';

type Props = {
	text: string;
};

export default function Subtitle({text}: Props) {
	const frame = useCurrentFrame();
	const fade = Math.min(1, frame / 60);
	return (
		<div style={{fontSize: 35, opacity: fade, color: '#A9A9A9'}}>{text}</div>
	); 
}
