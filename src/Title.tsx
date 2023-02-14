import React from 'react';

type Props = {
	text: string;
};

function Title({text}: Props) {
	return <div>{text}</div>;
}

export default Title;
