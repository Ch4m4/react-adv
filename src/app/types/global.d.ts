declare module '*.scss';
declare module '*.svg' {
  const content: React.ElementType<React.ComponentPropsWithRef<'svg'>>;
  export default content;
}

declare const __IS_DEV__: boolean;
