export function formatDuration(minutes: number) {
  const days = Math.floor(minutes / (24 * 60));
  const hours = Math.floor((minutes % (24 * 60)) / 60);
  const remainingMinutes = minutes % 60;

  let result = "";
  if (days > 0) {
    result += days + " дн ";
  }
  if (hours > 0) {
    result += hours + " час ";
  }
  if (remainingMinutes > 0) {
    result += remainingMinutes + " мин ";
  }

  return result.trim();
}
