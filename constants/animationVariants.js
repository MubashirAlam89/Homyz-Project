export const animationVariants = {
  toLeft: {
    initial: { scaleX: 1 },
    animate: {
      scaleX: 0,

      transition: { duration: 0.8 },
    },
  },
  fadeUp: {
    initial: { opacity: 0, y: 80 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6 } },
  },
  zoomOut: {
    initial: { scale: 1.2, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  },
  fadeLeft: {
    initial: { opacity: 0, x: -200 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  },
  fadeRight: {
    initial: { opacity: 0, x: 200 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  },
  zoomIn: {
    initial: { scale: 0.5, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  },
};
