export default function dateToWeekName(dateStr: string) {
  const date = new Date(dateStr);
  const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
  return dayName;
}
