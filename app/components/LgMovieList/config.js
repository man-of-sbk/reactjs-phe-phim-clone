/* eslint-disable prettier/prettier */
import * as breakpoints from 'breakpoints';

export const slideSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: breakpoints.lg,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: breakpoints.md,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: breakpoints.sm,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: breakpoints.xs,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
