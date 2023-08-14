export default function dateToHour(dateStr: string) {
  const date = new Date(dateStr);
  const hour = date.toLocaleTimeString('en-US', { hour: 'numeric' });
  return hour;
}
