export const isProd = () => process.env.NODE_ENV === 'production';
export const isDev = () => process.env.NODE_ENV === 'development';
export const runInDev = (func: () => void) => (isDev() ? func() : null);
export const runInProd = (func: () => void) => (isProd() ? func() : null);
export const isMockingEnabled = () => process.env.NEXT_PUBLIC_MOCKING_ENABLED === 'true';
