import { useEffect } from 'react';

/**
 * Web Animation API polyfill
 */
const useAnimation = () => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line import/no-unresolved
    import('web-animations-js');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useAnimation;
