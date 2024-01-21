export const sanitizeWebTags = (input: string) => {
  const regex = /<[^>]*>/g;
  return input.replace(regex, '');
};
