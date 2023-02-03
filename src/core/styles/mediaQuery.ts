export const Large = '@media screen and (min-width: 1024px) and (orientation: landscape)';
export const Small = '@media screen and (max-width: 1023px)';
/** how to detect mobile device within stylesheet
 * - @link https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer
 * - @link https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover
 * */
export const Mobile = '@media only screen and (hover: none) and (pointer: coarse)';
export const NotMobile = '@media (pointer: fine)';
