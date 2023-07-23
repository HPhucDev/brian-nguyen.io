import MESSAGES_EN from '../src/services/i18n/translations/en.json';

declare global {
  type I18nKey = keyof typeof MESSAGES_EN;
  namespace FormatjsIntl {
    interface Message {
      ids: I18nKey;
    }
  }
}
