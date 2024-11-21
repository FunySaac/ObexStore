import { resources, defaultNS } from './i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof DEFAULT_NS;
    resources: typeof resources[''];
  }
}

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}