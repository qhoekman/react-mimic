import { Styled } from 'discord/theme';
import React from 'react';
import { FaBell, FaChevronDown, FaSearch } from 'react-icons/fa';

const Container = Styled('div')(({ theme }) => ({
  display: 'flex',
  color: theme.colors.white
}));

const Side = Styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flex: 'none',
  padding: `${theme.padding[2]} ${theme.padding[3]}`,
  width: theme.width[64],
  background: theme.colors.coolGreyDarker
}));

const Title = Styled('div')(({ theme }) => ({
  textTransform: 'uppercase',
  letterSpacing: theme.tracking.wide,
  fontWeight: theme.fontWeights.semibold
}));

const Main = Styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `0 ${theme.padding[4]}`,
  width: theme.width[64],
  overflowY: 'auto',
  background: theme.colors.coolGreyDarker
}));

const Tags = Styled('div')(({ theme }) => ({
  overflowY: 'auto',
  display: 'flex',
  alignItems: 'center'
}));

const Hashtag = Styled('div')(({ theme }) => ({
  color: theme.colors.coolGreyDark,
  fontSize: theme.fontSizes['2xl']
}));

const TagTitle = Styled('div')(({ theme }) => ({
  marginLeft: theme.margin[2],
  fontSize: theme.fontSizes.sm,
  color: theme.colors.white
}));

const TagDescription = Styled('div')(({ theme }) => ({
  borderLeft: `${theme.borderWidths.sm} soli ${theme.colors.warmGreyDark}`,
  paddingLeft: theme.padding[3],
  marginLeft: theme.margin[3],
  fontSize: theme.fontSizes.xs,
  color: theme.colors.coolGrey
}));

const IconsPanel = Styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center'
}));

const Icon = Styled('a')(({ theme }) => ({
  color: theme.colors.coolGrey,
  marginLeft: theme.margin[4]
}));

const Search = Styled('form')(({ theme }) => ({
  position: 'relative'
}));

const SearchInput = Styled('input')(({ theme }) => ({
  borderRadius: theme.borderRadius.md,
  outline: 'none',
  border: 0,
  backgroundColor: theme.colors.coolGreyDarkest,
  color: theme.colors.coolGrey,
  fontSize: theme.fontSizes.xs,
  padding: `${theme.padding[1]} ${theme.padding[2]}`
}));

const SearchIcon = Styled('span')(({ theme }) => ({
  position: 'absolute',
  right: 0,
  top: 0,
  fontSize: theme.fontSizes.xs,
  marginTop: theme.margin[1],
  marginRight: theme.margin[2]
}));

export const TopBar = () => {
  return (
    <Container>
      <Side>
        <Title>Moonblast</Title>
        <a>
          <FaChevronDown />
        </a>
      </Side>
      <Main>
        <Tags>
          <Hashtag>#</Hashtag>
          <TagTitle>general</TagTitle>
          <TagDescription>general dicussion of Moonblast</TagDescription>
        </Tags>
        <IconsPanel>
          <Icon>
            <FaBell />
          </Icon>
          <Icon>
            <Search>
              <SearchInput type='search' placeholder='Search' />
              <SearchIcon>
                <FaSearch />
              </SearchIcon>
            </Search>
          </Icon>
        </IconsPanel>
      </Main>
    </Container>
  );
};
