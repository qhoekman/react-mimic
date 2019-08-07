import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import DefaultTheme from 'react-tailwhip';

import { Content } from './components/layout';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
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

      <Content />
    </ThemeProvider>
  );
};
