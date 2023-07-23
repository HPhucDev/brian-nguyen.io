import { createTheme } from '@mui/material';

import { baseTheme } from './base';
import * as components from './overrides';
import { typography } from './typography';

export const theme = createTheme(baseTheme, {
  components,
  typography,
});
