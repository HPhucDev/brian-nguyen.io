import { Box, InputLabel, TextField as MuiTextField, Typography } from '@mui/material';
import { HTMLInputTypeAttribute } from 'react';
import { FormattedMessage } from 'react-intl';

interface Props extends React.ComponentProps<typeof Box> {
  label: I18nKey;
  multiline?: boolean;
  value: string;
  hasError?: boolean;
  type?: HTMLInputTypeAttribute;
  inputRef?: React.MutableRefObject<HTMLInputElement | null>;
  maxLength?: number;
  handleChange: (value: string) => void;
  autoFocus?: boolean;
  hint?: I18nKey;
}

const TextField = ({
  value,
  handleChange,
  hasError,
  type,
  inputRef,
  label,
  multiline,
  maxLength = multiline ? 2000 : 100,
  autoFocus,
  hint,
  ...props
}: Props) => {
  return (
    <Box {...props}>
      <InputLabel htmlFor={label}>
        <FormattedMessage id={label} />
      </InputLabel>
      <MuiTextField
        inputProps={{ maxLength }}
        error={hasError}
        inputRef={inputRef}
        type={type}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        id={label}
        multiline={multiline}
        autoFocus={autoFocus}
      />
      {hint && (
        <Typography color="neutral01.300" fontSize={10} sx={{ marginTop: 1 }}>
          <FormattedMessage id={hint} />
        </Typography>
      )}
    </Box>
  );
};

export default TextField;
