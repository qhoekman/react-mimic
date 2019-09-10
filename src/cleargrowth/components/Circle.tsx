import { MyTheme, Styled } from 'cleargrowth/theme';
import React from 'react';

const Container = Styled('svg')(({ theme }) => ({
	alignSelf: 'flex-end',
	position: 'absolute',
	top: 0,
	right: 0,
	height: '40rem',
	overflow: 'hidden',
	zIndex: theme.zIndex[0]
}));

const SvgCircle = Styled('circle')(({ theme }) => ({
	fill: `url(#circlebg) ${theme.colors.primary}`
}));

export const Circle = () => {
	return (
		<Container viewBox='50 300 300 200'>
			<linearGradient x1='0%' y1='0%' x2='0%' y2='100%' id='circlebg'>
				<stop stop-color={MyTheme.colors.tealLighter} offset='0' />
				<stop stop-color={MyTheme.colors.blueDark} offset='100%' />
			</linearGradient>
			<animate xlinkHref='#circle' attributeName='r' from='0' to='200' dur='300ms' fill='freeze' />
			<SvgCircle id='circle' cx='300' cy='300' r='0' />
		</Container>
	);
};
