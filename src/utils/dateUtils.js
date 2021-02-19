import format from 'date-fns/format';
const DATE_FORMAT = 'dd/MM/yyyy';

export function formatDate(date, options = {year: 'numeric', month: 'short', day: '2-digit'}) {
  const dateToFormat = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat('es-ES', options).format(dateToFormat);
}

export function formatDateToBackendFormat(date) {
  return format(date, DATE_FORMAT);
}
