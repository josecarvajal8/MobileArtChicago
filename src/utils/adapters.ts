export const sanitizeWebTags = (input: string) => {
  const regex = /<[^>]*>/g;
  return input.replace(regex, '');
};

export const formatEventDate = (start: string, end: string): string => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const isSameDate = startDate.toDateString() === endDate.toDateString();

  const dateFormatter = new Intl.DateTimeFormat('en', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
  const formattedStartDate = dateFormatter.format(startDate);

  if (isSameDate) {
    const timeFormatter = new Intl.DateTimeFormat('en', {
      hour: 'numeric',
      minute: 'numeric',
    });
    const formattedTime = timeFormatter.format(startDate);
    return `${formattedStartDate} | ${formattedTime}`;
  } else {
    const timeFormatter = new Intl.DateTimeFormat('en', {
      hour: 'numeric',
      minute: 'numeric',
    });
    const formattedStartTime = timeFormatter.format(startDate);
    const formattedEndTime = timeFormatter.format(endDate);
    return `${formattedStartDate} | ${formattedStartTime}–${formattedEndTime}`;
  }
};
