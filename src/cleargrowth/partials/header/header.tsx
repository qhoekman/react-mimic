import { SvgLogo } from 'cleargrowth/components/Logo';
import { Styled } from 'cleargrowth/theme';
import React from 'react';

const Container = Styled('header')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	padding: `${theme.padding[3]} ${theme.padding[6]}`,
	color: theme.colors.blueDarkest,
	maxWidth: theme.screens.lg,
	margin: '0 auto',
	zIndex: theme.zIndex[10]
}));

const Section = Styled('div')(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	paddingBottom: theme.padding[6]
}));

const VSection = Styled(Section)(({ theme }) => ({
	flexDirection: 'column'
}));

const Title = Styled('h1')(({ theme }) => ({
	fontSize: theme.fontSizes.xl,
	fontFamily: theme.fonts.sans,
	textTransform: 'lowercase',
	padding: `${theme.padding[1]} ${theme.padding[3]}`
}));

const Slogan = Styled('h2')(({ theme }) => ({
	fontSize: theme.fontSizes['4xl'],
	fontFamily: theme.fonts.sans,
	width: theme.width['1/2'],
	margin: `${theme.margin[2]} 0`
}));

const Description = Styled('p')(({ theme }) => ({
	fontFamily: theme.fonts.sans,
	margin: `${theme.margin[2]} 0`
}));

const PrimaryButton = Styled('button')(({ theme }) => ({
	borderRadius: theme.borderRadius.full,
	border: '0',
	color: theme.colors.white,
	backgroundColor: theme.colors.primary,
	textTransform: 'uppercase',
	padding: `${theme.padding[3]} ${theme.padding[4]}`,
	margin: `${theme.margin[2]} ${theme.margin[2]}`,
	fontWeight: theme.fontWeights.semibold,
	boxShadow: theme.shadows.sm,
	cursor: 'pointer',
	outline: 'none',
	userSelect: 'none'
}));

const SecondaryButton = Styled(PrimaryButton)(({ theme }) => ({
	border: `${theme.borderWidths.sm} solid ${theme.colors.greyLighter}`,
	boxShadow: 'none',
	color: theme.colors.primary,
	backgroundColor: theme.colors.white,
	fontWeight: theme.fontWeights.bold
}));

export const Header = () => {
	return (
		<Container>
			<Section>
				<SvgLogo width={'48'} height={'48'} />
				<Title>ClearGrowth</Title>
			</Section>
			<VSection>
				<Slogan>A clear overview of your startup performance</Slogan>
				<Description>Get insights and stay engaged with your customers</Description>
			</VSection>
			<Section>
				<PrimaryButton>Start free trial</PrimaryButton>
				<SecondaryButton>See Demo</SecondaryButton>
			</Section>
		</Container>
	);
};
