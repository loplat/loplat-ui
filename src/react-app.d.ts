/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare type PrefixKey<T, Keyword extends string> = {
  [K in keyof T as `${Keyword}${Capitalize<string & K>}`]: T[K];
};

declare type PostfixKey<T, Keyword extends string> = {
  [K in keyof T as `${K}${Capitalize<string & Keyword>}`]: T[K];
};

declare type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
