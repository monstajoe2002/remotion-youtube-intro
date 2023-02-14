import React from 'react';
import {Img, staticFile} from 'remotion';

export default function Logo() {
	return (
		<div>
			<Img
				src={staticFile('icon.jpg')}
				style={{
					borderRadius: '50%',
					boxSizing: 'content-box',
					height: 'auto',
					width:'500px'
				}}
			/>
		</div>
	);
}
