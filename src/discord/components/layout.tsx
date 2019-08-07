import { Styled } from 'discord/theme';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

import { Lorem } from './lorem';
import { Sidebar } from './sidebar';
import { TopBar } from './topbar';

const Container = Styled('div')(({ theme }) => ({
  display: 'flex'
}));

const Area = Styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: theme.height.screen
}));

const Section = Styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  overflowY: 'hidden'
}));

const HashtagSidebar = Styled('div')(({ theme }) => ({
  flex: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: theme.width[64],
  background: theme.colors.coolGreyDarker
}));

const HashtagsSidebarContent = Styled('div')(({ theme }) => ({
  overflowY: 'auto',
  fontSize: theme.fontSizes.sm
}));

const Hashtags = Styled('ul')(({ theme }) => ({
  padding: `${theme.padding[3]} ${theme.padding[2]}`,
  listStyle: 'none'
}));

const Hashtag = Styled('li')(({ theme }) => ({
  color: theme.colors.coolGreyLight,
  padding: `0 ${theme.padding[2]}`
}));

const HashtagLink = Styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center'
}));

const HashtagSymbol = Styled('span')(({ theme }) => ({
  fontSize: theme.fontSizes.xl
}));

const HashtagTitle = Styled('span')(({ theme }) => ({
  marginLeft: theme.margin[2]
}));

const Collapsible = Styled('button')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: theme.colors.coolGreyLight,
  backgroundColor: theme.colors.transparent,
  border: 0,
  outline: 'none'
}));

const CollapsibleTitle = Styled('div')(({ theme }) => ({
  flex: 1,
  textTransform: 'uppercase',
  letterSpacing: theme.tracking.wide,
  fontWeight: theme.fontWeights.semibold
}));

const SettingsPanel = Styled('div')(({ theme }) => ({
  background: theme.colors.coolGreyDarkest
}));

const Middle = Styled('div')(({ theme }) => ({
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between'
}));

const Chats = Styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  background: theme.colors.coolGreyDark
}));

const ChatSessions = Styled('div')(({ theme }) => ({
  overflowY: 'auto'
}));

const ChatInputPanel = Styled('div')(({ theme }) => ({
  background: theme.colors.coolGreyDarker
}));

const UsersSidebar = Styled('div')(({ theme }) => ({
  flex: 'none',
  overflowY: 'auto',
  width: theme.width[64],
  background: theme.colors.coolGreyDarker
}));

export const Content = () => {
  return (
    <Container>
      <Sidebar />
      <Area>
        <TopBar />
        <Section>
          <HashtagSidebar>
            <HashtagsSidebarContent>
              <Hashtags>
                <Hashtag>
                  <HashtagLink>
                    <HashtagSymbol>#</HashtagSymbol>
                    <HashtagTitle>welcome</HashtagTitle>
                  </HashtagLink>
                </Hashtag>
                <Hashtag>
                  <HashtagLink>
                    <HashtagSymbol>#</HashtagSymbol>
                    <HashtagTitle>faq</HashtagTitle>
                  </HashtagLink>
                </Hashtag>
              </Hashtags>
              <Collapsible>
                <FaChevronDown />
                <CollapsibleTitle>Moonblast</CollapsibleTitle>
              </Collapsible>
            </HashtagsSidebarContent>
            <SettingsPanel>Karel</SettingsPanel>
          </HashtagSidebar>
          <Middle>
            <Chats>
              <ChatSessions>
                <Lorem />
              </ChatSessions>
              <ChatInputPanel>Typ hier uw bericht</ChatInputPanel>
            </Chats>
            <UsersSidebar>
              <Lorem />
            </UsersSidebar>
          </Middle>
        </Section>
      </Area>
    </Container>
  );
};
