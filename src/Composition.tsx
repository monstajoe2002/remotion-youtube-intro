import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/google-fonts/IBMPlexSans';
import Container from './Container';
import DotGridBackground from './DotGridBackground';
const {fontFamily} = loadFont();
export const MyComposition = () => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#1f1f3f',
				fontSize: 100,
				color: 'white',
				position: 'fixed',
				fontFamily,
				fontWeight: 500,
			}}
		>
			<DotGridBackground speed={0.008} maxOffset={22} circleRadius={5} />
			<AbsoluteFill
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Container />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
