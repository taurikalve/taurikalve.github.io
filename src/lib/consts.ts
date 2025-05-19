export const isDev = process.env.NODE_ENV === 'development';

export const modeLabels: { [M in Mode]: string } = {
  full: 'Full-Stack',
  front: 'Front-End',
};
