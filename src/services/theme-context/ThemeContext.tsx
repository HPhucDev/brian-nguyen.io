import { ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

import { theme } from 'theme';

interface Props {
  children: ReactNode;
}

const ThemeContext = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeContext;
