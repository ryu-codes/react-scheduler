export const formatDate = (d) => {
  const monthFormat = d.getMonth() + 1;
  const dateFormat = d.getDate();
  const dayOfWeekFormat = d.getDay();
  return [monthFormat, dateFormat, dayOfWeekFormat];
};
