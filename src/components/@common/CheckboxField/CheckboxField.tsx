import { Checkbox, FormControlLabel } from '@mui/material';
import { FormattedMessage } from 'react-intl';

interface Props {
  label: I18nKey | React.ReactElement;
  checked: boolean;
  handleChange: (checked: boolean) => void;
}

const CheckboxField = ({ checked, handleChange, label }: Props) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={(e) => handleChange(e.target.checked)} />}
      label={typeof label === 'string' ? <FormattedMessage id={label} /> : label}
    />
  );
};

export default CheckboxField;
