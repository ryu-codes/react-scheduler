export const formatDate = (d) => {
  // const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const dayOfWeek = d.getDay();
  // TODO: Add other locales for dayOfWeekStr
  const dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek];
  const formattedDate = `${month}月${date}日(${dayOfWeekStr})`;
  return formattedDate;
};
