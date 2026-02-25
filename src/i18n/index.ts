import ko from "./messages/ko.json";
import en from "./messages/en.json";

export const messages = {
  ko,
  en,
};

export type AppLocale = keyof typeof messages;

