// /* z-index */
// --z-base: 0;
// --z-base-1: 1;
// --z-base-5: 5;
// --z-base-10: 10;

// --z-header: 50; /** NOTE: Header 컴포넌트, 알림과 로그인 상태 보여지는 곳 */

// --z-page-header: calc(var(--z-header) + 1); /** NOTE: 페이지 헤더 - 상단에 위치 */
// --z-loading: calc(var(--z-header) + 1); /** NOTE: 로딩 스피너 - 상단에 위치 */
// --z-sidebar: calc(var(--z-header) + 1); /** NOTE: header보다 위에 있어야 함; */
// --z-tooltip: calc(var(--z-header) + 1); /** NOTE: 툴팁 - 상단에 위치 */

// --z-dropdown: calc(var(--z-header) + 2); /** NOTE: 드롭다운 - 상단에 위치 */
// --z-banner: calc(var(--z-header) + 2);
// --z-refresh: calc(var(--z-header) + 2);

// --z-ie-warning: calc(var(--z-header) + 10); /** NOTE: IE 경고창 - 상단에 위치 */
// --z-modal: calc(var(--z-header) + 10); /** NOTE: 모달창 - 상단에 위치 */
// --z-backdrop: calc(var(--z-modal) - 1);
// --z-inModal-tooltip: calc(var(--z-modal) + 1);
// --z-modal-dimmer: calc(var(--z-modal) + 1);

// --z-inModal-dropdown: calc(var(--z-modal) + 1);

// --z-toast: calc(var(--z-header) + 1000); /** NOTE: 토스트 메시지 - 최상단에 위치 */

const headerZIndex = 50;

export const popperZIndex = headerZIndex + 1;
export const modalZIndex = headerZIndex + 10;
// header z-index 55
export const overHeaderZIndex = headerZIndex + 6;
export const loadingZIndex = headerZIndex + 1;
export const toastZIndex = headerZIndex + 1000;
export const tooltipZIndex = headerZIndex + 10;

export const zIndex = {
  popper: popperZIndex,
  modal: modalZIndex,
  loading: loadingZIndex,
  overHeader: overHeaderZIndex,
  toast: toastZIndex,
  tooltip: tooltipZIndex,
} as const;
