import { QueryClientProvider } from 'react-query';

import { queryClient } from 'services';
import { ThemeProvider } from 'styled-components/native';
import { theme } from 'theme';

type Props = {
  children: React.ReactNode;
};

export const AppProviders = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </ThemeProvider>
);
