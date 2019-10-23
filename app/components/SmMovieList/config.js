/* eslint-disable prettier/prettier */
import * as breakpoints from 'breakpoints';

export const slideSettings = {
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 10,
  slidesToScroll: 10,
  dots: true,
  responsive: [
    {
      breakpoint: breakpoints.lg,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: breakpoints.md,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: breakpoints.sm,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
  ],
};
