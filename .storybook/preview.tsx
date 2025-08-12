import type { Preview } from '@storybook/react-vite'
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/globals.scss';
import { initialize, mswLoader } from 'msw-storybook-addon';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (story) => {
      const queryClient = new QueryClient()
      return < QueryClientProvider client={queryClient} >
        {story()}
      </QueryClientProvider >
    },
  ],
  loaders: [mswLoader]
};

export default preview;
