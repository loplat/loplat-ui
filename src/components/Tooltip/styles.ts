import styled from '@emotion/styled';
import { blue100, bluescale600, MarginSpacing, marginSpacingStyle, spacing } from '../../core';

export const Wrapper = styled.div<MarginSpacing & { fullWidth: boolean }>`
  position: relative;
  width: ${(props) => (props.fullWidth ? '100%' : 'fit-content')};
  display: flex;

  ${marginSpacingStyle};
`;

export const Popper = styled.div`
  position: absolute;
  max-width: 400px;
  width: max-content;
  display: table; // NOTE: safari, firefox에서 max-content를 cross browsing 하기 위함
  opacity: 0;

  overflow-wrap: break-word;
  word-break: keep-all;

  box-sizing: border-box;
  padding: ${spacing(3)}px;
  color: ${blue100};
  background-color: ${bluescale600};
  border-radius: 8px;
  box-shadow: 2px 2px 4px 0 rgba(200, 212, 224, 0.3);
`;
