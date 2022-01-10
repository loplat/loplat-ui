import React from 'react';
import type { LogoProps } from '../index';
export const Loplat = React.memo<LogoProps>(({ width = 18, className, style }) => (
  <svg
    width={width}
    height={(width * 137) / 434}
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={className}
    viewBox="0 0 434 137"
  >
    <g fill="#48B8E7" fillRule="evenodd">
      <path d="M39.505 83.583v23.272H21.137c-5.79 0-10.822-2.081-14.93-6.19C2.081 96.54 0 91.529 0 85.738V.03h23.417v83.553h16.088zM72.351 83.564h36.592V48.167H72.351v35.397zm58.307-45.639c-1.013-2.479-2.569-4.778-4.632-6.859-4.108-4.108-9.139-6.189-14.93-6.189H70.179c-5.773 0-10.804 2.081-14.912 6.189-4.108 4.126-6.207 9.139-6.207 14.93v39.74c0 5.791 2.099 10.822 6.207 14.93 4.108 4.108 9.121 6.189 14.912 6.189h40.917c5.809 0 10.822-2.081 14.93-6.189 4.108-4.126 6.189-9.139 6.189-14.93v-39.74c0-2.896-.525-5.61-1.557-8.071zM278.365 83.636v23.272h-18.368c-5.81 0-10.822-2.081-14.93-6.19-4.108-4.125-6.207-9.138-6.207-14.928V.1h23.435v83.536h16.07zM403.471 48.12v35.415h29.534v23.273H401.3c-5.899 0-10.947-2.082-15.002-6.208-4.072-4.107-6.116-9.12-6.116-14.911V0h23.29v24.828h29.534v23.29h-29.534zM167.431 83.565h36.592V48.168h-36.592v35.397zm53.675-52.499c-4.108-4.108-9.139-6.189-14.93-6.189h-40.899c-5.791 0-10.821 2.081-14.929 6.189-4.108 4.126-6.208 9.157-6.208 14.93v90.936h23.291v-30.077h38.745c5.809 0 10.822-2.081 14.93-6.189 4.126-4.126 6.207-9.157 6.207-14.912v-39.74c0-5.791-2.081-10.822-6.207-14.948zM308.247 85.453h38.383v-7.8h-38.383v7.8zm53.929-52.752c-3.927-3.927-8.741-5.936-14.279-5.936h-61.131v21.481h59.864v7.8h-39.65c-5.537 0-10.351 2.009-14.296 5.954-3.927 3.945-5.918 8.777-5.918 14.314v10.424c0 5.519 1.991 10.333 5.918 14.278 3.945 3.927 8.759 5.918 14.296 5.918h42.691c4.813-.38 9.012-2.335 12.505-5.827 3.945-3.963 5.935-8.777 5.935-14.297V46.997c0-5.555-1.99-10.369-5.935-14.296z" />
    </g>
  </svg>
));
