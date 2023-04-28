import { isToday, isTomorrow, isThisYear, format } from 'date-fns';

function formatDate(dateString: string) {
  const date = new Date(dateString);

  if (isToday(date)) {
    return 'Today';
  }

  if (isTomorrow(date)) {
    return 'Tomorrow';
  }

  return format(date, isThisYear(date) ? 'MMMM dd' : 'MMMM dd, yyyy');
}

export default formatDate;
