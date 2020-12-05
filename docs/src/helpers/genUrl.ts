const IS_DEV = false;

export const genUrl = (subPath: string) => {
  if (IS_DEV) {
    return `/${subPath}`;
  } else {
    return `/winter-hackathon-2020/${subPath}`;
  }
};
