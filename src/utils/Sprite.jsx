import React from "react";
import SvgSprite from "react-svg-sprite";

// К сожалению, автор не подготовил типизацию для своей библиотеки, поэтому файл формата .jsx

const Sprite = () => {
  return (
    <SvgSprite
      symbols={[
        {
          name: "edit",
          fill: "currentColor",
          svg: '<svg viewBox="0 0 32 32"><path d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z"/></svg>',
        },
        {
          name: "logout",
          fill: "currentColor",
          svg: '<svg viewBox="0 0 320 320"><g><path id="XMLID_7_" d="M51.213,175.001h173.785c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15H51.213l19.394-19.394 c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0L4.396,149.393c-0.351,0.351-0.683,0.719-0.997,1.103 c-0.137,0.167-0.256,0.344-0.385,0.515c-0.165,0.22-0.335,0.435-0.488,0.664c-0.14,0.209-0.261,0.426-0.389,0.64 c-0.123,0.206-0.252,0.407-0.365,0.619c-0.118,0.22-0.217,0.446-0.323,0.67c-0.104,0.219-0.213,0.435-0.306,0.659 c-0.09,0.219-0.164,0.442-0.243,0.664c-0.087,0.24-0.179,0.477-0.253,0.722c-0.067,0.222-0.116,0.447-0.172,0.672 c-0.063,0.249-0.133,0.497-0.183,0.751c-0.051,0.259-0.082,0.521-0.119,0.782c-0.032,0.223-0.075,0.443-0.097,0.669 c-0.048,0.484-0.073,0.971-0.074,1.457c0,0.007-0.001,0.015-0.001,0.022c0,0.007,0.001,0.015,0.001,0.022 c0.001,0.487,0.026,0.973,0.074,1.458c0.022,0.223,0.064,0.44,0.095,0.661c0.038,0.264,0.069,0.528,0.121,0.79 c0.05,0.252,0.119,0.496,0.182,0.743c0.057,0.227,0.107,0.456,0.175,0.681c0.073,0.241,0.164,0.474,0.248,0.71 c0.081,0.226,0.155,0.453,0.247,0.675c0.091,0.22,0.198,0.431,0.3,0.646c0.108,0.229,0.21,0.46,0.33,0.685 c0.11,0.205,0.235,0.4,0.354,0.599c0.131,0.221,0.256,0.444,0.4,0.659c0.146,0.219,0.309,0.424,0.466,0.635 c0.136,0.181,0.262,0.368,0.407,0.544c0.299,0.364,0.616,0.713,0.947,1.048c0.016,0.016,0.029,0.034,0.045,0.05l45,45.001 c2.93,2.929,6.768,4.394,10.607,4.394c3.838-0.001,7.678-1.465,10.606-4.393c5.858-5.858,5.858-15.355,0.001-21.213L51.213,175.001 z"/><path id="XMLID_8_" d="M305.002,25h-190c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15s15-6.716,15-15V55h160v210.001h-160 v-45.001c0-8.284-6.716-15-15-15s-15,6.716-15,15v60.001c0,8.284,6.716,15,15,15h190c8.284,0,15-6.716,15-15V40 C320.002,31.716,313.286,25,305.002,25z"/></g></svg>',
        },
        {
          name: "plus",
          fill: "currentColor",
          svg: '<svg viewBox="0 0 95 95"><path d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0 c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096 c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476 c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62 s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z"/></svg>',
        },
        {
          name: "trash",
          fill: "currentColor",
          svg: '<svg viewBox="0 0 40 40"><path d="M16.6667 30C17.1087 30 17.5326 29.8244 17.8452 29.5119C18.1577 29.1993 18.3333 28.7754 18.3333 28.3334V18.3334C18.3333 17.8913 18.1577 17.4674 17.8452 17.1549C17.5326 16.8423 17.1087 16.6667 16.6667 16.6667C16.2246 16.6667 15.8007 16.8423 15.4882 17.1549C15.1756 17.4674 15 17.8913 15 18.3334V28.3334C15 28.7754 15.1756 29.1993 15.4882 29.5119C15.8007 29.8244 16.2246 30 16.6667 30ZM33.3333 10H26.6667V8.33337C26.6667 7.00729 26.1399 5.73552 25.2022 4.79784C24.2645 3.86016 22.9927 3.33337 21.6667 3.33337H18.3333C17.0073 3.33337 15.7355 3.86016 14.7978 4.79784C13.8601 5.73552 13.3333 7.00729 13.3333 8.33337V10H6.66667C6.22464 10 5.80072 10.1756 5.48816 10.4882C5.17559 10.8008 5 11.2247 5 11.6667C5 12.1087 5.17559 12.5327 5.48816 12.8452C5.80072 13.1578 6.22464 13.3334 6.66667 13.3334H8.33333V31.6667C8.33333 32.9928 8.86012 34.2646 9.7978 35.2022C10.7355 36.1399 12.0073 36.6667 13.3333 36.6667H26.6667C27.9927 36.6667 29.2645 36.1399 30.2022 35.2022C31.1399 34.2646 31.6667 32.9928 31.6667 31.6667V13.3334H33.3333C33.7754 13.3334 34.1993 13.1578 34.5118 12.8452C34.8244 12.5327 35 12.1087 35 11.6667C35 11.2247 34.8244 10.8008 34.5118 10.4882C34.1993 10.1756 33.7754 10 33.3333 10ZM16.6667 8.33337C16.6667 7.89135 16.8423 7.46742 17.1548 7.15486C17.4674 6.8423 17.8913 6.66671 18.3333 6.66671H21.6667C22.1087 6.66671 22.5326 6.8423 22.8452 7.15486C23.1577 7.46742 23.3333 7.89135 23.3333 8.33337V10H16.6667V8.33337ZM28.3333 31.6667C28.3333 32.1087 28.1577 32.5327 27.8452 32.8452C27.5326 33.1578 27.1087 33.3334 26.6667 33.3334H13.3333C12.8913 33.3334 12.4674 33.1578 12.1548 32.8452C11.8423 32.5327 11.6667 32.1087 11.6667 31.6667V13.3334H28.3333V31.6667ZM23.3333 30C23.7754 30 24.1993 29.8244 24.5118 29.5119C24.8244 29.1993 25 28.7754 25 28.3334V18.3334C25 17.8913 24.8244 17.4674 24.5118 17.1549C24.1993 16.8423 23.7754 16.6667 23.3333 16.6667C22.8913 16.6667 22.4674 16.8423 22.1548 17.1549C21.8423 17.4674 21.6667 17.8913 21.6667 18.3334V28.3334C21.6667 28.7754 21.8423 29.1993 22.1548 29.5119C22.4674 29.8244 22.8913 30 23.3333 30Z"/></svg>',
        },
      ]}
    />
  );
};

export default Sprite;
