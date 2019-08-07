import { Styled } from 'discord/theme';
import React from 'react';

const Container = Styled('div')(({ theme }) => ({
  flex: 'none',
  display: 'flex',
  flexDirection: 'column',
  minHeight: theme.minHeight.screen,
  height: theme.height.screen,
  padding: theme.padding[2],
  width: theme.width[16],
  backgroundColor: theme.colors.coolGreyDarkest
}));

const Wrapper = Styled('div')(({ theme }) => ({
  overflowY: 'auto'
}));

const Logos = Styled('ul')(({ theme }) => ({
  textAlign: 'center',
  padding: 0,
  listStyle: 'none'
}));

const Logo = Styled('li')(({ theme }) => ({}));

const Divider = Styled('li')(({ theme }) => ({
  borderBottom: `${theme.borderWidths.sm} solid ${theme.colors.coolGreyDarker}`,
  margin: `0 ${theme.margin[4]}`,
  marginTop: theme.margin[3]
}));

const LogoImage = Styled('img')(({ theme }) => ({
  width: theme.width[12],
  height: theme.height[12],
  borderRadius: theme.borderRadius.full,
  margin: `0 auto`
}));
export const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Logos>
          <Logo>
            <a href='#'>
              <LogoImage src='/img/icon_discord.svg' />
            </a>
          </Logo>
          <Divider />
        </Logos>
      </Wrapper>
    </Container>
  );
};
