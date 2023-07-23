declare module 'mq-polyfill' {
  export type ContextType = {
    innerWidth: number;
    innerHeight: number;
    screen: Screen;
    addEventListener: (eventName: string, cb: () => void) => void;
    MediaQueryList?: Class<MediaQueryList>;
    matchMedia?: MatchMediaType;
    resizeTo: (width: number, height: number) => void;
    resizeBy: (width: number, height: number) => void;
  };

  declare const matchMediaPolyfill: (context: ContextType) => void;
  export default matchMediaPolyfill;
}
