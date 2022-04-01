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

declare type PrefixKey<Type, Keyword extends string> = {
  [Key in keyof Type as `${Keyword}${Capitalize<string & Key>}`]: Type[Key];
};

declare type PostfixKey<Type, Keyword extends string> = {
  [Key in keyof Type as `${Key}${Capitalize<string & Keyword>}`]: Type[Key];
};
