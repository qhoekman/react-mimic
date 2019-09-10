import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';

import { Header } from './partials/header/header';
import { MyTheme, Styled } from './theme';

const Container = Styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	width: theme.width.full
}));

export const ClearGrowth = () => {
	return (
		<ThemeProvider theme={MyTheme}>
			<Global
				styles={{
					'html, body, #root, #root > div ': {
						margin: 0,
						minHeight: '100%',
						display: 'flex',
						flex: 1
					},
					'*': {
						boxSizing: 'border-box'
					}
				}}
			/>
			<Container>
				<Header />
			</Container>
		</ThemeProvider>
	);
};
