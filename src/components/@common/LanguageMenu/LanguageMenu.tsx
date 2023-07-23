import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { useLocale } from 'hooks/useLocale';
import { Locale } from 'types/i18n.types';

import { IcoArrow } from 'components/@icons';

import { DropDownButton, DropDownItem, DropDownMenu } from '.';

interface Props {
  variant?: 'text' | 'default';
}

const LanguageMenu = ({ variant = 'default' }: Props) => {
  const { locale, updateLocale } = useLocale();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLocaleClick = (newLocale: Locale) => {
    updateLocale(newLocale);
    setAnchorEl(null);
  };

  return (
    <>
      <DropDownButton $variant={variant} onClick={handleClick} endIcon={<IcoArrow />}>
        <Typography variant={variant === 'text' ? 'caption01' : 'webParagraph02'}>
          <FormattedMessage id={`language.${locale}` as I18nKey} />
        </Typography>
      </DropDownButton>
      <DropDownMenu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        {router.locales?.map((option, index) => (
          <DropDownItem
            $selected={!!(option === locale)}
            disableRipple
            disableTouchRipple
            key={index}
            onClick={() => handleLocaleClick(option as Locale)}
          >
            <Typography variant="paragraph02">
              <FormattedMessage id={`language.${option}` as I18nKey} />
            </Typography>
          </DropDownItem>
        ))}
      </DropDownMenu>
    </>
  );
};

export default LanguageMenu;
