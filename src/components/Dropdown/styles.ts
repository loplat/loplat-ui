import {
  black,
  blue100,
  blue500,
  bluescale100,
  bluescale500,
  grayscale200,
  grayscale50,
  grayscale500,
  primary,
  spacing,
  styled,
  white,
} from '../../core';

export const Bar = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: ${spacing(4)}px ${spacing(6)}px;
  border: 1px solid ${grayscale200};
  border-radius: 4px;

  background-color: ${white};
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: ${black};
    &[aria-placeholder] {
      color: ${grayscale500};
    }
  }

  .arrowIcon {
    pointer-events: none;
    transform: rotate(0);
    transition: transform 0.3s;
    will-change: transform;
  }

  &:hover {
    border-color: ${grayscale500};
  }
  &[aria-expanded='true'] {
    border-color: ${blue500};
    .arrowIcon {
      transform: rotate(180deg);
    }
  }
  &[aria-disabled='true'] {
    background-color: ${grayscale50};
    cursor: not-allowed;
    span {
      color: ${grayscale500};
    }
  }
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: 2px solid ${primary};
  }
`;

export const OptionList = styled.ul`
  position: absolute;
  opacity: 0;
  transform-origin: center top;
  transform: scale(0.75);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

  box-shadow: 0 1px 8px 0 rgba(200, 212, 224, 0.3);
  list-style-type: none;
  background-color: white;

  box-sizing: border-box;
  padding: ${spacing(4)}px;
  border: 1px solid ${grayscale200};
  margin: 0;
`;

export const Option = styled.li`
  display: flex;
  align-items: center;
  padding: ${spacing(4)}px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${blue100};
  }

  &[aria-selected='true'] {
    color: ${blue500};
    background-color: ${bluescale100};
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
    color: ${bluescale500};
  }
`;
