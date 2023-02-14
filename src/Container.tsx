import React from 'react';
import {Sequence, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import Logo from './Logo';
import Subtitle from './Subtitle';
import Title from './Title';
export default function Container() {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const scale = spring({
		fps,
		frame,
		config: {
			stiffness: 65, // The bounciness of the animation, default=100
			damping: 7.5, // Acceleration of the bounce, default=10
		},
		durationInFrames: 100,
	});
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				transform: `scale(${scale})`,
			}}
		>
			<Logo />
			<div style={{display: 'grid', padding: '2.5rem'}}>
				<Title text="MONSTAJOE" />
				{/* The `Sequence` component delays the rendering of a component until a frame number is reached  */}
				<Sequence style={{position: 'relative'}} from={120}>
					<Subtitle text="Programming Tutorials & Vlogs" />
				</Sequence>
			</div>
		</div>
	);
}
